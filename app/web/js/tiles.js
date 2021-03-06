/**
 * Модуль для вывода данных в виде плиток
 */
define(
['require', 'utils', 'image-preloader', 'auth'], 
function(require, utils, imagePreloader, auth) {
	function renderFeed(data, options) {
		options = _.extend({
			waitImages: false,
			classNames: '',
			tiles: data,
			user: auth.getUserInfo()
		}, options || {});

		return $(utils.render('tiles', options));
	}

	/**
	 * Возвращает данные для главного блока плиток
	 * @param  {Array} feed Весь поток сплэш-страницы
	 * @return {Array}
	 */
	function getMainTiles(feed) {
		feed = feed.slice(0, 3);
		var categoryHints = ['', 'appstore', 'accessories'];
		return _.map(feed, function(post, i) {
			var cat = _.find(post.categories, function(c) {
				return c.slug == categoryHints[i];
			});

			return cat ? _.extend({}, post, {title: cat.title}) : post;
		});
	}

	return {
		/**
		 * Отрисовывает поток данных в виде плиток.
		 * @param  {Array} feed Данные для отрисовки (обычно JSON-поток новостей)
		 * @return {Element} DOM-элемент с блоками плиток
		 */
		create: function(feed, callback) {
			var reel = $('<div class="tiles-reel"></div>').appendTo(document.body);
			var mainPayload = feed.slice(0, 3);
			var restPayload = feed.slice(3);
			var itemsPerPage = 3;

			var totalPages = 1 + Math.ceil(restPayload.length / itemsPerPage);
			var pageCount = 1;

			reel.append(renderFeed(mainPayload, {
				classNames: 'tiles_main',
				pageNumber: 1,
				totalPages: totalPages
			}));
			
			for (var i = 0; i < restPayload.length; i += itemsPerPage) {
				reel.append(renderFeed(restPayload.slice(i, i + itemsPerPage), {
					pageNumber: ++pageCount,
					totalPages: totalPages,
					classNames: 'tiles_2'
				}));
			}

			var allImages = reel.find('.tiles__item').map(function(i, tile) {
				return $(tile).attr('data-image');
			});

			imagePreloader.addImages(allImages);
			imagePreloader.preloadImages(allImages.slice(0, 6), callback);

			return reel[0];
		}
	};
});