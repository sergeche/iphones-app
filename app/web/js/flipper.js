/**
 * Модуль, отвечающий за добавление и инициализацию механизма переворачивания
 * страниц для указанного контейнера
 */
define(function() {
	return {
		attach: function(container, items, options) {
			var group = null;

			container = $(container);
			return container
				.on('history:attach', function() {
					if (!group) {
						var elems = _.isString(items) ? container.find(items) : items;
						group = swype.setup(_.toArray(elems), _.extend({
							viewport: container[0],
							tapzone: 0
						}, options || {}));
					}

					group.locked(false);
				})
				.on('history:detach', function() {
					if (group) {
						group.locked(true);
					}
				})
				.on('history:remove', function() {
					if (group) {
						group.destroy();
						group = null;
					}
				});
		}
	};
});