/**
 * iOS-like view transitions
 */
var swype = (function() {
	var defaultOptions = {
		flipDistance: 200,
		tapzone: 0,
		xCoeff: 0.4,
		yCoeff: 0.4,
		maxShadeOpacity: 0.8,
		shadeOpacityOffset: 0.2,
		optimizeLayout: true,
		shade: true,
		prevConstrain: null,
		nextConstrain: null,

		viewportTest: function(viewport, x, y) {
			return viewport.left <= x && viewport.right >= x
				&& viewport.top <= y && viewport.bottom >= y;
		}
	};
	
	var groups = [];
	/** @type TransitionGroup */
	var activeGroup = null;
	
	var ua = navigator.userAgent;
	
	var allowDrag = Modernizr.touch || ua.match(/windows\s+phone\s+os/i);
	allowDrag = true;
	
	var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	
	var transformCSS = Modernizr.prefixed('transform');
	// Do not use translate3d in Chrome since it breaks text rendering
	var translateTmpl = _.template(Modernizr.csstransforms3d && !isChrome 
			? 'translate3d(<%= x %>px, <%= y %>px, 0)'
			: 'translate(<%= x %>px, <%= y %>px)');
	
	var flipTmpl = _.template('rotateX(<%= angle %>deg)');
	
	var animDefaults = {
		duration: 450,
		easing: 'easeOutCubic'
	};
	
	var pointerTests = [];

	var flipWrapper = $('<div class="swype-flip"></div>')[0];
	var shadeWrapper = $('<div class="swype__shade"></div>')[0];

	function dasherize(name) {
		return name.replace(/[A-Z]/g, function(ch) {
			return '-' + ch.toLowerCase();
		});
	}

	function _rotate(key, deg) {
		var degKey = key + 'Deg';
		if (this[key] && this[degKey] !== deg) {
			if (typeof deg == 'undefined') {
				deg = this[degKey];
			}
			this[key].style[transformCSS] = 'rotateX(' + deg + 'deg)';
		}
		this[degKey] = deg;
	}

	function _opacity(key, val) {
		var opKey = key + 'Op';
		if (this[key] && this[opKey] !== val) {
			this[key].style.opacity = val;
		}
		this[opKey] = val;
	}

	function _style(key, name, val) {
		if (this[key]) {
			var styleKey = key + 'Style';
			if (!this[styleKey]) {
				this[styleKey] = {};
			}

			if (this[styleKey][name] !== val) {
				this[styleKey][name] = this[key].style[name] = val;
			}
			
		}
	}

	function cloneCanvas(original, target) {
		target.width = original.width;
		target.height = original.height;

		var ctx = target.getContext('2d');
		ctx.drawImage(original, 0, 0);
	}
	
	/**
	 * @type TransitionGroup
	 * @param {Array} elems
	 * @param {Object} options
	 */
	function TransitionGroup(elems, options) {
		this.elems = elems;
		this.options = _.extend({}, defaultOptions, options || {});
		this.activeElementIndex = -1;
		this.distance = {
			x: 0,
			y: 0
		};
		
		this._animating = false;
		this._locked = false;
		this.activateElement(this.options.active || 0);
	}
	
	TransitionGroup.prototype = {
		/**
		 * Check is passed point is inside group's viewport (or active area)
		 * @param {Number} x
		 * @param {Number} y
		 */
		isPointInViewport: function(x, y) {
			if (this.locked()) {
				return false;
			}
			
			var viewport = this.getViewport();
			if (viewport) {
				// we have viewport, check its bounds
				return this.options.viewportTest(viewport, x, y);
			}
			
			// if viewport options is not defined, it assumes that
			// active area is current window viewport, i.e. it always resolves to
			// true
			return true;
		},
		
		locked: function(val) {
			if (arguments.length)
				this._locked = !!val;
			
			return this._locked;
		},
		
		getViewport: function() {
			var viewport = this.options.viewport;
			
			if (_.isFunction(viewport))
				return viewport();
			
			var docElem = document.documentElement;
			var win = window;
			var body = document.body;
			var box = {top: 0, left: 0, width: win.innerWidth, height: win.innerHeight};
			
			if (_.isElement(viewport)) {
				var rect = viewport.getBoundingClientRect();
				box.left = rect.left;
				box.top = rect.top;
				box.width = rect.right - rect.left;
				box.height = rect.bottom - rect.top;
			}
			
			// viewport is not defined, get it from current window state
			var clientTop  = docElem.clientTop  || body.clientTop  || 0;
			var clientLeft = docElem.clientLeft || body.clientLeft || 0;
			var scrollTop  = win.pageYOffset || docElem.scrollTop;
			var scrollLeft = win.pageXOffset || docElem.scrollLeft;
			
			box.top += scrollTop - clientTop;
			box.left += scrollLeft - clientLeft;
			box.right = box.left + box.width;
			box.bottom = box.top + box.height;
			
			return box;
		},
		
		getViewportWidth: function() {
			var vp = this.getViewport();
			return vp.right - vp.left;
		},
		
		getViewportHeight: function() {
			var vp = this.getViewport();
			return vp.bottom - vp.top;
		},
		
		/**
		 * Returns element for transition from group's list 
		 * @param {Number} ix
		 * @returns {HTMLElement}
		 */
		getElement: function(ix) {
			return this.elems[ix];
		},
		
		releaseElements: function() {
			$(this.elems).removeClass('swype-item swype-item_current swype-item_next swype-item_prev');
		},
		
		activateElement: function(ix) {
			if (this.activeElementIndex == ix) {
				return;
			}

			this.activeElementIndex = ix;

			this.releaseElements();
			
			$(this.nextElement()).addClass('swype-item swype-item_next');
			$(this.prevElement()).addClass('swype-item swype-item_prev');
			$(this.activeElement()).addClass('swype-item swype-item_current');

			if (this.options.optimizeLayout) {
				var elParent = null;
				// var elems = [this.prevElement(), this.activeElement(), this.nextElement()];
				var elems = [this.activeElement()];

				// remove all elements from tree
				_.each(this.elems, function(el, i) {
					if (el && el.parentNode) {
						elParent = el.parentNode;
						if (!_.include(elems, el)) {
							elParent.removeChild(el);
						}
					}
				});

				// insert just active elements
				_.each(elems, function(el) {
					if (el && !el.parentNode) {
						elParent.appendChild(el);
					}
				});
			}

			this.trigger('activated', this.activeElement(), this.activeElementIndex);
		},
		
		/**
		 * Returns currently active element from list 
		 * @param {Number} ix
		 * @returns {Element}
		 */
		activeElement: function() {
			return this.getElement(this.activeElementIndex);
		},
		
		hasNext: function() {
			var el = this.nextElement();
			return el && !$(el).hasClass('swype-empty');
		},
		
		nextElement: function() {
			return this.getElement(this.activeElementIndex + 1);
		},
		
		hasPrev: function() {
			var el = this.prevElement();
			return el && !$(el).hasClass('swype-empty');
		},
		
		prevElement: function() {
			return this.getElement(this.activeElementIndex - 1);
		},
		
		/**
		 * Go to next item
		 * @returns {Tween}
		 */
		next: function(callback, options) {
			if (!this.locked() && !this._animating && this.hasNext()) {
				var start, end;
				options = options || {};
				if (options.axis === 'y' || this.pointerMoved === 'y') {
					start = this.distance.y;
					end = -this.options.flipDistance * 2;
					options.axis = 'y';
				} else {
					start = this.distance.x;
					end = -this.getViewportWidth();
					options.axis = 'x';
				}
				
				return this.animate(start, end, function() {
					this.trigger('next');
					swype.trigger('next');
					
					if (this.options.nextComplete)
						this.options.nextComplete.call(this);
					
					if (callback)
						callback.call(this);

					this.activateElement(this.activeElementIndex + 1);
				}, options);
			}
			
			return null;
		},
		
		/**
		 * Go to previous item
		 * @returns {Tween}
		 */
		prev: function(callback, options) {
			if (!this.locked() && !this._animating && this.hasPrev()) {
				var start, end;
				options = options || {};
				if (options.axis === 'y' || this.pointerMoved === 'y') {
					start = this.distance.y;
					end = this.options.flipDistance * 2;
					options.axis = 'y';
				} else {
					start = this.distance.x;
					end = this.getViewportWidth();
					options.axis = 'x';
				}
				
				return this.animate(start, end, function() {
					this.trigger('prev');
					swype.trigger('prev');
					
					if (this.options.prevComplete)
						this.options.prevComplete.call(this);
					
					if (callback)
						callback.call(this);

					this.activateElement(this.activeElementIndex - 1);
				}, options);
			}
			
			return null;
		},
		
		animate: function(start, end, callback, options) {
			var that = this;
			this._animating = true;
			
			options = options || {};
			if (!options.duration && options.axis === 'x') {
				options.duration = Math.min(Math.max(Math.abs(end - start), animDefaults.duration), 700);
			}
			
			var stepFn = _.bind(options.axis === 'y' ? this.flipTo : this.moveTo, this);
			
			return new Tween(_.extend({}, animDefaults, {
				step: function(pos) {
					stepFn((end - start) * pos + start);
				},
				complete: function() {
					that._animating = false;
					if (!options.noCleanup) {
						that.cleanUp();
					}

					swype.trigger('animationComplete');
					
					if (that.options.animationComplete) {
						that.options.animationComplete.call(that);
					}
					
					if (callback) {
						callback.call(that);
					}
				}
			}, options));
		},
		
		cleanUp: function() {
			if (this._flipData) {
				$(this.activeElement()).show();
				$(this._flipData.wrap).remove();
				this._flipData = null;
			}
		},
		
		/**
		 * Горизонтальное перемещение страниц
		 * @param {Number} pos Смещение по горизонтали
		 */
		moveTo: function(pos) {
			this.distance.x = pos;
			
			this.trigger('moveTo', pos);
			
			this.activeElement().style[transformCSS] = translateTmpl({
				x: Math.min(pos, 0), 
				y: 0
			});
			
			var p = this.prevElement();
			if (p) {
				p.style[transformCSS] = translateTmpl({
					x: Math.max(pos, 0), 
					y: 0
				});
			}
		},

		_makeFlipLayer: function(elem, key, data, clip, className) {
			if (!elem) return;

			var clone = elem.cloneNode(true);
			this.trigger('createLayer', clone, key);

			if (clip) {
				clone.style.clip = clip;
			}

			if (className) {
				clone.className += ' ' + className;
			}

			data[key] = clone;

			var degKey = key + 'Deg';
			if (degKey in data) {
				data.rotate(key);
			}

			if (this.options.shade) {
				data[key + 'Shade'] = shadeWrapper.cloneNode();
				clone.appendChild(data[key + 'Shade']);
			}

			data.wrap.appendChild(clone);
			return clone;
		},

		_deferredSetupFlipData: function(isNextDir) {
			var next = this.nextElement();
			var prev = this.prevElement();
			var cur = this.activeElement();
			var wrapper = flipWrapper.cloneNode();

			var half = Math.round(cur.offsetHeight / 2);
			var leaveTop = 'rect(auto, auto, ' + half + 'px, auto)';
			var leaveBottom = 'rect(' + half + 'px, auto, auto, auto)';

			var that = this;
			var changeDir = null;
			var data = {
				isNextDir: isNextDir,
				wrap: wrapper,
				opacity: _opacity,
				rotate: _rotate,
				s: _style,
				changeDirection: function() {
					if (changeDir) {
						changeDir();
						changeDir = null;
					}
				}
			};

			if (isNextDir) {
				this._makeFlipLayer(cur, 'cur2', data, leaveBottom, 'swype-dupe');
				if (next) {
					this._makeFlipLayer(next, 'next', data, leaveBottom);
					this._makeFlipLayer(next, 'next2', data, leaveTop, 'swype-dupe');
				} else {
					that._makeFlipLayer(cur, 'cur', data, leaveTop);
					cur.style.display = 'none';
				}

				changeDir = function() {
					if (next) {
						that._makeFlipLayer(cur, 'cur', data, leaveTop);
					}
					that._makeFlipLayer(prev, 'prev', data, leaveTop);
					that._makeFlipLayer(prev, 'prev2', data, leaveBottom);
					cur.style.display = 'none';
				};
			} else {
				this._makeFlipLayer(cur, 'cur', data, leaveTop);
				this._makeFlipLayer(cur, 'cur2', data, leaveBottom, 'swype-dupe');
				cur.style.display = 'none';
				if (prev) {
					this._makeFlipLayer(prev, 'prev', data, leaveTop);
					this._makeFlipLayer(prev, 'prev2', data, leaveBottom, 'swype-dupe');
				}

				changeDir = function() {
					that._makeFlipLayer(next, 'next', data, leaveBottom);
					that._makeFlipLayer(next, 'next2', data, leaveTop, 'swype-dupe');
					cur.style.display = 'none';
				};
			}

			cur.parentNode.insertBefore(wrapper, cur);
			return data;
		},
		
		/**
		 * Вертикальное перемещение страниц (переворачивание)
		 * @param {Number} pos Смещение по вертикали
		 */
		flipTo: function(pos) {
			var elMain = this.activeElement();
			var opt = this.options;
			var angle = Math.min(Math.max(-90 * pos / opt.flipDistance, -180), 180);
			var isNext = angle > 0;
			
			if (!this._flipData) {
				// this._flipData = this._setupFlipData();
				// return;
				this._flipData = this._deferredSetupFlipData(isNext);
			}
			
			this.distance.y = pos;
			var fd = this._flipData;
			if (fd.isNextDir !== isNext && fd.changeDirection) {
				fd.changeDirection();
			}

			fd.rotate('cur', Math.min(0, angle));
			fd.rotate('cur2', Math.max(0, angle));
			fd.rotate('next2', angle - 180);
			fd.rotate('prev2', 180 + angle);

			if (opt.shade) {
				this.shadeFlipTo(pos);
			}

			this.trigger('flipTo', pos, angle);
		},

		shadeFlipTo: function(pos) {
			var opt = this.options;
			var angle = Math.min(Math.max(-90 * pos / opt.flipDistance, -180), 180);
			var absAngle = Math.abs(angle);
			var fd = this._flipData;

			var mso =  opt.maxShadeOpacity;
			var soo = opt.shadeOpacityOffset;

			var isNext = angle > 0;

			fd.s('cur2Shade', 'backgroundColor', isNext ? '#fff' : '#000');

			fd.shDir = isNext ? 'next' : 'prev';
			fd.opacity('curShade', angle < 0 && angle > -90 
				? absAngle / 90 * mso - soo
				: 0);

			var op = 0;
			if (fd.shDir == 'prev' && angle < -60) {
				op = (absAngle - 60) / 80 * mso - soo;
			} else if (fd.shDir == 'next' && angle > 0) {
				op = absAngle / 90 * mso - soo;
			}

			fd.opacity('cur2Shade', op);

			if (fd.next) {
				fd.opacity('nextShade', angle > 0 && angle < 90
					? (1 - Math.max(absAngle - 50, 0) / 40) * mso - soo
					: 0);

				fd.opacity('next2Shade', angle > 90 
					? (180 - absAngle) / 90 * mso - soo 
					: 0);
			}

			if (fd.prev) {
				fd.opacity('prev2Shade', angle < -90 
					? (180 - absAngle) / 90 * mso - soo
					: 0);

				fd.opacity('prevShade', angle < 0 && angle > -90 
					? 1 - Math.max(absAngle - 50, 0) / 40 * mso - soo
					: 0);

				fd.opacity('curShade', angle > 0 && angle < 90
					? (1 - Math.max(absAngle - 50, 0) / 40) * mso - soo
					: 0);
			}
		},
		
		/**
		 * Callback function for pointer-down event (mousedown or touchstart)
		 * @param {Event} evt
		 */
		onPointerDown: function(evt) {
			this.pointerStart = {x: evt.pageX, y: evt.pageY};
			/** @type String */
			this.pointerMoved = null;
			this._moveCoords = [];
			this.activateElement(this.activeElementIndex);
			this._swipeHandled = false;
			this.trigger('pointerDown', evt);
		},
		
		/**
		 * Callback function for pointer-up event (mouseup or touchend)
		 * @param {Event} evt
		 */
		onPointerUp: function(evt) {
			var delta, coeff, maxDistance;
			if (this.pointerMoved) {
				if (!this._swipeHandled && this.pointerMoved === 'y') {
					delta = this.distance.y;
					coeff = this.options.yCoeff;
					maxDistance = this.options.flipDistance;
					
					// если переместили указатель — смотрим на расстояние.
					// если оно достаточно для перемещения к следующему/предыдущему
					// элементу — перемещаемся, иначе — возвращаемся в исходную точку
					if ( !(delta < -maxDistance * coeff && this.next()) && !(delta > maxDistance * coeff && this.prev()) ) {
						var pc = this.options.prevConstrain;
						if (pc !== null && delta >= pc) {
							var that = this;
							that.trigger('willSnapPrevConstrain');
							this.animate(delta, pc, function() {
								that.trigger('prevConstrainSnapped');
							}, {
								axis: this.pointerMoved,
								noCleanup: true
							});
						} else {
							this.animate(delta, 0, null, {
								axis: this.pointerMoved
							});
						}
					}
				}
				
				this.pointerStart = null;
			} else if (this.options.tapzone) {
				// указатель не перемещался — делаем переход по тап-зонам
				return;
			}
			
			this.trigger('pointerUp', evt);
		},
		
		onPointerTap: function(evt) {
			if (this.options.tapzone && !this._animating) {
				// указатель не перемещался — делаем переход по тап-зонам
				var vp = this.getViewport();
				var vpWidth = vp.right - vp.left;
				var pointerX = evt.pageX - vp.left;
				
				if (pointerX < vpWidth * this.options.tapzone) {
					this.prev();
				} else if (pointerX > vpWidth * (1 - this.options.tapzone)) {
					this.next(null, {
						easing: 'easeInOutCubic'
					});
				}
				
				this.trigger('pointerTap', evt);
			}
		},
		
		/**
		 * Callback function for pointer-move event (mousemove or touchmove)
		 * @param {Event} evt
		 */
		onPointerMove: function(evt) {
			var coords = {x: evt.pageX, y: evt.pageY};
			this._moveCoords.push(coords);
			var dx = coords.x - this.pointerStart.x;
			var dy = coords.y - this.pointerStart.y;
			
			if (this.pointerMoved) {
				if (this.pointerMoved === 'x') {
					return;
				}
				var delta = dy;
				var coeff = this.options['yCoeff'];
				
				// обработка перемещения указателя
				if ((delta > 0 && !this.hasPrev()) || (delta < 0 && !this.hasNext())) {
					// пользователь хочет перейти к следующему/предыдущему элементу,
					// но его нет, поэтому перемещаемся с небольшой инерцией
					delta *= coeff;
				}
				
				this.flipTo(delta);
			} else {
				// определяем, началось ли движение
				var threshold = 5;
				
				var adx = Math.abs(dx);
				var ady = Math.abs(dy);
				if (Math.max(adx, ady) > threshold) {
					this.pointerMoved = ady > adx ? 'y' : 'x';
				}
			}
			
			this.trigger('pointerMove', evt);
		},
		
		onPointerSwipe: function(evt) {
			if (this.locked())
				return;
			
			var dir = evt.swipeDirection;
			
			if (dir == 'up' && this.hasNext()) {
				this.next(null, {axis: 'y'});
				this._swipeHandled = true;
			} else if (dir == 'down' && this.hasPrev()) {
				this.prev(null, {axis: 'y'});
				this._swipeHandled = true;
			}
			
			this.trigger('pointerSwipe', evt);
		},
		
		destroy: function() {
			groups = _.without(groups, this);
			this.cleanUp();
			this.trigger('destroy');
			this.off();
		}
	};
	
	// Добавляем event-методы
	_.extend(TransitionGroup.prototype, _.events);
	
	function locateActiveGroup(evt) {
		return _.find(groups, function(item) {
			return !item._animating && item.isPointInViewport(evt.pageX, evt.pageY);
		});
	}
	
	function addEvent(name, callback) {
		$(document).on(name, callback);
	}
	
	// XXX контроллер, которые делегирует pointer-события контекстной группе
	addEvent('pointerstart', function(evt) {
		// let's see if we're able to handler this event
		if (_.find(pointerTests, function(fn) {
			return fn(evt) === false;
		})) {
			return activeGroup = null;
		}
		
		// locate group that matches pointer
		if (activeGroup = locateActiveGroup(evt)) {
			activeGroup.onPointerDown(evt);
		}
	});
	
	addEvent('pointermove', function(evt) {
		if (allowDrag && activeGroup) {
			activeGroup.onPointerMove(evt);
			evt.preventDefault();
		}
	});
	
	addEvent('pointerend', function(evt) {
		// return;
		if (activeGroup) {
			activeGroup.onPointerUp(evt);
			if (evt.moved) {
				activeGroup = null;
			}
		}
	});
	
	addEvent('pointerswipe', function(evt) {
		if (activeGroup) {
			activeGroup.onPointerSwipe(evt);
		}
	});
	
	addEvent('pointertap', function(evt) {
		if (activeGroup) {
			activeGroup.onPointerTap(evt);
			activeGroup = null;
		}
	});
	
	return _.extend({
		setup: function(elems, options) {
			var group = new TransitionGroup(_.toArray(elems), options);
			groups.push(group);
			return group;
		},
		
		addPointerTest: function(fn) {
			if (!_.include(pointerTests, fn))
				pointerTests.push(fn);
		},
		
		removePointerTest: function(fn) {
			pointerTests = _.without(pointerTests, fn);
		}
	}, _.events);
})();