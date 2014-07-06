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
/*	OWL CAROUSEL
/*===================================================================================*/

$(document).ready(function () {
	$("#owl-work").owlCarousel({
		autoPlay: 5000,
		slideSpeed: 200,
		paginationSpeed: 600,
		rewindSpeed: 800,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		paginationNumbers: true,
		rewindNav: true,
		singleItem: true,
		autoHeight: true,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"],
		afterInit : function(elem){
      var that = this
      that.owlControls.prependTo(elem)
    }
	});

	$(".slider-next").click(function () {
		owl.trigger('owl.next');
	});

	$(".slider-prev").click(function () {
		owl.trigger('owl.prev');
	});

});

/*===================================================================================*/
/*	TABS
/*===================================================================================*/

$(document).ready(function () {

	/*$('.tabs.tabs-services').easytabs({
		cycle: 5000
	});*/

	$('.tabs.tabs-top, .tabs.tabs-circle-top, .tabs.tabs-2-big-top, .tabs.tabs-side').easytabs({
		animationSpeed: 200,
		updateHash: false
	});

});

/*===================================================================================*/
/*	IMAGE HOVER
/*===================================================================================*/

$(document).ready(function () {
	$('.icon-overlay a').prepend('<span class="icn-more"></span>');
});


/*===================================================================================*/
/*	FORM
/*===================================================================================*/

jQuery(document).ready(function ($) {
	$('.forms').dcSlickForms();
});

$(document).ready(function () {

	$('.comment-form input[title], .comment-form textarea').each(function () {

		if ($(this).val() === '') {
			$(this).val($(this).attr('title'));
		}

		$(this).focus(function () {
			if ($(this).val() == $(this).attr('title')) {
				$(this).val('').addClass('focused');
			}
		});

		$(this).blur(function () {
			if ($(this).val() === '') {
				$(this).val($(this).attr('title')).removeClass('focused');
			}
		});

	});

});


/*===================================================================================*/
/*	DATA REL
/*===================================================================================*/

$(document).ready(function () {
	$('a[data-rel]').each(function () {
		$(this).attr('rel', $(this).data('rel'));
	});
});


/*===================================================================================*/
/*	TOOLTIP
/*===================================================================================*/

$(document).ready(function () {
	if ($("[rel=tooltip]").length) {
		$("[rel=tooltip]").tooltip();
	}
});


/*===================================================================================*/
/*	CONVERTING iOS SAFARI VIEWPORT UNITS (BUGGY) INTO PIXELS
/*===================================================================================*/

$(document).ready(function () {
	window.viewportUnitsBuggyfill.init(true);
});
