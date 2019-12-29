(function ($) {
    "use strict";

/*----- left category menu-----*/
	$('.cat-toggle-heading').on( "click", function(){
		$('.left-category-menu').slideToggle(600);
	});
	$('.more-cat').on( "click", function(){
		$('.extra_menu').slideToggle(500);
		if ($(".more-cat .more-view").hasClass('open')) {
			$(".more-cat .more-view").removeClass('open');
			$(".more-cat .more-view").text('More Categories');
		} else {
			$(".more-cat .more-view").addClass('open');
			$(".more-cat .more-view").text('Close Menu');
		}
	});
	
/*-----fliker image-----*/
	$(".fliker_img").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	800, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});	
				
/*----- price range ui slider js -----*/	
	$( "#price-range" ).slider({
		range: true,
		min: 1,
		max: 100,
		values: [ 10, 90 ],
		slide: function( event, ui ) {
			jQuery( "#slidevalue" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	jQuery( "#slidevalue" ).val( "$" + $( "#price-range" ).slider( "values", 0 ) +
		"      $" + $( "#price-range" ).slider( "values", 1 ) );	
		
/*----- scroll to top -----*/		
	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('.greentech-scrollertop').fadeIn(700);
		} else {
			$('.greentech-scrollertop').fadeOut(700);
		}
	});
	//Click event to scroll to top
	$('.greentech-scrollertop').on( "click", function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});	

/*----- main slider -----*/
	$('#mainSlider').nivoSlider({
		directionNav: true,
		animSpeed: 500,
		slices: 18,
		pauseTime: 5000,
		pauseOnHover: false,
		controlNav: false,
		prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
		nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
	});	
		
/*----- home1 sidebar featured pruduct -----*/	
	$(".featured-product").owlCarousel({
		slideSpeed : 1000,
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [991,2],
		itemsTablet: [767,1],
		itemsMobile : [480,1],
		autoPlay: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-caret-left owl-prev-icon"></i>','<i class="fa fa-caret-right owl-next-icon"></i>']
	});	
	
/*----- home1 new pruduct -----*/	
	$(".new-product").owlCarousel({
		slideSpeed : 1000,
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,2],
		itemsTablet: [767,1],
		itemsMobile : [480,1],
		autoPlay: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-caret-left owl-prev-icon"></i>','<i class="fa fa-caret-right owl-next-icon"></i>']
	});	
	
/*----- home1 end of day pruduct -----*/	
	$(".deal-of-day-product").owlCarousel({
		slideSpeed : 1000,
		items : 2,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [991,1],
		itemsTablet: [767,1],
		itemsMobile : [480,1],
		autoPlay: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-caret-left owl-prev-icon"></i>','<i class="fa fa-caret-right owl-next-icon"></i>']
	});	
	
/*----- home1 end of day pruduct -----*/	
	$(".deal-of-day-product-h3").owlCarousel({
		slideSpeed : 1000,
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [991,1],
		itemsTablet: [767,1],
		itemsMobile : [480,1],
		autoPlay: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-caret-left owl-prev-icon"></i>','<i class="fa fa-caret-right owl-next-icon"></i>']
	});	
	
/*----- home1 end of day pruduct -----*/	
	$(".product-carousel-1, .product-carousel-2, .product-carousel-3, .product-carousel-4, .product-carousel-5, .product-carousel-6, .product-carousel-7").owlCarousel({
		slideSpeed : 1000,
		items : 5,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,2],
		itemsTablet: [767,1],
		itemsMobile : [480,1],
		autoPlay: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-caret-left owl-prev-icon"></i>','<i class="fa fa-caret-right owl-next-icon"></i>']
	});	
	
/*----- home1 end of day pruduct -----*/	
	$(".product-carousel-1-h3, .product-carousel-2-h3, .product-carousel-3-h3").owlCarousel({
		slideSpeed : 1000,
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,2],
		itemsTablet: [767,1],
		itemsMobile : [480,1],
		autoPlay: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-caret-left owl-prev-icon"></i>','<i class="fa fa-caret-right owl-next-icon"></i>']
	});		
	
/*----- home1 latest post -----*/	
	$(".latest-post-area").owlCarousel({
		slideSpeed : 1000,
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [991,1],
		itemsTablet: [767,1],
		itemsMobile : [480,1],
		autoPlay: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-caret-left owl-prev-icon"></i>','<i class="fa fa-caret-right owl-next-icon"></i>']
	});	
	
/*----- home1 latest post -----*/	
	$(".client-carousel").owlCarousel({
		slideSpeed : 1000,
		items : 6,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [479,1],
		autoPlay: false,
		navigation: false,
		pagination: false,
		navigationText:['<i class="fa fa-caret-left owl-prev-icon"></i>','<i class="fa fa-caret-right owl-next-icon"></i>']
	});		
	
/*----- sidebar best seller carousel -----*/	
	$(".thubm-caro").owlCarousel({
		slideSpeed : 1000,
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,3],
		itemsMobile : [480,3],
		autoPlay: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});	
	
/*----- about pager testimonial -----*/	
	$(".what-client-say").owlCarousel({
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [991,1],
		itemsTablet: [767,1],
		itemsMobile : [480,1],
		autoPlay: false,
		navigation: false,
		pagination: true,
		singleItem : true,
		transitionStyle : "backSlide"
	});		

/*----- elevateZoom -----*/	
	$("#optima_zoom").elevateZoom({gallery:'optima_gallery', cursor: 'pointer', galleryActiveClass: "active", imageCrossfade: true, loadingIcon: ""}); 

		$("#optima_zoom").bind("click", function(e) {  
		  var ez =   $('#optima_zoom').data('elevateZoom');
		  ez.closeAll(); //NEW: This function force hides the lens, tint and window	
			$.fancybox(ez.getGalleryList());
		  return false;
		});
	
/*----- cart-plus-minus-button -----*/
	 $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	  $(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
		  }
		  }
		$button.parent().find("input").val(newVal);
	  });

/*----- countdown -----*/
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
      });
    });

/*-----mobile menu -----*/	
	$('.mobile-menu').meanmenu();	  

})(jQuery);	

