;(function($) {
	var jQueryWindowPositionExist = false;
	try { $(window).position(); jQueryWindowPositionExist = true; } catch (e) {}
	if (!jQueryWindowPositionExist) {
		$.fn.originalPosition = $.fn.position;
		$.fn.position = function() {
			if (this && "object" == typeof this && this[0] == window) {
				var position = function() {
						return 0 <= /MSIE|Trident/i.test(navigator.userAgent) ? { x: window.screenLeft, y: window.screenTop } : { x: window.screenX, y: window.screenY };
					}();
				return {
					top: position.y,
					left: position.x
				};
			}
			else return $.fn.originalPosition.apply(this, arguments);
		}
	}
})(jQuery);
