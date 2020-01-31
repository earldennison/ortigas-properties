/*
 * Custom Select
 * 
 *
 * Copyright (c) 2014 BinaryStash
 * Licensed under the MIT license.
 */

(function ($) {

	$.fn.customSelect = function() {

		return this.each( function(i,v) {

			//Ensure that a select element was passed
			if ( !$(v).is('select') ) {
				return false;         
			}

			//Add classes
			$(v).addClass("custom-select");

			//Create a dummy select element
			$(v).after("<div class='custom-select-display'><div class='custom-select-display-value'></div><div class='custom-select-display-arrow'></div></div>");
			var dummy = $(v).next('.custom-select-display');

			//Determine default value. Use current value; if none, use the first.
			var selected = ( $(v).find("option:selected").length > 0 ) ? $(v).find("option:selected").text() : $(v).find("option").eq(0).text();
			dummy.find(".custom-select-display-value").text(selected);
			dummy.attr("data-default",selected);

			//Add events
			$(v).bind("change",function (e) {
				var str = $(e.currentTarget).find("option:selected").text();
				dummy.find(".custom-select-display-value").text(str);
			});

			$(v).bind("blur",function () {
				dummy.removeClass("focused");
			});

			$(v).bind("focus",function() {
				dummy.addClass("focused");
			});

			//Make reset button aware of the custom checkboxes
			var form = $(v).parents("form");
			var reset = form.find("input[type='reset']");
			reset.click( function() {
				form.find(".custom-select-display").each( function(i,v) {
					$(v).find(".custom-select-display-value").html( $(v).attr("data-default") );
				});
			});

		});

	};

}(jQuery));
