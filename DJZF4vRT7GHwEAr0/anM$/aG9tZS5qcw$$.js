$(document).ready(function(){
	
	$(".homeBanner").on({
		"init":function(event, slick){
			homeAnimation.slideAddClass(slick.currentSlide);
		},
		'beforeChange':function(event, slick, currentSlide, nextSlide){
			homeAnimation.slideAddClass(nextSlide);
		},
		'afterChange':function(event, slick, currentSlide){
			homeAnimation.slideAddClass(currentSlide);
		}
	}).slick({
		autoplay:true,
		fade:true,
		pauseOnHover:false,
		pauseOnFocus:false,
		pauseOnDotsHover: false,
		arrows:false,
		dots:true, 
		infinite: true,
		autoplaySpeed: 14000
	});
	
	$(".mobile-banner").on({
		"init":function(event, slick){
			mobileAnimation.slideAddClass(slick.currentSlide);
		},
		'beforeChange':function(event, slick, currentSlide, nextSlide){
			mobileAnimation.slideAddClass(nextSlide);
		},
		'afterChange':function(event, slick, currentSlide){
			mobileAnimation.slideAddClass(currentSlide);
		}
	}).slick({
		autoplay:true,
		fade:true,
		pauseOnHover:false,
		pauseOnFocus:false,
		pauseOnDotsHover: false,
		arrows:false,
		dots:true, 
		infinite: true,
		autoplaySpeed: 10000
	});

	
	
	$('.squareGroup').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  dots:true, 
	  arrows:false, 
	  responsive: [
		{
		  breakpoint: 1025,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	
	  ]
	});
	
	$('.findataGroup').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  dots:true, 
	  arrows:false, 
	  responsive: [
		{
		  breakpoint: 1025,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	
	  ]
	});
	
	$('.recGroup').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  dots:true, 
	  arrows:false, 
	  responsive: [
		{
		  breakpoint: 1025,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	
	  ]
	});
	

$('.homeVideoPop').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#homevideo2 > video")[0].play();
		}
	  }
});

	
	
});
var homeAnimation = {
	slideAddClass:function(slideIndex){
		
		if(slideIndex==0) //Banner Real Index
			$(".homebanner01 .bg, .homebanner01 .slogan, .homebanner01 .bubble").addClass('animate');
		else
			$(".homebanner01 .bg, .homebanner01 .slogan, .homebanner01 .bubble").removeClass('animate');
		
		
		if(slideIndex==1) //Banner Real Index
			$(".homebanner02 .bg").addClass('animate');
		else
			$(".homebanner02 .bg").removeClass('animate');

	}
};

var mobileAnimation = {
	slideAddClass:function(slideIndex){
		
		if(slideIndex==0) //Banner Real Index
			$(".mobilebanner01 .bubble").addClass('animate');
		else
			$(".mobilebanner01 .bubble").removeClass('animate');
		
	}
};

$(".news-close").click(function(){
	$(".bubble").removeClass("animate");
});