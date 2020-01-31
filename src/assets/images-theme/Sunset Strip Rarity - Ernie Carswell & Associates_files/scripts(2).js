	( function() {

	var app = {
		initHeaderFunction: function() {

			var iScrollPos = 0;

			jQuery(window).scroll(function () {
			    var iCurScrollPos = jQuery(this).scrollTop();

			    if (jQuery(window).width() > 991) {
			        if (iCurScrollPos >= 20 )
			        {
			            jQuery(".header-wrapper").addClass( "sticking" );
			        } 
			        else 
			        {
			            jQuery(".header-wrapper").removeClass( "sticking" );
			        }


			   }

			});

			jQuery(window).resize(function () {
			
				menumobile();

				app.initIframeResponsive();

			});


			/* Toggle Menu script */


			function menumobile(){

				    if (jQuery(window).width() < 991) {
											     
						jQuery('.menu-item-330').insertAfter('.menu-item-319');
						jQuery('.menu-item-333').insertAfter('.menu-item-324');

					   }

			}

			menumobile();


			function toggleState() {
				if (jQuery('#menu-toggle').hasClass('active')) {
					jQuery('#menu-toggle').removeClass('active');
					jQuery('#menu-toggle strong').text('Menu')
				} else {
					jQuery('#menu-toggle').addClass('active');
					jQuery('#menu-toggle strong').text('Close')
				}
			}
			jQuery('#menu-toggle, .menu-bg').on('click', function() {
				toggleState();
			});

			/* Split Nav */
			jQuery('#menu_nav').splitNav({
				'splitCountEqual': false,
				'splitCount': 3
			});
			/* Append contact info to Contact Link */
			if (jQuery('.append-contact-info').length) {
				jQuery('.menu-contact-info').appendTo('.append-contact-info');
			}
          
			var appendHtml = jQuery('<ul class="group-links menu_nav"></ul>');
			appendHtml.insertBefore(jQuery('.menu_nav .append-group-links').eq(0));
			jQuery('.menu_nav .append-group-links').each(function() {
				jQuery(this).appendTo(appendHtml);
			});

			var appendHtml2 = jQuery('<ul class="contact-info menu_nav"></ul>')
			appendHtml2.appendTo('.menu-navs');
			jQuery('.menu_nav li.append-contact-info').appendTo(appendHtml2);

			jQuery("#nav").navTabDoubleTap();


		}, 
		initFeaturedProperties: function() {
			jQuery('.fp-list').slick({
				dots: false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				slidesPerRow: 4,
				fade: true,
				prevArrow: jQuery('.fp-prev'),
				nextArrow: jQuery('.fp-next'),
				autoplay: true,
				autoplaySpeed: 16000,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							rows: 1,
							slidesPerRow: 1,
						}
					}
				]
			});
		},
		initMeetTheTeam: function() {
			jQuery('.mtt-map area').hover(function() {
				var thisArea = jQuery(this).data('hover');
				jQuery('.mtt-hover.'+thisArea).addClass('active');
			}, function() {
				var thisArea = jQuery(this).data('hover');
				jQuery('.mtt-hover.'+thisArea).removeClass('active');
			});
			jQuery('.mtt-hover').hover(function() {
				var thisDetail = jQuery(this).attr('class').split(' ')[1];
				jQuery('.mtt-hover.'+thisDetail).addClass('active');
			}, function() {
				var thisDetail = jQuery(this).attr('class').split(' ')[1];
				jQuery('.mtt-hover.'+thisDetail).removeClass('active');
			});


			// var hoverTime;
			// jQuery('.mtt-map area').hover(function() {
			// 	var thisArea = jQuery(this).data('hover');
			// 	jQuery('.mtt-hover.'+thisArea).siblings().removeClass('active');
			// 	jQuery('.mtt-hover.'+thisArea).addClass('active');
			// 	clearTimeout(hoverTime)
			// }, function() {
			// 	var thisArea = jQuery(this).data('hover');
			// 	hoverTime = setTimeout(function() {
			// 		jQuery('.mtt-hover.'+thisArea).removeClass('active');	
			// 	}, 1000);
			// });

			// jQuery('.mtt-hover').hover(function() {
			// 	var thisDetail = jQuery(this).attr('class').split(' ')[1];
			// 	jQuery('.mtt-hover.'+thisDetail).siblings().removeClass('active');
			// 	jQuery('.mtt-hover.'+thisDetail).addClass('active');
			// 	clearTimeout(hoverTime)
			// }, function() {
			// 	var thisDetail = jQuery(this).attr('class').split(' ')[1];
			// 	clearTimeout(hoverTime);

			// 	jQuery('.mtt-hover.'+thisDetail).removeClass('active');
			// });

			//mapresponsiveness();
			jQuery(window).resize(mapresponsiveness);

			function mapresponsiveness(){
			    var map = jQuery(".mtt-map-wrap");
			    var mapOrigWidth = 1600;
			    // var mapOrigHeight = 761;
			    var mapOrigHeight = map.find('canvas').attr('height');
			    var container = jQuery(".mtt-map");
			    var containerWidth = container.width();
			    var scale = containerWidth/mapOrigWidth;
			    scale = scale > 1 ? 1 : scale;
				
			    map.css({
			       transform:'scale('+scale+')',
			       transformOrigin:'0 0'
			    });
				
				container.css({
			      height: (mapOrigHeight * scale)
			    });
			}
		}, 
		initActiveSoldProperties: function() {
			jQuery('.asp-result-tab-buttons button').on('click', function() {
				if (!jQuery(this).hasClass('active')) {
					/* Toggle Tab */
					jQuery(this).siblings().removeClass('active');
					jQuery(this).addClass('active');

					/* Show tab */
					jQuery('.asp-result-tab .asp-result-list').siblings().removeClass('active');
					jQuery('.asp-result-tab .asp-result-list.' + jQuery(this).attr('id')).addClass('active');
				}
			});

			/*jQuery('.asp-result-filters input#asp-result-filter-active').on('change', function() {
				jQuery('.placeholder-map').toggleClass('asp-result-filter-active')
			});
			jQuery('.asp-result-filters input#asp-result-filter-sold').on('change', function() {
				jQuery('.placeholder-map').toggleClass('asp-result-filter-sold')
			});*/
		},
		initInTheMedia: function() {
			jQuery('.itm-media-list').slick({
				dots: false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				slidesPerRow: 4,
				fade: true,
				prevArrow: jQuery('.itm-media-buttons .custom-button-prev'),
				nextArrow: jQuery('.itm-media-buttons .custom-button-next'),
			});


			jQuery('.ip-press-list').slick({
				dots: false,
				arrows: true,
				slidesToScroll: 1,
				rows: 2,
				slidesPerRow: 3,
				fade: true,
				autoplay: true,
				autoplaySpeed: 5000,
				prevArrow: jQuery('.ip-press-buttons .custom-button-prev'),
				nextArrow: jQuery('.ip-press-buttons .custom-button-next'),
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesPerRow: 2,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesPerRow: 1,
						}
					}
				]
			});
		}, 
		initReadMoreLess: function() {
			setTimeout(function(){
				jQuery('.testi').each(function(){
						jQuery(this).find('p.excerpt-testi a').click(function(e){
						e.preventDefault();
						jQuery(this).parent().hide();
						jQuery(this).parent().find('.dots').hide();
						jQuery(this).parent().parent().find('p.full-test').show();
						console.log('test');
					});

					jQuery(this).find('p.full-test a').click(function(e){
						e.preventDefault();
						jQuery(this).parent().parent().find('p.excerpt-testi').show();
						jQuery(this).parent().parent().find('.dots').show();
						jQuery(this).parent().hide();

					});
				})
			},100)
			
		}, 
		initTestimonials: function() {
			jQuery('.testi-list').slick({
				dots: false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				slidesPerRow: 2,
				fade: true,
				prevArrow: jQuery('.testi-buttons .custom-button-prev'),
				nextArrow: jQuery('.testi-buttons .custom-button-next'),
				autoplay: true,
				autoplaySpeed: 5000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesPerRow: 1,
						}
					}
				]
			});

		},
		initElementPeek: function() {
			jQuery(".wwwu-wrapper").elementPeek({
			    onViewportIn: function(object) {
			        if (!object.hasClass('scrolled')) {
						object.addClass('scrolled');
						jQuery('.wwwu').each(function() {
							var toCount = jQuery(this).find('span').data('count-number');
							jQuery(this).find('span em').animateNumber({
								number: toCount
							}, 1000);
						});
			        }
			    },
			    peekAmountToTrigger: 0.5
			});

		}, 
		initBlog: function() {
			jQuery('.eb-list').slick({
				dots: false,
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				prevArrow: jQuery('.eb-controls .custom-button-prev'),
				nextArrow: jQuery('.eb-controls .custom-button-next'),
				autoplay: true,
				autoplaySpeed: 10000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]
			});
		},
		initAboutListings: function() {
			jQuery('.ip-about-active-listing-list').slick({
				dots: true,
				appendDots: jQuery('.ip-about-active-listing-dots'),
				arrows: true,
				prevArrow: '<a href="#" class="custom-button-prev"><i class="ai-font-arrow-g-p"></i>Prev</a>',
				nextArrow: '<a href="#" class="custom-button-next">Next<i class="ai-font-arrow-g-n"></i></a>',
				appendArrows: '.ip-about-active-listing-dots',
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]
			});

			jQuery('.ip-about-sold-listing-list').slick({
				dots: true,
				appendDots: jQuery('.ip-about-sold-listing-dots'),
				arrows: true,
				prevArrow: '<a href="#" class="custom-button-prev"><i class="ai-font-arrow-g-p"></i>Prev</a>',
				nextArrow: '<a href="#" class="custom-button-next">Next<i class="ai-font-arrow-g-n"></i></a>',
				appendArrows: '.ip-about-sold-listing-dots',
				slidesToShow: 3,
				slidesToScroll: 3,

				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]
			});

			jQuery('.ip-about-featured-listing-list').slick({
				dots: true,
				appendDots: jQuery('.ip-about-featured-listing-dots'),
				arrows: true,
				prevArrow: '<a href="#" class="custom-button-prev"><i class="ai-font-arrow-g-p"></i>Prev</a>',
				nextArrow: '<a href="#" class="custom-button-next">Next<i class="ai-font-arrow-g-n"></i></a>',
				appendArrows: '.ip-about-featured-listing-dots',
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]
			});


			function fixDots(){
				var total = jQuery('.ip-about-sold-listing-dots.ip-custom-pagination ul.slick-dots > li').size();
				

				jQuery('.ip-about-sold-listing-dots.ip-custom-pagination ul.slick-dots > li').each(function(){
					

						if(jQuery(this).hasClass('slick-active')){
							var counter = jQuery(this).text();
							counter = parseInt(counter);
							jQuery('.ip-about-sold-listing-dots.ip-custom-pagination ul.slick-dots > li').not(this).each(function(){
								jQuery(this).hide();
							})


							if (counter > 3 && counter < (total - 3)) {
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
							}else if (counter == 1){
								jQuery(this).show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').next('li').show();
							}else if(counter == 2){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').show();
							}else if(counter == 3){
								jQuery(this).show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
							}else if(counter == (total-3)){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
							}else if(counter == (total-2)){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
							}else if(counter == (total-1)){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								
							}else if(counter == total){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').prev('li').prev('li').show();
								
							}else{
								jQuery(this).show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').next('li').show();

							}
							// counter++;
							//console.log(total);
							
						}


					});


				var total_2 = jQuery('.ip-about-active-listing-dots.ip-custom-pagination ul.slick-dots > li').size();
				

					jQuery('.ip-about-active-listing-dots.ip-custom-pagination ul.slick-dots > li').each(function(){
						

						if(jQuery(this).hasClass('slick-active')){
							var counter_2 = jQuery(this).text();
							counter_2 = parseInt(counter_2);
							jQuery('.ip-about-active-listing-dots.ip-custom-pagination ul.slick-dots > li').not(this).each(function(){
								jQuery(this).hide();
							})


							if (counter_2 > 3 && counter_2 < (total_2 - 3)) {
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
							}else if (counter_2 == 1){
								jQuery(this).show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').next('li').show();
							}else if(counter_2 == 2){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').show();
							}else if(counter_2 == 3){
								jQuery(this).show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
							}else if(counter_2 == (total_2-3)){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
							}else if(counter_2 == (total_2-2)){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
							}else if(counter_2 == (total_2-1)){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								
							}else if(counter_2 == total_2){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').prev('li').prev('li').show();
								
							}else{
								jQuery(this).show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').next('li').show();

							}
							// counter_2++;
							//console.log(total_2);
							
						}


					});

				var total_3 = jQuery('.ip-about-featured-listing-dots.ip-custom-pagination ul.slick-dots > li').size();
				

					jQuery('.ip-about-featured-listing-dots.ip-custom-pagination ul.slick-dots > li').each(function(){
						

						if(jQuery(this).hasClass('slick-active')){
							var counter_3 = jQuery(this).text();
							counter_3 = parseInt(counter_3);
							jQuery('.ip-about-featured-listing-dots.ip-custom-pagination ul.slick-dots > li').not(this).each(function(){
								jQuery(this).hide();
							})


							if (counter_3 > 3 && counter_3 < (total_3 - 3)) {
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
							}else if (counter_3 == 1){
								jQuery(this).show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').next('li').show();
							}else if(counter_3 == 2){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').show();
							}else if(counter_3 == 3){
								jQuery(this).show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
							}else if(counter_3 == (total_3-3)){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
							}else if(counter_3 == (total_3-2)){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
							}else if(counter_3 == (total_3-1)){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).next('li').show();
								
							}else if(counter_3 == total_3){
								jQuery(this).show();
								jQuery(this).prev('li').show();
								jQuery(this).prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').prev('li').show();
								jQuery(this).prev('li').prev('li').prev('li').prev('li').prev('li').prev('li').show();
								
							}else{
								jQuery(this).show();
								jQuery(this).next('li').show();
								jQuery(this).next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').show();
								jQuery(this).next('li').next('li').next('li').next('li').next('li').next('li').show();

							}
							// counter_3++;
							//console.log(total_3);
							
						}


					});

				}

				fixDots();



				// jQuery('.ip-about-sold-listing-dots.ip-custom-pagination ul.slick-dots > li').find('button').click(function(){
				// 	fixDots();
				// });

				jQuery(".ip-about-sold-listing-list,.ip-about-active-listing-list, .ip-about-featured-listing-list").on("afterChange", function (){
				    fixDots();
				});
		}, 
		initAgetDetails: function() {
			jQuery('.ip-ad-testi-list').slick({
				dots: false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				prevArrow: jQuery('.ip-ad-testi-controls .custom-button-prev'),
				nextArrow: jQuery('.ip-ad-testi-controls .custom-button-next'),
				autoplay: true,
				autoplaySpeed: 10000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesPerRow: 1,
						}
					}
				]
			});
			// $cntr_active = 0;
			// $cntr_sold = 0;
			// $cntr_featured = 0;
			// jQuery(document).scroll(function(){
			// 	if (jQuery('body').hasClass('single-aios-agents')) {
			// 		if(jQuery(this).scrollTop()>=jQuery('div[data-section="sold-listings"]').position().top && $cntr_active == 0){
			// 		   try{
			// 		   	jQuery('div[data-section="sold-listings"] button#slick-slide-control00').click();
			// 		   }catch(err){}
			// 		   $cntr_active = 1;
			// 		}else if(jQuery(this).scrollTop()>=jQuery('div[data-section="active-listings"]').position().top && $cntr_sold == 0){
			// 			try{
			// 				jQuery('div[data-section="active-listings"] button#slick-slide-control00').click();
			// 			}catch(err){}
			// 			$cntr_sold = 1;
			// 		}else if(jQuery(this).scrollTop()>=jQuery('div[data-section="featured-listings"]').position().top && $cntr_featured == 0){
			// 			try{
			// 				jQuery('div[data-section="featured-listings"] button#slick-slide-control20').click();
			// 			}catch(err){}
			// 			$cntr_featured = 1;
			// 		}
			// 	}
			// });
		}, 
		initIframeResponsive: function() {
			if (jQuery('body').hasClass('page-template-template-screening-room')) {
				jQuery('.ip-sr-vid-list').each(function(){
					jQuery(this).click(function(){
						iframeResponsive();
					});
				});	

				function iframeResponsive(){
					var iframewidthAscpect = 897;
					var iframeheightAspect = 505;

					jQuery(".aiosp-iframe-scaler").each(function(){
						var windowwidthAspect = jQuery(this).width();
						var iframeheightResponsive = (iframeheightAspect*windowwidthAspect)/iframewidthAscpect;
						jQuery(".aiosp-iframe-scaler").css("height",iframeheightResponsive);	
					});
					
				}

				
			}
			
		},
		initChangeEmail: function(){
			if(jQuery('#secretEmail').length){
		        var email = jQuery('.ip-ad-contact-email').text();
		        email = email.replace('(at)', '@');
		        email = email.replace('(dotted)', '.');
		        email = email.trim();
		        console.log(email);
		        jQuery('#secretEmail').val(email);

		        }
		},
		initHPBlogScrollToFirstSlide: function(){
			var waypoint = new Waypoint({
			  element: document.getElementById('ernies-blog'),
			  handler: function(direction) {
			    slideToFirst();
			  },
			  offset : '10%'
			})

			function slideToFirst(){
				jQuery('.eb-list').slick("slickGoTo", 0);
				//console.log('testse');
				waypoint.destroy();
			}
		},
		initInnerPageProperties: function() {
			function convertPrice (price) {

				// Nine Zeroes for Billions
				return Math.abs(Number(price)) >= 1.0e+9

				? Math.abs(Number(price)) / 1.0e+9 + "B"
				// Six Zeroes for Millions 
				: Math.abs(Number(price)) >= 1.0e+6

				? Math.abs(Number(price)) / 1.0e+6 + "M"
				// Three Zeroes for Thousands
				: Math.abs(Number(price)) >= 1.0e+3

				? Math.abs(Number(price)) / 1.0e+3 + "K"

				: Math.abs(Number(price));

			}


			var _checkpage = location.href; 
			if(_checkpage.indexOf('sold-gallery') > -1){


						if (jQuery('#slider-price').length) {

						var price_Array = [500000,550000,600000,650000,700000,750000,800000,850000,900000,950000,1000000,1100000,1200000,1300000,1400000,1500000,1600000,1700000,1800000,1900000,2000000,2300000,2500000,2800000,
						3000000,3300000,3500000,3800000,4000000,4300000,4500000,4800000,5000000,6000000,7000000,8000000,9000000,10000000,11000000,12000000,13000000,14000000,15000000,16000000,17000000,18000000,19000000,20000000,
						21000000,22000000,23000000,24000000,25000000,26000000,27000000,28000000,29000000,30000000,31000000,32000000,33000000,34000000,35000000,36000000,37000000,38000000,39000000,40000000,41000000,42000000,43000000,
						44000000,45000000,46000000,47000000,48000000,49000000,50000000];



			 				var value_slider = 0;
						 	var max_slider = 200000000;
						 	var price = '';
						 	if (GetURLParameter('min_price')) {
								price = GetURLParameter('min_price');
								value_slider = getIndex(price);
							}

							if (GetURLParameter('max_price')) {
								maxGprice_ = GetURLParameter('max_price');
								max_slider = getIndex(maxGprice_);
							}else{
								max_slider = price_Array.length-1;
							}

							
							function getIndex(price){
								for (var i = price_Array.length - 1; i >= 0; i--) {
									if(price == price_Array[i]){
										return i;
									}
								}
							}


							if (GetURLParameter('min_price') < 1000000) {
								var minprice = GetURLParameter('min_price');
								minprice = (minprice / 1000);
								minprice = parseInt(minprice);
								var minpricevalue = minprice * 1000;
								
								minprice = minprice + 'K';


								jQuery(".ip-prop-refine-search-form .min-price").text('$' + minprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );
								

							}

							if (GetURLParameter('min_price') >= 1000000 && GetURLParameter('min_price') <= 200000000) {
								var minprice = GetURLParameter('min_price');
								if (GetURLParameter('min_price') % 1000000 == 0 ) {
									minprice = (minprice / 1000000);
									minprice = parseInt(minprice);
								}else{
									minprice = (minprice / 1000000);
									minprice = parseFloat(minprice).toFixed(1);
								}
								
								var minpricevalue = minprice * 1000000;
								
								minprice = minprice + 'M';	


								jQuery(".ip-prop-refine-search-form .min-price").text('$' + minprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );

								
							}


							if (GetURLParameter('max_price')  < 1000000) {
								var maxprice = GetURLParameter('max_price');
								maxprice = (maxprice / 1000);
								maxprice = parseInt(maxprice);
								var maxpricevalue = maxprice * 1000;
								
								maxprice = maxprice + 'K';

								jQuery(".ip-prop-refine-search-form .max-price").text('$' + maxprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );
							}

							if (GetURLParameter('max_price') >= 1000000 && GetURLParameter('max_price') <= 200000000) {
								var maxprice = GetURLParameter('max_price');
								if (GetURLParameter('max_price') % 1000000 == 0 ) {
									maxprice = (maxprice / 1000000);
									maxprice = parseInt(maxprice);
								}else{
									maxprice = (maxprice / 1000000);
									maxprice = parseFloat(maxprice).toFixed(1);
								}
								
								var maxpricevalue = maxprice * 1000000;
								
								maxprice = maxprice + 'M';	

								jQuery(".ip-prop-refine-search-form .max-price").text('$' + maxprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );
							}



						var slider = jQuery('#slider-price');
						var min = jQuery('.ip-prop-refine-search-form .min-price');
						var max = jQuery('.ip-prop-refine-search-form .max-price');
						slider.slider({
							/*range: true,
							step: 50000,
							min: 500000,
							max: 50000000,
							values: [ 500000, 50000000 ],*/
							range: true,
							values: [ value_slider, max_slider ],
							min: 0,
							max: price_Array.length-1,
							step: 1,
							slide: function( event, ui ) {
								/*var minPrice = convertPrice(ui.values[0]);
								var maxPrice = convertPrice(ui.values[1]);
								// console.log(event)
								min.text('$' + minPrice);
								max.text('$' + maxPrice);

								if (ui.values[0] >= 1000000 && ui.values[0] < 2000000 && ui.values[0] < 5000000) {
									slider.slider('option', 'step', 100000);
								} else if (ui.values[0] >= 2000000 && ui.values[0] < 5000000) {
									// slider.slider('option', 'step', 250000);
								} else if (ui.values[0] >= 5000000) {
									// slider.slider('option', 'step', 1000000);
								} else {
									slider.slider('option', 'step', 50000);
								}*/


								if (price_Array[ui.values[0]] < 1000000) {
									var minprice = price_Array[ui.values[0]];
									minprice = (minprice / 1000);
									minprice = parseInt(minprice);
									var minpricevalue = minprice * 1000;
									
									minprice = minprice + 'K';
								}

								if (price_Array[ui.values[0]] >= 1000000 && price_Array[ui.values[0]] <= 200000000) {
									var minprice = price_Array[ui.values[0]];
									if (price_Array[ui.values[0]] % 1000000 == 0 ) {
										minprice = (minprice / 1000000);
										minprice = parseInt(minprice);
									}else{
										minprice = (minprice / 1000000);
										minprice = parseFloat(minprice).toFixed(1);
									}
									
									var minpricevalue = minprice * 1000000;
									
									minprice = minprice + 'M';	
								}


								if (price_Array[ui.values[1]] < 1000000) {
									var maxprice = price_Array[ui.values[1]];
									maxprice = (maxprice / 1000);
									maxprice = parseInt(maxprice);
									var maxpricevalue = maxprice * 1000;
									
									maxprice = maxprice + 'K';
								}

								if (price_Array[ui.values[1]] >= 1000000 && price_Array[ui.values[1]] <= 200000000) {
									var maxprice = price_Array[ui.values[1]];
									if (price_Array[ui.values[1]] % 1000000 == 0 ) {
										//console.log(check1);
										maxprice = (maxprice / 1000000);
										maxprice = parseInt(maxprice);
									}else{
										//console.log(check2);
										maxprice = (maxprice / 1000000);
										maxprice = parseFloat(maxprice).toFixed(1);
									}
									
									var maxpricevalue = maxprice * 1000000;
									
									maxprice = maxprice + 'M';	
								}

								console.log(maxpricevalue+'checkmate');


								jQuery(".ip-prop-refine-search-form .min-price").text('$' + minprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );
								jQuery(".ip-prop-refine-search-form .max-price").text('$' + maxprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );
								// added
								

								jQuery('.ip-prop-refine-search-form .min-price-class').val(minpricevalue);
		                		jQuery('.ip-prop-refine-search-form .max-price-class').val(maxpricevalue);

								

		                		jQuery('.our-properties-form').submit();

								console.log(ui.values[0]);

							}
						});
					}






			}else{	
					if (jQuery('#slider-price').length) {

						var price_Array = [500000,550000,600000,650000,700000,750000,800000,850000,900000,950000,1000000,1100000,1200000,1300000,1400000,1500000,1600000,1700000,1800000,1900000,2000000,2300000,2500000,2800000,
						3000000,3300000,3500000,3800000,4000000,4300000,4500000,4800000,5000000,6000000,7000000,8000000,9000000,10000000,11000000,12000000,13000000,14000000,15000000,16000000,17000000,18000000,19000000,20000000,
						21000000,22000000,23000000,24000000,25000000,26000000,27000000,28000000,29000000,30000000,31000000,32000000,33000000,34000000,35000000,36000000,37000000,38000000,39000000,40000000,41000000,42000000,43000000,
						44000000,45000000,46000000,47000000,48000000,49000000,50000000];



			 				var value_slider = 0;
						 	var max_slider = 50000000;
						 	var price = '';
						 	if (GetURLParameter('min_price')) {
								price = GetURLParameter('min_price');
								value_slider = getIndex(price);
							}

							if (GetURLParameter('max_price')) {
								maxGprice_ = GetURLParameter('max_price');
								max_slider = getIndex(maxGprice_);
							}else{
								max_slider = price_Array.length-1;
							}

							
							function getIndex(price){
								for (var i = price_Array.length - 1; i >= 0; i--) {
									if(price == price_Array[i]){
										return i;
									}
								}
							}


							if (GetURLParameter('min_price') < 1000000) {
								var minprice = GetURLParameter('min_price');
								minprice = (minprice / 1000);
								minprice = parseInt(minprice);
								var minpricevalue = minprice * 1000;
								
								minprice = minprice + 'K';


								jQuery(".ip-prop-refine-search-form .min-price").text('$' + minprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );
								

							}

							if (GetURLParameter('min_price') >= 1000000 && GetURLParameter('min_price') <= 50000000) {
								var minprice = GetURLParameter('min_price');
								if (GetURLParameter('min_price') % 1000000 == 0 ) {
									minprice = (minprice / 1000000);
									minprice = parseInt(minprice);
								}else{
									minprice = (minprice / 1000000);
									minprice = parseFloat(minprice.toFixed(2));
								}
								
								var minpricevalue = minprice * 1000000;
								
								minprice = minprice + 'M';	


								jQuery(".ip-prop-refine-search-form .min-price").text('$' + minprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );

								
							}


							if (GetURLParameter('max_price')  < 1000000) {
								var maxprice = GetURLParameter('max_price');
								maxprice = (maxprice / 1000);
								maxprice = parseInt(maxprice);
								var maxpricevalue = maxprice * 1000;
								
								maxprice = maxprice + 'K';

								jQuery(".ip-prop-refine-search-form .max-price").text('$' + maxprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );
							}

							if (GetURLParameter('max_price') >= 1000000 && GetURLParameter('max_price') <= 50000000) {
								var maxprice = GetURLParameter('max_price');
								if (GetURLParameter('max_price') % 1000000 == 0 ) {
									maxprice = (maxprice / 1000000);
									maxprice = parseInt(maxprice);
								}else{
									maxprice = (maxprice / 1000000);
									maxprice = parseFloat(maxprice).toFixed(1);
								}
								
								var maxpricevalue = maxprice * 1000000;
								
								maxprice = maxprice + 'M';	

								jQuery(".ip-prop-refine-search-form .max-price").text('$' + maxprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );
							}



						var slider = jQuery('#slider-price');
						var min = jQuery('.ip-prop-refine-search-form .min-price');
						var max = jQuery('.ip-prop-refine-search-form .max-price');
						slider.slider({
							/*range: true,
							step: 50000,
							min: 500000,
							max: 50000000,
							values: [ 500000, 50000000 ],*/
							range: true,
							values: [ value_slider, max_slider ],
							min: 0,
							max: price_Array.length-1,
							step: 1,
							slide: function( event, ui ) {
								/*var minPrice = convertPrice(ui.values[0]);
								var maxPrice = convertPrice(ui.values[1]);
								// console.log(event)
								min.text('$' + minPrice);
								max.text('$' + maxPrice);

								if (ui.values[0] >= 1000000 && ui.values[0] < 2000000 && ui.values[0] < 5000000) {
									slider.slider('option', 'step', 100000);
								} else if (ui.values[0] >= 2000000 && ui.values[0] < 5000000) {
									// slider.slider('option', 'step', 250000);
								} else if (ui.values[0] >= 5000000) {
									// slider.slider('option', 'step', 1000000);
								} else {
									slider.slider('option', 'step', 50000);
								}*/


								if (price_Array[ui.values[0]] < 1000000) {
									var minprice = price_Array[ui.values[0]];
									minprice = (minprice / 1000);
									minprice = parseInt(minprice);
									var minpricevalue = minprice * 1000;
									
									minprice = minprice + 'K';
								}

								if (price_Array[ui.values[0]] >= 1000000 && price_Array[ui.values[0]] <= 50000000) {
									var minprice = price_Array[ui.values[0]];
									if (price_Array[ui.values[0]] % 1000000 == 0 ) {
										minprice = (minprice / 1000000);
										minprice = parseInt(minprice);
									}else{
										minprice = (minprice / 1000000);
										minprice = parseFloat(minprice).toFixed(1);
									}
									
									var minpricevalue = minprice * 1000000;
									
									minprice = minprice + 'M';	
								}


								if (price_Array[ui.values[1]] < 1000000) {
									var maxprice = price_Array[ui.values[1]];
									maxprice = (maxprice / 1000);
									maxprice = parseInt(maxprice);
									var maxpricevalue = maxprice * 1000;
									
									maxprice = maxprice + 'K';
								}

								if (price_Array[ui.values[1]] >= 1000000 && price_Array[ui.values[1]] <= 50000000) {
									var maxprice = price_Array[ui.values[1]];
									if (price_Array[ui.values[1]] % 1000000 == 0 ) {
										//console.log(check1);
										maxprice = (maxprice / 1000000);
										maxprice = parseInt(maxprice);
									}else{
										//console.log(check2);
										maxprice = (maxprice / 1000000);
										maxprice = parseFloat(maxprice).toFixed(1);
									}
									
									var maxpricevalue = maxprice * 1000000;
									
									maxprice = maxprice + 'M';	
								}

								console.log(maxpricevalue+'checkmate');


								jQuery(".ip-prop-refine-search-form .min-price").text('$' + minprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );
								jQuery(".ip-prop-refine-search-form .max-price").text('$' + maxprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );
								// added
								

								jQuery('.ip-prop-refine-search-form .min-price-class').val(minpricevalue);
		                		jQuery('.ip-prop-refine-search-form .max-price-class').val(maxpricevalue);

								

		                		jQuery('.our-properties-form').submit();

								console.log(ui.values[0]);

							}
						});
					}
				}	
		}, 
		initFeaturedListingDetailsPhotos: function() {
			jQuery('.ip-listing-photo-slick-slider').slick({
				dots: false,
				infinite: true,
				speed: 1000,
				fade: true,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				nextArrow: jQuery('.ip-ld-next'),
  				prevArrow: jQuery('.ip-ld-prev'),
	  			autoplaySpeed: 5000
			});

			jQuery('.ip-ld-alt-main-photo').slick({
				dots: false,
				infinite: true,
				speed: 1000,
				fade: true,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				nextArrow: jQuery('.ip-ld-next'),
  				prevArrow: jQuery('.ip-ld-prev'),
	  			autoplaySpeed: 5000,
	  			asNavFor: '.ip-ld-alt-thumb-photo'
			});

			jQuery('.ip-ld-alt-thumb-photo').slick({
				dots: false,
				infinite: true,
				speed: 1000,
				// fade: true,
				arrows: false,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
	  			autoplaySpeed: 5000,
	  			focusOnSelect: true,
	  			asNavFor: '.ip-ld-alt-main-photo'
			});
		},
		initPopup: function() {

			 setTimeout(function(){
               var _checkpopupIP = sessionStorage.getItem("popupformIP");
               if(_checkpopupIP){
                    jQuery('.mir-popup-wrapper').css('display','none');
               }else{
                   jQuery('section.mir-popup-wrapper').addClass('active');
                   sessionStorage.setItem("popupformIP", "1");
               }
           },12000)


           jQuery('section.mir-popup-wrapper span.close-popup').click(function(){
                    console.log('enter');
                   sessionStorage.setItem("popupformIP", "1");
                   


                   jQuery('.mir-popup-wrapper').css('transition','unset');
                   jQuery('.mir-popup-wrapper').fadeOut();
                   setTimeout(function(){
                   	jQuery('section.mir-popup-wrapper').removeClass('active');
                   },500)
                   // setTimeout(function(){
                   //     jQuery('section.mir-popup-wrapper').addClass('active');
                   // },1500000)

           });



			var _checkpopup = sessionStorage.getItem("popupform");
			if(_checkpopup){
				 jQuery('.mir-popup-wrapper').css('display','none');
			}

			jQuery('.signup-submit .wpcf7-submit').click(function(){

				setTimeout(function(){
				var _checkok = jQuery('.wpcf7-mail-sent-ok').text();

				   if(_checkok){
				       sessionStorage.setItem("popupform", "1");
				         jQuery('.mir-popup-wrapper').css('display','none');
				   }
				  },2000);
			});

		},
		initFeaturedListingDetailsThumbs: function() {



			jQuery('.ip-ld-thumb-area').slick({
				dots: false,
				infinite: true,
				speed: 1000,
				// fade: true,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				nextArrow: jQuery('.ip-ld-thumb-next'),
  				prevArrow: jQuery('.ip-ld-thumb-prev'),
	  			autoplaySpeed: 8000
			});


			jQuery('.big_thumbnails').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: true,
			  prevArrow: '<span class="slick-prev ai-font-arrow-b-p slick-arrow"></span>',
			  nextArrow: '<span class="slick-next ai-font-arrow-b-n slick-arrow"></span>',
			  fade: true,
			  asNavFor: '.small_thumbnails'
			});

			jQuery('.small_thumbnails').slick({
			  slidesToShow: 7,
			  slidesToScroll: 1,
			  asNavFor: '.big_thumbnails',
			  dots: false,
			  arrows: false,
			  centerMode: true,
			  centerPadding: '0px'
			});

			jQuery('.ip-ld-thumb-slide-list > div a').click(function(){

					jQuery('.aiosp-content.aios-popup-body').addClass('thumbnails_sildeshow');
					jQuery('.aiosp-container').addClass('thumbnails_sildeshow_wrapper');

					// try{
					// 	jQuery('.big_thumbnails').slick('unslick');
					// 	jQuery('.small_thumbnails').slick('unslick');
					// }catch(err){}

					

					var slideno = jQuery(this).attr('data_slide_index');
				    jQuery('.big_thumbnails').slick('slickGoTo', slideno);

					
			});

			// jQuery('button.aiosp-close').click(function(){
			// 	jQuery('.big_thumbnails').slick('unslick');
			// 	jQuery('.small_thumbnails').slick('unslick');
			// });

			
		},


		initCommDetailsThumbs: function() {
			jQuery('.ip-comm-details-listing-list').slick({
				dots: true,
				appendDots: jQuery('.ip-comm-details-listing-dots'),
				arrows: true,
				prevArrow: '<a href="#" class="custom-button-prev"><i class="ai-font-arrow-g-p"></i>Prev</a>',
				nextArrow: '<a href="#" class="custom-button-next">Next<i class="ai-font-arrow-g-n"></i></a>',
				appendArrows: '.ip-comm-details-listing-dots',
				// slidesToShow: 1,
				// slidesToScroll: 1,
				rows: 2,
				slidesPerRow: 3,
				autoplay: true,
				autoplaySpeed: 15000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							rows: 2,
							slidesPerRow: 2,
						}
					},
					{
						breakpoint: 768,
						settings: {
							rows: 1,
							slidesPerRow: 1,
						}
					}
				]
			});
		},

		initPreMarket: function() {
            if (jQuery('.ip-pm-countdown').length) {

                var cnt  = 0;
                var counter = 0;

                jQuery('.ip-pm-countdown').each(function() {

                    var countdown = jQuery(this).data('countdown');

                    console.log(countdown);

                    var endTime =  parseInt(86400000) - parseInt(jQuery.now() / 1000);
                    
                    console.log(endTime);                    
                    var jNowSec = (jQuery.now() / 1000);
                    // jNowSec = jNowSec;    

                    //DATE NEEDS TO CONVERT TO EPOCH
                      cnt++;
                    jQuery(this).ClassyCountdown({
                        theme: "white",
                        //end: '1571554741',                        
                        end: countdown,
                       now: jQuery.now() / 1000,
                        labels: true,
                        labelsOptions: {
                            lang: {
                                days: 'Days',
                                hours: 'Hours',
                                minutes: 'Minutes',
                                seconds: 'Seconds'
                            },
                        },                        
                        style: {
                            element: '',
                            labels: false,
                            textCSS: '',
                            days: {
                                gauge: {
                                    thickness: 0.12,
                                    bgColor: 'rgba(0,0,0,0.0)',
                                    fgColor: '#debf89',
                                    lineCap: 'round'
                                },
                                textCSS: ''
                            },
                            hours: {
                                gauge: {
                                    thickness: 0.12,
                                    bgColor: 'rgba(0,0,0,0.0)',
                                    fgColor: '#debf89',
                                    lineCap: 'round'
                                },
                                textCSS: ''
                            },
                            minutes: {
                                gauge: {
                                    thickness: 0.12,
                                    bgColor: 'rgba(0,0,0,0.0)',
                                    fgColor: '#debf89',
                                    lineCap: 'round'
                                },
                                textCSS: ''
                            },
                            seconds: {
                                gauge: {
                                    thickness: 0.12,
                                    bgColor: 'rgba(0,0,0,0.0)',
                                    fgColor: '#debf89',
                                    lineCap: 'round'
                                },
                                textCSS: ''
                            }
                        },                        
                        onEndCallback: function () {
                            console.log(cnt)
                                endOH(cnt);
                        }
                    });
                  
                });

                function endOH(count){
                    jQuery('.ip-pm-countdown').each(function(){
                        
                         counter++;
                        if(counter == count){
                            jQuery(this).html('Just Launched');
                            var aref = jQuery(this).parent().parent().find('a').attr('title');
                            jQuery(this).parent().parent().find('a').attr('href', aref);

                            jQuery(this).parent().parent().find('.fp-btn.btn-a').removeClass('hide');
                            console.log(aref);
							//jQuery(this).find('.fp a').attr('href', aref);
				                        }

                        console.log('counter ='+counter+' count ='+count);

                        
                    })

                     counter = 0;
                }

            }
        },


		initBreadcrumbs: function() {
			var url = window.location.pathname;

			var include_url_buyers = ['/buyers/explore-la-neighborhoods/', '/buyers/mls-search/'];
			var count_buyers = include_url_buyers.length - 1 ;
			while(count_buyers >= 0){
				if (url.indexOf(include_url_buyers[count_buyers ]) > -1) {
					jQuery('.ip-banner-wrap #breadcrumbs > span > span:nth-of-type(2)').find('a').attr('href', 'https://carswellandassociates.com/buyers/explore-la-neighborhoods/');		
				}
				count_buyers--;
			}
			



			var include_url_sellers = ['/sellers/custom-home-valuation/', '/sellers/our-marketing/'];
			var count_sellers = include_url_sellers.length - 1;
			while(count_sellers >= 0){
				console.log(include_url_sellers[count_sellers ]);
				if (url.indexOf(include_url_sellers[count_sellers ]) > -1) {
					jQuery('.ip-banner-wrap #breadcrumbs > span > span:nth-of-type(2)').find('a').attr('href', 'https://carswellandassociates.com/sellers/custom-home-valuation/');		
				}
				count_sellers--;
			}
		},

		 mapAreaAjax: function () {
            var thisObj = this;
            jQuery.post(
                ajaxurl,
                {
                    'action': 'hp_map_list_ajax',
                    'data': ''
                },
                function (result) {
                    var data = jQuery.parseJSON(result);
                    thisObj.activeResult = data.activeResult;
                    thisObj.soldResult = data.soldResult;

                    thisObj.mapArea();
                }
            );
        },

        mapArea: function () {
            var map;
            var markers = [];

            var icon_base = window.location.href + '/wp-content/themes/carswellandassociates.com/images/';

            var drop_duration = 10;

            var icons = {
                active: icon_base + 'icon-ma-active-2.png',
                sold: icon_base + 'icon-ma-sold-2.png'
            };

            /** Property Results **/
            activeResult = this.activeResult;
            soldResult = this.soldResult;


            /** Push Property Results to Array **/
            var featuresActive = [];
            jQuery.each(activeResult, function (index, value) {
                featuresActive.push({
                    title: value.title,
                    address: value.address,
                    latitude: value.latitude,
                    longitude: value.longitude,
                    type: 'info',
                    icon: value.icon,
                    url: value.url
                });
            });

            var featuresSold = [];
            jQuery.each(soldResult, function (index, value) {
                featuresSold.push({
                    title: value.title,
                    address: value.address,
                    latitude: value.latitude,
                    longitude: value.longitude,
                    type: 'info',
                    icon: value.icon,
                    url: value.url
                });
            });

            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 12,
                    center: new google.maps.LatLng(34.0814754, -118.40140859999997),
                    mapTypeId: 'roadmap',
                    styles:[
							    {
							        "featureType": "administrative",
							        "elementType": "labels.text.fill",
							        "stylers": [
							            {
							                "color": "#444444"
							            }
							        ]
							    },
							    {
							        "featureType": "landscape",
							        "elementType": "all",
							        "stylers": [
							            {
							                "color": "#f2f2f2"
							            }
							        ]
							    },
							    {
							        "featureType": "landscape.natural.landcover",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "color": "#928c8c"
							            }
							        ]
							    },
							    {
							        "featureType": "poi",
							        "elementType": "all",
							        "stylers": [
							            {
							                "visibility": "off"
							            }
							        ]
							    },
							    {
							        "featureType": "road",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": -100
							            },
							            {
							                "lightness": 45
							            }
							        ]
							    },
							    {
							        "featureType": "road.highway",
							        "elementType": "all",
							        "stylers": [
							            {
							                "visibility": "simplified"
							            }
							        ]
							    },
							    {
							        "featureType": "road.arterial",
							        "elementType": "labels.icon",
							        "stylers": [
							            {
							                "visibility": "off"
							            }
							        ]
							    },
							    {
							        "featureType": "transit",
							        "elementType": "all",
							        "stylers": [
							            {
							                "visibility": "off"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "all",
							        "stylers": [
							            {
							                "color": "#d3cfcf"
							            },
							            {
							                "visibility": "on"
							            }
							        ]
							    }
							]
                });

               console.log(featuresSold.length);

                for (var i = 0; i < featuresActive.length; i++) {
                    addMarkerWithTimeout(i * drop_duration, featuresActive[i].title, featuresActive[i].address, featuresActive[i].latitude, featuresActive[i].longitude, featuresActive[i].icon, featuresActive[i].url);
                }

                for (var i = 0; i < featuresSold.length; i++) {
                    addMarkerWithTimeout(i * drop_duration, featuresSold[i].title, featuresSold[i].address, featuresSold[i].latitude, featuresSold[i].longitude, featuresSold[i].icon, featuresSold[i].url);
                }
            }

            function drop() {

                /** Delete Markers **/
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }
                markers = [];

                /** Drop Active Properties **/
                /*if (jQuery('input[name="Active"]:checked').length == 1) {
                    for (var i = 0; i < featuresActive.length; i++) {
                        addMarkerWithTimeout(i * drop_duration, featuresActive[i].title, featuresActive[i].address, featuresActive[i].latitude, featuresActive[i].longitude, featuresActive[i].icon, featuresActive[i].url);
                    }
                }*/

				if (jQuery('#asp-result-filter-active:checked').length == 1) {
                    for (var i = 0; i < featuresActive.length; i++) {
                        addMarkerWithTimeout(i * drop_duration, featuresActive[i].title, featuresActive[i].address, featuresActive[i].latitude, featuresActive[i].longitude, featuresActive[i].icon, featuresActive[i].url);
                    }
                }

                

                /** Set delay for Sold Properties **/
                if (jQuery('#asp-result-filter-active:checked').length == 1) {
                    sold_delay = featuresActive.length * drop_duration;
                } else {
                    sold_delay = 0;
                }

                /** Drop Sold Properties **/
                /*if (jQuery('input[name="Sold"]:checked').length == 1) {
                    for (var i = 0; i < featuresSold.length; i++) {
                        addMarkerWithTimeout(i * drop_duration, featuresSold[i].title, featuresSold[i].address, featuresSold[i].latitude, featuresSold[i].longitude, featuresSold[i].icon, featuresSold[i].url);
                    }
                }*/

                if (jQuery('#asp-result-filter-sold:checked').length == 1) {
                    for (var i = 0; i < featuresSold.length; i++) {
                        addMarkerWithTimeout(i * drop_duration, featuresSold[i].title, featuresSold[i].address, featuresSold[i].latitude, featuresSold[i].longitude, featuresSold[i].icon, featuresSold[i].url);
                    }
                }    	
                
            }

            function addMarkerWithTimeout(timeout, title, address, lat, long, icon, url) {
                window.setTimeout(function () {
                	
                	console.log(icon);
                    var marker = new google.maps.Marker({
                        map: map,
                        title: address,
                        address: address,
                        position: new google.maps.LatLng(lat, long),
                        icon: icon,
                        animation: google.maps.Animation.DROP
                    });

                    markers.push(marker);

                    var markerInfo = new google.maps.InfoWindow({
                        content: address
                    })

                    marker.addListener('mouseover', function () {
                        markerInfo.open(map, marker);
                    });
                    marker.addListener('mouseout', function () {
                        markerInfo.close(map, marker);
                    });
                    google.maps.event.addListener(marker, 'click', function () {
                        window.location.href = url;
                    });

                }, timeout);
            }

            try {
                initMap();
            } catch (err) {
            }

            jQuery('.map-trigger').click(function () {
                drop();
            });

            jQuery('.asp-result-filters input[type="checkbox"]').change(drop);
        },
        initCustomSelect: function() {
			var $select = jQuery('select.custom-select-element, .ip-prop-rs-field select');

			$select.each(function () {

			    var $this = jQuery(this),
			        $child = $this.children(),
			        $id = $this.attr('id'),
			        _html = '',
			        arr = {},
			        selected_option_text = $this.find(":selected").text();

			    $this.hide();

			    _html += '<div class="custom-select" data-select="' + $id + '">';
			    _html += '<div class="custom-selected">' + selected_option_text + '</div>';
			    _html += '<div class="custom-select-list">';
			    $child.each(function () {
			        var $children = jQuery(this),
			            _tagname = $children.get(0).tagName;

			        /** Get child of group **/
			        if (_tagname == 'OPTGROUP') {
			            _html += '<div class="custom-select-list-title"><span>' + $children.attr('label') + '</span>';
			            $children.find('option').each(function () {
			                var $childGroup = jQuery(this),
			                    _val = $childGroup.attr('value'),
			                    _url = _val.replace(/\ /g,'-');
			                    _text = $childGroup.text();



			                if (_val != '') _html += '<div class="custom-select-list-option" data-url="' + _url + '" data-value="' + _val + '">' + _text + '</div>';
			            });
			            _html += '</div>';
			        } else {
			            var _val = $children.attr('value'),
			                _url = _val.replace(/\ /g,'-');
			                _text = $children.text();
			            if (_val != '') _html += '<div class="custom-select-list-option" data-url="' + _url + '" data-value="' + _val + '">' + _text + '</div>';
			        }

			    });

			    _html += '</div>';
			    _html += '</div>';

			    jQuery(_html).insertBefore($this);
			});

			$select.parent().on('click', '.custom-selected', function () {
			    var $this = jQuery(this),
			        $parent = $this.parent(),
			        $custom_list = $parent.find('.custom-select-list');

			    if (!$custom_list.is(':visible')) {
			        closeAllList();
			        $custom_list.show();
			        $parent.css({zIndex: 100});
			    } else {
			        closeAllList();
			    }

			});

			$select.parent().on('click', '.custom-select-list-option', function () {
			    var $this = jQuery(this),
			        $parents = $this.parents('.custom-select'),
			        _selectId = $parents.data('select'),
			        _selectedVal = $this.data('value')
			        $display = $parents.find('.custom-selected'),
			        $custom_list = $parents.find('.custom-select-list'),
			        _search = false;

			    $parents.find('~ select' ).val(_selectedVal);

			    $display.text($this.text());
			    $custom_list.hide();
			    $parents.css({zIndex: 100});

			    if (_selectedVal == 'sold') {
			    	window.location = 'https://carswellandassociates.com/properties/sold-gallery/';
			    }else if(_selectedVal == 'active'){	
			    	// window.location = 'https://carswellandassociates.com/properties/listing-portfolio/?status=active';
			    	

				    if (jQuery('body').hasClass('page-id-119')) {
			    		if (jQuery('.ip-prop-refine-search-form').length) {
					    	jQuery('.ip-prop-refine-search-form .btn-a').trigger('click');
					    }
			    	}else{
			    		window.location = 'https://carswellandassociates.com/properties/listing-portfolio/?status=active';
			    	}

			    }else if(_selectedVal == 'open-house'){	
			    	window.location = 'https://carswellandassociates.com/properties/upcoming-opens/';
			    }else if(_selectedVal == 'off-market'){	
			    	window.location = 'https://carswellandassociates.com/pre-market/off-market/';
			    }else if(_selectedVal == 'in-escrow'){	
			    	// window.location = 'https://carswellandassociates.com/properties/listing-portfolio/?status=in-escrow';	

			    	if (jQuery('body').hasClass('page-id-119')) {
			    		if (jQuery('.ip-prop-refine-search-form').length) {
				    	jQuery('.ip-prop-refine-search-form .btn-a').trigger('click');
				    }
			    	}else{
			    		window.location = 'https://carswellandassociates.com/properties/listing-portfolio/?status=in-escrow';
			    	}

			    		
			    }else if(_selectedVal == 'pre-market'){
			    	window.location = 'https://carswellandassociates.com/properties/pre-market/';
			    }else if(_selectedVal == 'for-lease'){
			    	window.location = 'https://carswellandassociates.com/properties/listing-portfolio/?status=for-lease';
			    }else if(_selectedVal == 'leased'){
			    	window.location = 'https://carswellandassociates.com/properties/listing-portfolio/?status=leased';
			    }else if(_selectedVal == 'all'){
			    	// window.location = 'https://carswellandassociates.com/properties/listing-portfolio/';
			    	if (jQuery('body').hasClass('page-id-119')) {
			    		if (jQuery('.ip-prop-refine-search-form').length) {
					    	jQuery('.ip-prop-refine-search-form .btn-a').trigger('click');
					    }	
			    	}else{
			    		if ($parents.attr('data-select') == 'ip-prop-rs-status_') {
			    			jQuery('form.our-properties-form').attr('action', 'https://carswellandassociates.com/properties/listing-portfolio/');
			    			if (jQuery('.ip-prop-refine-search-form').length) {
						    	jQuery('.ip-prop-refine-search-form .btn-a').trigger('click');
						    }
			    			//window.location = 'https://carswellandassociates.com/properties/listing-portfolio/'
			    		}else{
			    			if (jQuery('.ip-prop-refine-search-form').length) {
						    	jQuery('.ip-prop-refine-search-form .btn-a').trigger('click');
						    }
			    		}
			    	}
			    	
			    }else{
			    	if (jQuery('.ip-prop-refine-search-form').length) {
				    	jQuery('.ip-prop-refine-search-form .btn-a').trigger('click');
				    }	
			    }

			    
			});

			jQuery(document).keyup(function (e) {
			    if (e.keyCode == 27) closeAllList();
			});

			jQuery(document).on('click', function (e) {
			    if (!jQuery(e.target).closest('.custom-select').length) {
			        if (jQuery('.custom-select').is(":visible")) {
			            closeAllList();
			        }
			    }
			});

			function closeAllList() {
			    jQuery('.custom-select-list').hide();
			    jQuery('.custom-select').css({zIndex: 0});
			}
        }, 
		initCSSClassy: function() {
			var width = jQuery('.page-template-template-pre-market .ip-pm-countdown .ClassyCountdown-wrapper > div').innerWidth();
			jQuery('.page-template-template-pre-market .ip-pm-countdown .ClassyCountdown-wrapper > div').innerHeight(width);

		}, 
		initChainHeight: function() {
			if (jQuery('body').hasClass('page-template-template-blog')) {

				jQuery('.ip-blog-item-row').each(function(){
					jQuery(this).find(' .ip-blog-item h2').chainHeight();
				})
				
			}

		},

		 initNeighborhoods: function () {

		 	$cntr_active = 0;
            jQuery(document).scroll(function(){
				if (jQuery('body').hasClass('single-neighborhood')) {

					if(jQuery(this).scrollTop() >= (jQuery('div[data-section="available-listings"]').position().top + 2500) && $cntr_active == 0){
					   try{
					   	jQuery('div[data-section="available-listings"] #slick-slide-control00').click();
					   }catch(err){}
					   $cntr_active = 1;
					}
				}
			});
        },

		 initSingleListingsEmailAddress: function () {

		 	jQuery('input.wpcf7-form-control.wpcf7-text.listing_subject').each(function(){
		 		jQuery(this).val(jQuery('.address-holder').text());
		 	})
        },

		 initNewSearchLinkIHF: function () {

		 	jQuery('.ihf-listing-search-results div:first-child div:first-child > a').attr('href', document.referrer);
        },

        initAgentsContact: function () {

		 	var email = jQuery('.ip-ad-contact.ip-ad-contact-email a').attr('href');
			email = email.replace('mailto:', '');
			jQuery('input#agent-email').val(email);
			jQuery('input#secretEmail').val(email);
			//jQuery('input#agent-email').val();

        },

        initHPFPinitalizeHeight: function () {


			var second_default_height = jQuery('.fp-list').find('.second_child_height').innerHeight();

			var first_default_height = jQuery('.fp-list').find('.first_child_height').innerHeight();

			var margin_top = second_default_height - first_default_height;

			jQuery('.fp-list').find('.fp:nth-child(1)').each(function(){
				jQuery(this).css('margin-top',margin_top+'px');	
			})

        },

        initMobileDBLTap: function () {
        	if (jQuery(window).width() <= 1199) {
        		jQuery('.dbl-tap-mob').each(function(){
        			var cnt = 0;
        			jQuery(this).click(function(e){

	        			if (cnt == 0) {
	        				e.preventDefault();
	        				cnt++;
	        			}

        			})
        			
        		});
        	}
        },



		
	}
	
	jQuery(document).ready( function() {

		jQuery('.page-numbers').wrap( "<li></li>" );
		//app.initNewSearchLinkIHF();
		app.initHeaderFunction();
		app.initFeaturedProperties();
		app.initMeetTheTeam();
		app.initActiveSoldProperties();
		app.initInTheMedia();
		app.initElementPeek();
		app.initBlog();
		app.initTestimonials();
		app.initNeighborhoods();
		app.initReadMoreLess();
		if (jQuery('body').hasClass('single-aios-listings')) {
			app.initSingleListingsEmailAddress();	
		}
		if (jQuery('body').hasClass('home')) {
			app.initHPBlogScrollToFirstSlide();	
		}
		
		// if (!(jQuery('body').hasClass('single-aios-listings'))) {
		// 	app.initAboutListings();
		// }
		app.initAboutListings();
		app.initAgetDetails();
		app.initInnerPageProperties();
		app.initFeaturedListingDetailsPhotos();
		app.initFeaturedListingDetailsThumbs();
		app.initCommDetailsThumbs();
		app.initChangeEmail();
		setTimeout(function(){
			app.initPreMarket();
			setTimeout(function(){
				app.initCSSClassy();
			},100);
		}, 3000);
		app.initBreadcrumbs();
		app.mapAreaAjax();
		app.initCustomSelect();
		app.initIframeResponsive();



		// app.initCSSClassy();


        // jQuery('.ip-ad-s2-text-inner').find('p').first().addClass('ip-ad-s2-text-inner');
        // $text = jQuery('.ip-ad-s2-text-inner').find('p').first().text();
        // $html = '<strong>'+$text+'</strong>';
        // jQuery('.ip-ad-s2-text-inner').html($html);

        
		/*jQuery('#ip-prop-rs-type,#ip-prop-rs-community').change(function(){
					jQuery('.our-properties-form').submit()
		});

		jQuery('#ip-prop-rs-status').change(function(){
				console.log(jQuery(this).val());
		});*/

		

		app.initChainHeight();

		app.initMobileDBLTap();

		if (jQuery('body').hasClass('home')) {
				app.initHPFPinitalizeHeight();
			}
	});


	 jQuery(window).one('scroll', function () {

            app.mapAreaAjax();
        });

	
	jQuery(window).on('load', function(){

			app.initPopup();
			//app.initCSSClassy();

			if (jQuery('body').hasClass('single-aios-agents')) {
				app.initAgentsContact();
			}

			

			
	})

	jQuery(window).resize(function() {
			app.initReadMoreLess();
			if (jQuery('body').hasClass('page-template-template-pre-market')) {
				console.log(jQuery('.page-template-template-pre-market .ip-pm-countdown .ClassyCountdown-wrapper > div').innerWidth());
				setTimeout(function(){
					app.initCSSClassy();
				},10);
			}

			app.initChainHeight();
			if (jQuery('body').hasClass('home')) {
				setTimeout(function(){
					app.initHPFPinitalizeHeight();	
				},500)
				
			}


			app.initMobileDBLTap();
			
		});



})();

function GetURLParameter(sParam){
			        var sPageURL = window.location.search.substring(1);
			        var sURLVariables = sPageURL.split('&');
			        for (var i = 0; i < sURLVariables.length; i++)
			        {
			            var sParameterName = sURLVariables[i].split('=');
			            if (sParameterName[0] == sParam)
			            {
			                return sParameterName[1];
			            }
			        }
			    }

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}		


