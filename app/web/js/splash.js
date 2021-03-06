/*
 * Контроллер для работы со сплэш-страницей
 */
define(
	['feed', 'tiles', 'utils', 'flipper', 'locker', 'auth', 'image-preloader'], 
	function(feed, tiles, utils, flipper, locker, auth, imagePreloader) {

	var mainTiles = null;
	var mainSwypeGroup = null;

	function payloadPosts(payload) {
		var posts = _.clone(payload.posts);
		if (payload.app) {
			posts.unshift(payload.app);
			payload.app.type = 'page';
		}

		if (payload.app_banner) {
			posts.length--;
			posts.splice(2, 0, utils.transformPost(payload.app_banner));
		}

		return posts;
	}

	function renderTiles(data) {
		var posts = payloadPosts(data);
		var result = $(tiles.create(posts));
		result.attr('data-post-ids', _.pluck(posts, 'id').join(','))

		// вешаем триггеры на плитку
		result.find('.tiles__item').each(function() {
			var tile = $(this);
			var tileType = tile.attr('data-type');
			if (tileType == 'app_banner') {
				tile.attr('data-trigger', 'app_banner:' + tile.attr('data-url'));
			} else {
				var itemId = tile.attr('data-post-id');
				var action = tileType == 'page' ? 'show_page:' : 'show_post:';
				tile.attr('data-trigger', action + itemId);
			}
		});

		// добавляем pull to refresh
		result.append('<div class="pull-to-refresh"><i class="icon icon_refresh"></i>Потяните, чтобы обновить</div>');

		return result;
	}

	function animateSpinner(spinner, deg) {
		deg = deg || 0;
		var degStep = 4;
		var transformCSS = Modernizr.prefixed('transform');
		return new Tween({
			duration: 'infinite',
			autostart: true,
			step: function() {
				deg = (deg + degStep) % 360;
				spinner.style[transformCSS] = 'rotate(' + deg + 'deg)';
			},
			complete: function() {
				spinner.style[transformCSS] = 'none';
			}
		});
	}

	function cleanTile(tile) {
		if (!tile) return;
		tile.style.backgroundImage = 'none';
		while (tile.firstChild) {
			tile.removeChild(tile.firstChild);
		}
	}

	function setupFlipper(elem, options) {
		var pullToRefresh = $(elem).find('.pull-to-refresh');
		var spinner = pullToRefresh.find('.icon')[0];
		var transformCSS = Modernizr.prefixed('transform');
		var spinnerDeg = 0;

		var rotateSpinner = function(delta) {
			if (delta) {
				spinnerDeg = (spinnerDeg + delta) % 360;
			}

			spinner.style[transformCSS] = 'rotate(' + spinnerDeg + 'deg)';
		}

		return flipper.attach(elem, '.tiles', _.extend({
			prevConstrain: 110,
			swypeOnInit: true
		}, options || {}))
		.on('activated', function() {
			// загружаем соседние картинки
			var images = $([this.prevElement(), this.nextElement()])
				.find('.tiles__item')
				.map(function(i, tile) {
					return $(tile).attr('data-image');
				});
			imagePreloader.preloadImages(images);
		})
		.on('createLayer', function(layer, key) {
			if (~layer.className.indexOf('tiles_main')) return;

			var items = layer.getElementsByClassName('tiles__item');
			if (key == 'cur2' || key == 'next' || key == 'prev2') {
				cleanTile(items[0]);
				// cleanTile(items[1]);
			} else {
				// cleanTile(items[4]);
				cleanTile(items[5]);
			}
		})
		.on('pointerDown', function() {
			if (!this.hasPrev()) {
				pullToRefresh.show();
			} else {
				pullToRefresh.hide();
			}
		})
		.on('willSnapPrevConstrain', function() {
			locker.lock('pull-to-refresh');
		})
		.on('prevConstrainSnapped', function() {
			var that = this;
			var spinnerTween = animateSpinner(spinner, spinnerDeg);
			requestNewFeeds(elem, function(isUpdated, data) {
				spinnerTween.stop();
				that.animate(that.options.prevConstrain, 0, function() {
					if (isUpdated) {
						showNewFeed(elem, data, function() {
							locker.unlock('pull-to-refresh');
						});
					} else {
						updateCommentCount(elem);
						locker.unlock('pull-to-refresh');
					}
				}, {axis: 'y'});
			});
		})
		.on('flipTo', function(pos, deg) {
			if (!this.hasPrev() && spinner && pos > 0) {
				spinnerDeg = -2 * deg;
				rotateSpinner();
			}
		});
	}

	function requestNewFeeds(elem, callback) {
		// получаем идентификаторы последних новостей
		elem = $(elem);
		var curIds = elem.attr('data-post-ids').split(',');

		feed.get('splash', {nocache: true, withDelay: 2000}, function(data) {
			var posts = payloadPosts(data);
			var isUpdated = !!_.find(posts, function(post, i) {
				return post.id != curIds[i];
			});

			callback(isUpdated, data);
		});
	}

	function updateCommentCount(elem) {
		$(elem).find('.tiles__item').each(function(i, tile) {
			tile = $(tile);
			var post = feed.getPost(tile.attr('data-post-id'));
			tile.find('.icon_comment').text(post.comment_count);
		});
	}

	function showNewFeed(oldFeed, postsData, callback) {
		oldFeed = $(oldFeed)[0];

		mainTiles = renderTiles(postsData);
		setupFlipper(mainTiles, {
			swypeOnInit: true
		});

		var transformCSS = Modernizr.prefixed('transform');
		
		mainTiles[0].style[transformCSS] = 'rotateY(-180deg)'
		mainTiles.css({
			zIndex: 100
		}).after(oldFeed);

		updateAuthData();

		new Tween({
			duration: 1300,
			easing: 'easeInOutCubic',
			autostart: true,
			step: function(pos) {
				var deg = pos * 180;
				var scale = 1 - Math.sin(pos * Math.PI) * 0.3;
				mainTiles[0].style[transformCSS] = 'rotateY(' + (deg - 180) + 'deg) scale(' + scale +')';
				oldFeed.style[transformCSS] = 'rotateY(' + (deg) + 'deg) scale(' + scale +')';
			},
			complete: function() {
				$(oldFeed).remove();
				callback(mainTiles);
			}
		});
	}

	function updateAuthData() {
		if (mainTiles) {
			mainTiles.find('.tiles').each(function() {
				auth.updateUserInfo(this);
			});
		}
	};

	auth.on('authorized', updateAuthData);

	return {
		/**
		 * Генерирует данные для главной страницы приложения
		 * @param  {Function} callback
		 */
		create: function(callback) {
			feed.get('splash', function(data) {

				// DEMO
				// data.app_banner = {
				// 	"title": "One Free Book a Day",
				// 	"image": "http:\/\/www.iphones.ru\/wp-content\/uploads\/2013\/06\/overview_more_title.png",
				// 	"app_url": "fb341746605944290://target_url=608249&",
				// 	"fallback_url": "itms-apps://itunes.com/app/onefreebookaday"
				// };

				mainTiles = renderTiles(data);
				mainSwypeGroup = setupFlipper(mainTiles);
				updateAuthData();

				if (callback) {
					callback(mainTiles, mainSwypeGroup);
				}
			});
		},

		/**
		 * Обновляет плитки для главной страницы: запрашивает данные с сервера
		 * и, при необходимости, переделывает страницы с новыми данными
		 * @param {Element} elem Контейнер с плитками, который нужно обновить
		 * @param {Function} callback
		 */
		reload: function(elem, callback) {
			var spinner = elem.find('.swype-item_current .tiles__refresh')[0];
			var spinnerTween = animateSpinner(spinner);

			locker.lock('reload_splash');

			requestNewFeeds(elem, function(isUpdated, data) {
				spinnerTween.stop();
				spinnerTween = null;

				if (isUpdated) {
					showNewFeed(elem, data, function(newFeed) {
						locker.unlock('reload_splash');
						callback(newFeed);
					});
				} else {
					updateCommentCount(elem);
					locker.unlock('reload_splash');
					callback();
				}
			});
		}
	};
});