// Navigation
// ==========

// Drop-in Navbar
$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $('#d-nav').addClass('drop-in');
  } else {
    $('#d-nav').removeClass('drop-in');
  }
});

// TODO: There's two navs, so this get's wonky
// Mobile Navigation
$('.mobile-toggle').click(function() {
  if ($('.nav-container').hasClass('open-nav')) {
    $('.nav-container').removeClass('open-nav');
    $('nav').removeClass('open-nav');
  } else {
    $('.nav-container').addClass('open-nav');
    $('nav').addClass('open-nav');
  }
});

$('.nav-container li a').click(function() {
  if ($('.nav-container').hasClass('open-nav')) {
    $('.navigation').removeClass('open-nav');
    $('.nav-container').removeClass('open-nav');
  }
});

// Navigation Scroll
$('nav a').click(function(event) {
	var id = $(this).attr("href");
	var offset = 70;
	var target = $(id).offset().top - offset;
	$('html, body').animate({
		scrollTop: target
	}, 500);
	event.preventDefault();
});

// Parallax Banner
var bannerBackground = $(".banner-background");
$(window).scroll(function() {
  // Scroll
  bannerBackground.css('margin-top', ($(window).scrollTop())/3);
  // Fade
  bannerBackground.css('opacity', 1 - ($(window).scrollTop())/bannerBackground.height());
});

// Service Descriptions
$('div.s-li-desc').hide();
$('#s1-desc').show();
// $('li.s-li').bind('mouseover', function() {
//   $('div.s-li-desc').stop().fadeOut(500, function(){
//     $('#'+$(this).attr('id')+'-desc').stop().fadeIn(500);
//   });
// });

// $('#item').fadeIn().queue(function (next) {
//         $(this).removeClass('active');
//         next(); //Important to continue running the queue
//     }).fadeOut();

// $('li.s-li').on('mouseover', function() {
//   $('div.s-li-desc').stop().fadeOut(500);
//   $('#'+$(this).attr('id')+'-desc').stop().fadeIn(500);
// });

$('li.s-li').on('mouseover', function() {
  $('#'+$(this).attr('id')+'-desc').queue(function(next){
      $('div.s-li-desc').fadeOut(500);
      next();
  }).delay(500).fadeIn(500);
});

// Box Modals
// $("#openSchedule").click(function () {
//    $("#box-1-modal").dialog('open');
//    return false;
// });
//
//  $("#box-1-modal").dialog({
//    autoOpen: false,
//    title:"Schedule an appointment",
//    width:600,
//    modal:true,
//    draggable:true,
//    resizable:true,
//    responsive: true,
//    show:"fade",
//    hide:"fade",
//    closeOnEscape:true,
//    buttons: {
//        text: "Submit",
//        click: $.noop,
//        type: "submit",
//        form: "scheduleForm"
//      },
//      "Close": function() {
//        $( this ).dialog( "close" );
//    }
// });

// Slider
$('.a-slides').slick({
  arrows: true,
  infinite: true,
  // centerMode: true,
  speed: 250,
  fade: true,
  cssEase: 'linear'
});

// Map
var mapObj = new GMaps({
  el: '#map',
  lat: 38.222669,
  lng: -122.128777
});
var m = mapObj.addMarker({
  lat: 38.222669,
  lng: -122.128777,
  title: 'Exit 41',
  infoWindow: {
    content: '<h4>Exit 41</div>',
    maxWidth: 100
  }
});

// Slider
  $('.p-slider').slick({
    autoplay: false,
    infinite: true,
    dots: true,
    draggable: false,
    fade: true,
    speed: 1000
  });

// Text Animations
  // Function which adds the 'animated' class to any '.animatable' in view
var doAnimations = function() {
  // Calc current offset and get all animatables
  var offset = $(window).scrollTop() + $(window).height();
  var $animatables = $('.animatable');
  // Unbind scroll handler if we have no animatables
  if ($animatables.size() == 0) {
    $(window).off('scroll', doAnimations);
  }

  // Check all animatables and animate them if necessary
  $animatables.each(function(i) {
    var $animatable = $(this);
    if (($animatable.offset().top + $animatable.height() - 20) < offset) {
      $animatable.removeClass('animatable').addClass('animated');
    }
  });
};

  // Hook doAnimations on scroll, and trigger a scroll
$(window).on('scroll', doAnimations);
$(window).trigger('scroll');

// scroll to links
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset('25%').top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
