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

  
  $('a').on('click', function(e) {
    setAcceptanceCookie();
  });
});


/***** FILTRADO MENTORES ****/
var dropdownFilter = {
  $filters: null,
  groups: [],
  outputArray: [],
  outputString: '',
  
  init: function(){
    var self = this; 
    
    self.$filters = $('#Filters');
    self.$container = $('#container_mentores');
    
    self.$filters.find('fieldset').each(function(){
      self.groups.push({
        $dropdown: $(this).find('select'),
        active: ''
      });
    });
    
    self.bindHandlers();
  },
  
  bindHandlers: function(){
    var self = this;
    
    self.$filters.on('change', 'select', function(e){
      e.preventDefault();
      
      self.parseFilters();
    });
  },
  
  // The parseFilters method pulls the value of each active select option
  parseFilters: function(){
    var self = this;
 
    // loop through each filter group and grap the value from each one.
    for(var i = 0, group; group = self.groups[i]; i++){
      group.active = group.$dropdown.val();
    }
    
    self.concatenate();
  },
  
  // The "concatenate" method will crawl through each group, concatenating filters as desired:
  concatenate: function(){
    var self = this;
    
    self.outputString = '';
    
    for(var i = 0, group; group = self.groups[i]; i++){
      self.outputString += group.active;
    }
    !self.outputString.length && (self.outputString = 'all'); 
    
    //console.log(self.outputString); 
    
    if(self.$container.mixItUp('isLoaded')){
      self.$container.mixItUp('filter', self.outputString);
    }
  }
};
  
$(function(){
  dropdownFilter.init();
  $('#container_mentores').mixItUp({
    controls: {
      enable: false 
    },
    animation: {
      duration: 400,
      effects: 'fade',
      easing: 'ease'
    }
    //callbacks: {
    //  onMixFail: function(){
      //  alert('No items were found matching the selected filters.');
    //  }
    //}
  });    
});
