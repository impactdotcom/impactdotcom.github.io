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
/*
var owl;
$(document).ready(function () {
	owl = $("#owl-work").owlCarousel({
		autoPlay: 5000,
		slideSpeed: 200,
		paginationSpeed: 600,
		rewindSpeed: 800,
		stopOnHover: true,
		navigation: true,
		pagination: true,
		rewindNav: true,
		singleItem: true,
		autoHeight: true,
		navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"],
		afterInit : function(elem){
      var that = this;
      that.owlControls.prependTo(elem);
      // adding A to div.owl-page
      $('.owl-controls .owl-page').append('<a class="item-link" href="#"/>');

      var pafinatorsLink = $('.owl-controls .item-link');

      $.each(this.owl.userItems, function (i) {
          $(pafinatorsLink[i])
              // i - counter
              // Give some styles and set background image for pagination item
              .text(getPaginationText(i))
              // set Custom Event for pagination item
              .click(function (e) {
                  e.preventDefault();
                  owl.trigger('owl.goTo', i);
              });

      });
    }
	});

	function getPaginationText(i) {
		switch(i) {
	    case 0:
	        return "Requisitos";
	    case 1:
	        return "Selección";
	    case 2:
	        return "Financiación";
	    case 3:
	        return "Aceleración";
	    case 4:
	        return "Formación";
	    case 5:
	        return "Mentorización";
	    case 6:
	        return "Inversores";
		}
	}

	$(".slider-next").click(function () {
		owl.trigger('owl.next');
	});

	$(".slider-prev").click(function () {
		owl.trigger('owl.prev');
	});

});
*/
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
/* CONVERTING iOS SAFARI VIEWPORT UNITS (BUGGY) INTO PIXELS
/*===================================================================================*/

$(document).ready(function () {
	window.viewportUnitsBuggyfill.init(true);
});

//sistema de smooth scroll para anclas
$(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 97}, 500);
});
