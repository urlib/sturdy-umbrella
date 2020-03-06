function changeLanguage(newLanguage) {
	url=window.location.href;
	if(url.indexOf("/en/")!=-1 || url.indexOf("/tc/")!=-1 || url.indexOf("/sc/")!=-1){
	
	var regex = /\/(en|tc|sc)\//;
	
	var p =url.replace(regex,"/"+newLanguage+"/");
	
	window.location.href = p;s
	}
}
var addthis_config = {
      ui_disable: true 
} 

initBackToTop();
$(window).scroll(function(){
	initBackToTop();
});

function openNav(){
		$('.topnavWrapper').toggleClass("mobileOn");
}

$(".topnav > li a").click(function(){
	 if($(this).siblings(".subnav").hasClass("act")){
		  $(this).siblings(".subnav").removeClass("act");
	 }else{
		  $(".topnav > li .subnav").removeClass("act");
		  $(this).siblings(".subnav").addClass("act");
	 }
});

$('.qRow .q').click(function(){
		$(this).parent().toggleClass("act");
	});
	
$('.qAll').click(function(){
	$(this).toggleClass("act");
			if($(this).hasClass("act")){
				$('.qRow').addClass("act");
				}
			else{
				$('.qRow').removeClass("act");
				}
	});
function initBackToTop(){
	var windowHeight = $(window).height();
	if($(document).scrollTop() > windowHeight){
		$('.backToTop').addClass("act");
	}else{
		$('.backToTop').removeClass("act");
	}
}


/*****************************************************************************/

var isIE=(window.navigator.userAgent.indexOf("MSIE")!=-1) || (window.navigator.userAgent.indexOf("Trident/")!=-1);
var isIE6=(window.navigator.userAgent.indexOf("MSIE 6.0")!=-1);
var isIE7=(window.navigator.userAgent.indexOf("MSIE 7.0")!=-1);
var isIE8=(window.navigator.userAgent.indexOf("MSIE 8.0")!=-1);
var isIE9=(window.navigator.userAgent.indexOf("MSIE 9.0")!=-1);
var isIE10=(window.navigator.userAgent.indexOf("MSIE 10.0")!=-1);
var isIE11=isIE && (window.navigator.userAgent.indexOf("rv:11.0")!=-1);
var isFirefox=(window.navigator.userAgent.indexOf("Firefox")!=-1);
var isChrome=(window.navigator.userAgent.indexOf("Chrome")!=-1);
var isSafari=(window.navigator.userAgent.indexOf("Safari")!=-1);

var isWindows=(window.navigator.userAgent.indexOf("Windows")!=-1);
var isMacintosh=(window.navigator.userAgent.indexOf("Macintosh")!=-1);

var isMobile=(window.navigator.userAgent.indexOf("Android")!=-1 || window.navigator.userAgent.indexOf("iPhone")!=-1 || window.navigator.userAgent.indexOf("iPad")!=-1  || window.navigator.userAgent.indexOf("iPod")!=-1 || window.navigator.userAgent.indexOf("BlackBerry")!=-1);
var isIPhone=(window.navigator.userAgent.indexOf("iPhone")!=-1);
var isIPad=(window.navigator.userAgent.indexOf("iPad")!=-1 );
var isIPod=(window.navigator.userAgent.indexOf("iPod")!=-1 );
var isAndroid=(window.navigator.userAgent.indexOf("Android")!=-1);
var isBlackBerry=(window.navigator.userAgent.indexOf("BlackBerry")!=-1);

/*****************************************************************************/

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/*****************************************************************************/

var globalAction = {
	init:function(){
		globalAction.bookmarkInit();
		$(".print").bind({
			"click":function(){
				//toggleMenuPanel("close");
				//toggleMobileMenuPanel("close")
				$.magnificPopup.close(); 
				window.print();
				
			}
		});
		globalAction.changeLang();
	},
	changeLang:function(){
		var currentLink = window.location.href;

		var currentLang = "";
		if(currentLink.indexOf("/en/") != -1)
			currentLang = "en";
		else if (currentLink.indexOf("/tc/") != -1)
			currentLang = "tc";
		else if (currentLink.indexOf("/sc/") != -1)
			currentLang = "sc";
		
		$(".langBtn_en").attr("href", currentLink.replace("/"+currentLang+"/","/en/"));
		$(".langBtn_tc").attr("href", currentLink.replace("/"+currentLang+"/","/tc/"));
		$(".langBtn_sc").attr("href", currentLink.replace("/"+currentLang+"/","/sc/"));
	},
	bookmarkInit:function(){
		var curLoc = parent.location.href;
		var docTitle = $("title").text();
		if($(".bookmark").length!=0)
		{
			if(window.opera||isFirefox)
				$(".bookmark").attr("href",curLoc).attr("title",docTitle).attr("rel","sidebar");
			else
				$(".bookmark").bind("click",function(){globalAction.bookmark(curLoc,docTitle);});
		}
		
	},
	bookmark:function(curLoc,docTitle){
		if (isFirefox) { // For Mozilla Firefox Bookmark
			try {
				window.sidebar.addPanel(docTitle, curLoc,"");
				return false;
			} catch(e){}
		} else if(isIE) { // For IE Favorite
			window.external.AddFavorite( curLoc, docTitle);
			return false;
		} else { // for other browsers which does not support
			 alert("Press 'Command + D' / 'Ctrl + D' to Add Bookmark");
			 return false;
		}
	}
};

var headerAction = {
	init:function(){
		headerAction.scrollAddClass();
	},
	scrollAddClass:function(){
		$(window).scroll($.debounce( 250, function(){
			console.log($(document).scrollTop());
			if($(document).scrollTop()>1)
				$(".headerWrapper").addClass("nonTop");
			else
				$(".headerWrapper").removeClass("nonTop");
		}));
	}
};
	
$(function(){

		$("#emailpage, .emailLink").fancybox({
			'width'				: '300',
			'height'			: '3',
			'autoScale'			: false,
			'transitionIn'		: 'elastic',
			'transitionOut'		: 'elastic',
			'type'				: 'iframe',
			'overlayOpacity'    : 0.5,
			'scrolling'         : false
		});
		$("#rss_btn, .rssLink").fancybox({
			'width'				: '500',
			'height'			: '6',
			'autoScale'			: false,
			'transitionIn'		: 'elastic',
			'transitionOut'		: 'elastic',
			'type'				: 'iframe',
			'overlayOpacity'    : 0.5,
			'scrolling'         : false
		});
})
	
$(document).ready(function(){
	$('.milesNav').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  prevArrow: ".yearPrev",
	  nextArrow: ".yearNext",
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
			slidesToShow: 3,
			slidesToScroll: 3
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
	
	$('.yearNav').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 5,
	  prevArrow: ".yearPrev",
	  nextArrow: ".yearNext",
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
			slidesToShow: 3,
			slidesToScroll: 3
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
	
	$('.iconNav').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 5,
	  prevArrow: ".yearPrev",
	  nextArrow: ".yearNext",
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
			slidesToShow: 3,
			slidesToScroll: 3
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
	
	
	
	$('.sdNav').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  prevArrow: ".yearPrev",
	  nextArrow: ".yearNext",
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
			slidesToShow: 3,
			slidesToScroll: 3
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
	
	globalAction.init();
	
	headerAction.init();
	
	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: false, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	  preloader: false,
	});
	
	$('.maintools-popup').magnificPopup({
	  type:'inline',
	  midClick: false, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	  preloader: false,
	  mainClass: "maintools",
	　closeBtnInside: false
	});
	$('.result-popup').magnificPopup({
	  type:'inline',
	  midClick: false, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	  preloader: false,
	  mainClass: "maintools",
	　closeBtnInside: true
	});


$('.videoPop1').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#video1 > video")[0].play();
		}
	  }
});

$('.videoPop2').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#video2 > video")[0].play();
		}
	  }
});

$('.videoPop3').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#video3 > video")[0].play();
		}
	  }
});

$('.videoPop4').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#video4 > video")[0].play();
		}
	  }
});

$('.videoPop5').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#video5 > video")[0].play();
		}
	  }
});

$('.videoPop6').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#video6 > video")[0].play();
		}
	  }
});

$('.videoPop7').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#video7 > video")[0].play();
		}
	  }
});

$('.videoPop8').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#video8 > video")[0].play();
		}
	  }
});

$('.videoPop9').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#video9 > video")[0].play();
		}
	  }
});
	
$('.videoPop10').magnificPopup({
  type:'inline',
  midClick: true,
  preloader: true,
	  callbacks: {
		open: function() {
			$("#video9 > video")[0].play();
		}
	  }
});

});



