/**
 * Вспомогательные утилиты
 * @memberOf __utilsModule
 * @constructor
 */
define(function() {
	var module = null;
	var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 
		'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

	var knownCategories = ['news', 'appstore', 'accessories'];

	Handlebars.registerHelper('format_date', function(str) {
		return new Handlebars.SafeString(module.formatDate(str));
	});

	/**
	 * Для указанного объекта с постом создаёт поле image, 
	 * в котором будет храниться путь к основной картинке
	 * @param {Object} post
	 */
	function setImage(post) {
		if (!post.image && post.content) {
			post.content = post.content.replace(/<img\s+[^>]*src=['"](.+?)['"].*?>/i, function(img, src) {
				post.image = src;
				return '';
			});
		}
		
		return post;
	}

	return module = {
		/**
		 * Возвращает шаблон с указанным названием
		 * @memberOf utilsModule
		 * @param  {String} name Название шаблона
		 * @return {Object}
		 */
		template: function(name) {
			var tmpl = Handlebars._templates['templates/' + name + '.hbs'];
			return Handlebars.template(tmpl);
		},

		/**
		 * Отрисовывает данные <code>data</code> в шаблоне 
		 * с названием <code>template</code>
		 * @param  {String} template Название шаблона
		 * @param  {Object} data     Данные для отрисовки
		 * @return {String}
		 */
		render: function(template, data) {
			var tmpl = this.template(template);
			if (!tmpl) {
				throw 'Can’t find "' + template + '" template';
			}

			return tmpl(data);
		},

		/**
		 * Парсит дату, пришедшую из JSON API, в объект Date
		 * @param  {String} str
		 * @return {Date}
		 */
		parseDate: function(str) {
			var m = str.match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2}):(\d{2})$/);
			return m ? new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6], 0) : null;
		},

		/**
		 * Форматирует дату в удобочитаемый формат
		 * @param  {Object} dt Дата для преобразования (строка из JSON API 
		 * или <code>Date</code>)
		 * @return {String}
		 */
		formatDate: function(dt) {
			if (_.isString(dt)) {
				dt = this.parseDate(dt);
			}

			var str = dt.getDate() + ' ' + months[dt.getMonth()];
			if ((new Date).getFullYear() != dt.getFullYear()) {
				str += ' ' + dt.getFullYear();
			}

			return str;
		},

		/**
		 * Преобразует переданный объект с габаритами к нормальному виду
		 * @param {Object} size
		 */
		makeSize: function(size) {
			if (_.isElement(size)) {
				var sizeAttr = $(size).attr('data-size');
				if (sizeAttr) {
					sizeAttr = sizeAttr.split('x');
					return {
						width: +sizeAttr[0],
						height: +sizeAttr[1]
					};
				} else {
					return {
						width: size.offsetWidth,
						height: size.offsetHeight
					};
				}
			}

			return size;
		},

		/**
		 * Возвращает коэффициент масштабирования, при котором прямоугольник
		 * <code>originalSize</code> полносью заполнит прямоугольник 
		 * <code>maxSize</code>. Коэффициент может быть как больше, так и меньше 1.
		 * 
		 * @param {Rect} maxSize Прямоугольник, в который нужно вписаться 
		 * @param {Rect} originalSize Прямогульник, который должен вписаться в 
		 * <code>originalSize</code>
		 * @returns {Number}
		 */
		getScaleCoeff: function(maxSize, originalSize) {
			maxSize = this.makeSize(maxSize);
			originalSize = this.makeSize(originalSize);

			var wCoeff = maxSize.width / originalSize.width;
			var hCoeff = maxSize.height /originalSize.height;
			return Math.max(wCoeff, hCoeff);
		},

		/**
		 * Снимает экранирование с HTML-кода
		 * @param  {String} html
		 * @return {String}
		 */
		unescapeHTML: function(html) {
			var entities = {
				"quot": "\u0022",
				"amp":  "\u0026",
				"apos": "\u0027",
				"lt":   "\u003C",
				"gt":   "\u003E"
			};

			return html.replace(/\&(\w+);/g, function(full, name) {
				return (name in entities) ? entities[name] : full;
			});
		},

		getKnownCategory: function(post) {
			return _.find(post.categories, function(c) {
				return _.include(knownCategories, c.slug);
			});
		},

		transformPost: function(post) {
			// post.allowComments = post.comment_status == 'open';
			post.allowComments = 'comment_count' in post;
			setImage(post);

			if (!post.url) {
				post.url = '';
			}

			if (post.app_url) {
				post.type = 'app_banner';
				post.url = 'app://external' 
					+ '?app_url=' + encodeURIComponent(post.app_url)
					+ '&fallback_url=' + encodeURIComponent(post.fallback_url || '');
			}

			if (~post.title.indexOf(':::')) {
				var parts = post.title.split(':::');
				post.title = $.trim(parts[1] || '');
				post.subtitle = $.trim(parts[0] || '');
			}

			return post;
		},

		centerImage: function(image, imageSize, targetSize) {
			var coeff = this.getScaleCoeff(targetSize, imageSize);
			var transformCSS = Modernizr.prefixed('transform');
			image.style[transformCSS] = 'translate(-50%, -50%) scale(' + coeff + ')';
			// image.width = Math.round(imageSize.width * coeff);
			// image.height = Math.round(imageSize.height * coeff);
		}
	};
});