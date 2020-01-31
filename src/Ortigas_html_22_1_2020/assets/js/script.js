$ = jQuery.noConflict();


jQuery(function ($) {

    /* ===================================
            Scroll
    ====================================== */

    //scroll sections
    if($("body").hasClass("intrective")){
    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top}, 1200);
    });

    }else {

        $(".scroll").on("click", function (event) {
            event.preventDefault();
            $("html,body").animate({
                scrollTop: $(this.hash).offset().top - 78}, 1200);
        });

    }

});






$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header_sec").addClass("fixed");
    } else {
        $(".header_sec").removeClass("fixed");
    }
});




$(function() {
	  $('a.scroll2[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});











