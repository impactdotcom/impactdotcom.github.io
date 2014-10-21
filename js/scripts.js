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
$(function(e) {
	function hasAgreedCookies() {
		return ($.cookie('cookie-agreed'));
	}

	if (!hasAgreedCookies()) {
		$('.js-alert--cookies').addClass('in');
	}
});

$('a').on('click', function(e) {
	$('.js-alert--cookies').alert('close');
	$.cookie('cookie-agreed', '1', { expires: 365 * 5, path: '/' });
});

