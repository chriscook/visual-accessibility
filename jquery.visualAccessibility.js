/*
 * Visual Accessibility jQuery Plugin version 1.0
 * Chris Cook - chris@chris-cook.co.uk
 */

(function ($) {

	$.fn.visualAccessibility = function (options) {

		var settings = $.extend({
			textSize : true,
			colourSchemes : [{
				background : '#FFFFFF',
				text : '#000000'
			}, {
				background: '#000000',
				text: '#FFFFFF'
			}]
		}, options),
		$container = $(this),
		$vsac,
		element = '<div id="vsac-controls">',
		i;

		if (settings.textSize) {
			element += '<span>Text size</span><a data-vsac-action="font-size-increase">+</a><a data-vsac-action="font-size-decrease">-</a>';
		}
		if (settings.colourSchemes.length > 0) {
			element += '<span>Colours</span>';
			for (i = 0; i < settings.colourSchemes.length; i++) {
				element += '<a data-vsac-action="colour-scheme" data-vsac-colour-scheme="' + i + '" style="background:' + settings.colourSchemes[i].background + ';color:' + settings.colourSchemes[i].text + '">Aa</a>';
			}
		}
		element += '</div>';

		$('body').append(element);
		$vsac = $('#vsac-controls');

		$vsac.on('click', 'a', function () {
			var currentFontSize = $container.css('font-size'),
			newFontSize,
			$clickedButton = $(this);
			currentFontSize = parseInt(currentFontSize.substring(0, currentFontSize.indexOf('p')), 10);
			switch ($clickedButton.data('vsac-action')) {
				case 'font-size-increase':
					newFontSize = (currentFontSize + 1) + 'px';
					$container.animate({'font-size' : newFontSize}, 400);
					break;
				case 'font-size-decrease':
					newFontSize = (currentFontSize - 1) + 'px';
					$container.animate({'font-size' : newFontSize}, 400);
					break;
				case 'colour-scheme':
					var colourScheme = $clickedButton.data('vsac-colour-scheme');
					$container.css('background', settings.colourSchemes[colourScheme].background).css('color', settings.colourSchemes[colourScheme].text);
					break;
			}
		});

		return this;

	};

})(jQuery);
