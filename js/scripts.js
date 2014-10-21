/*===================================================================================*/
/*	DROPDOWN ON HOVER (NAVIGATION)
/*===================================================================================*/

$(document).ready(function () {
	$('.js-activated').dropdownHover({
		instantlyCloseOthers: false,
		delay: 0
	}).dropdown();

});

/*===================================================================================*/
/*	TABS
/*===================================================================================*/

$(document).ready(function () {
	$('.tabs.tabs-top, .tabs.tabs-circle-top, .tabs.tabs-2-big-top, .tabs.tabs-side').easytabs({
		animationSpeed: 200,
		updateHash: false
	});

});


/*===================================================================================*/
/* CONVERTING iOS SAFARI VIEWPORT UNITS (BUGGY) INTO PIXELS
/*===================================================================================*/

$(document).ready(function () {
	window.viewportUnitsBuggyfill.init(true);
});

//sistema de smooth scroll para anclas
$(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 98}, 500);
});

/**
 * Sistema para trackear eventos personalizados en analytics
 * @return {[type]} [description]
 */
$('.gatrack').on('click', function() {
   //  console.log("send event: " +
   //    $(this).data('gacat') + " " +
   //    $(this).data('gaacc') + " " +
   //    $(this).data('gaeti'));
  ga('send', 'event', $(this).data('gacat'), $(this).data('gaacc'), $(this).data('gaeti'));
});


/*===================================================================================*/
/* COOKIES
/*===================================================================================*/
$(function() {
	var SCROLL_FOR_ACCEPTANCE = 300;

	function hasAgreedCookies() {
		return ($.cookie('cookie-agreed'));
	}

	function watchForImplicitAcceptance() {
    var alreadyAccepted = false;
    window.onscroll = function(e) {
      var y = verticalScroll();
      if (y > SCROLL_FOR_ACCEPTANCE && !alreadyAccepted) {
        alreadyAccepted = true;
        implicitAcceptance();
      }
    };
  }

  function verticalScroll() {
    return  (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

  function implicitAcceptance(){ //have this run when/if they opt-in.
    setAcceptanceCookie();
    stopWatchingForAcceptance();
  }

  function setAcceptanceCookie(){
    $('.js-alert--cookies').alert('close');
		$.cookie('cookie-agreed', '1', { expires: 365 * 5, path: '/' });
  }

  function stopWatchingForAcceptance() {
    window.onscroll = null;
  }

	if (!hasAgreedCookies()) {
		$('.js-alert--cookies').addClass('in');
		watchForImplicitAcceptance();
	}
});

$('a').on('click', function(e) {
	setAcceptanceCookie();
});

