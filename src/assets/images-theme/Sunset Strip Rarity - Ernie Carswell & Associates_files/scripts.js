
( function($) {
	$( document ).ready( function() {

		function __construct() {
			featuredProperties();
            listingCtaItems();
            autoloadListingsImages();
            chainHeight();
		}

		function featuredProperties() {
            var $listingsItems = $('.featured-listings-items'),
                $listingsItem = $('.featured-listings-item');

			if( $listingsItem.size() > 2 ){
                /** Do nothing as per someone added this */
			} else {
				$listingsItems.addClass('one-only');
			}
			
			$listingsItems.slick({
				infinite: true,
				speed: 1000,
				fade: false,
				dots: false,
				arrows: true,
				prevArrow: '<span class="featured-listings-arrow slick-prev ai-font-arrow-b-p"></span>',
				nextArrow: '<span class="featured-listings-arrow slick-next ai-font-arrow-b-n"></span>',
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 7000,
				responsive: [
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}

		function chainHeight(){
			jQuery('.ip-oh-specs-wrapper, .ip-oh-specs').chainHeight();
		}

		function listingCtaItems() {
			var $filter 	= $( '.listing-cta-item a' ),
				$filterItem = $( '.listing-cta-item' ),
				classActive = 'listing-cta-item-active';

			$filter.on( 'click', function(e) {
				var $this 		= $( this ),
					$parent 	= $this.parent(),
					$content 	= $parent.find( '.listing-cta-content' ); 
				
				if( !$parent.hasClass( classActive ) ) {
					$filterItem.removeClass( classActive );
					if( $content.length > 0 ) {
						e.preventDefault();
						$parent.addClass( classActive );
						return false;
					}
				}  else {
					$parent.removeClass( classActive );
				}
			} );

			$( document ).on( 'click', function(e) {
				if( !$(e.target).closest('.listing-cta-item').length ) {
					if($('.listing-cta-content').is(":visible")) {
						$filterItem.removeClass( classActive );
					}
				}
			} );
        }
        
        function autoloadListingsImages() {
            var $data_src 	= $( '[data-image]' ),
                imgArr 		= [],
                _count 		= 0;

            $data_src.each( function() {
                var $this 	= $(this),
                    _img 	= $this.attr('data-image');

                if ( _img != '' ) {
                    $this.attr( 'data-image-index', _count );
                    imgArr[_count] = _img;
                    _count++;
                }
            } );

            $( window ).on( 'load', function() {
                function sequential_requests( imageArray, index ) {
                    index = index || 0;

                    if (imageArray && imageArray.length > index) {
                        image_temp 			= new Image();
                        image_temp.src 		= imageArray[index];
                        image_temp.onload 	= function() {
                            sequential_requests(imageArray, index + 1);

                            $elem = $( '[data-image-index=' + index + ']' )
                            if ( $elem.prop("nodeName") == 'IMG' ) {
                                $elem.attr( 'src', imageArray[index] );
                            } else if ( $elem.prop("nodeName") == 'CANVAS' || $elem.prop("nodeName") == 'DIV' ) {
                                $elem.css({'background-image': 'url(' + imageArray[index] + ')'});
                            }
                        }
                    }
                };

                sequential_requests( imgArr );
            } );

            jQuery(window).resize(function(event) {
            	chainHeight();
            });

        }

		/** Instantiate **/
		__construct();

	} );
} )( jQuery );