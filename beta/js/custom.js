jQuery(document).ready(function($){
	 	(function(){
        $(window).on("load",function(){
            $(".course-introduction-inner .left-part").mCustomScrollbar();
        });
	})(jQuery);
	$( function() {
	    $( "#accordion" ).accordion({collapsible : true, active : 'none'});
	});

	$('.details-view').click(function() {
	    if(jQuery(this).hasClass("menu-close"))
	    {
   			jQuery(this).html("Hide Details");
   		}
	    else
	    {
	   	 jQuery(this).html("Show Details");
	    }
		$(this).toggleClass("menu-close");
		   $('.fundamentals-dis-sec').slideToggle();  
	   });
	    $(".mobile-menu-main > ul > li.menu-item-has-children > a").after('<span class="submenu-close"></span>');
	    $('span.submenu-close').click(function() {
	    $(this).next().slideToggle();
		});
		$('.mobile-menu-icon').click(function() {
	   		$('.mobile-menu-main').slideToggle();
		});
		
	
		$('ul.location-list > li > a').click(function() {
			$(this).toggleClass("active");
	   		$(this).next('.location-dropdown').slideToggle();
		});
		if($(".nav-item a").hasClass("active")) {		
	    	$('.nav-link-item.active').parent().addClass("main-active");
			}
			$('.nav > li > a').click(function() {
			$('.nav-item').removeClass("main-active");
			if($(".nav-item a").hasClass("active")) {
		    $('.nav-link-item.active').parent().addClass("main-active");		
		} 
		});


		$('.explore_data_slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    dots:false,
		    responsive:{
		        0:{
		            items:1
		        },		       
		        1000:{
		            items:1
		        }
		    }
		});

		$('.teams_slider').owlCarousel({
		    loop:true,
		    margin:23,
		    nav:true,
		    dots:false,
		    responsive:{
		        0:{
		            items:1

		        },
		        500:{
		            items:2
		        },

		        991:{
		            items:3
		        },	       
		        1400:{
		            items:4
		        }
		    }
		});



	});