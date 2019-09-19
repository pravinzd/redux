
$(window).scroll(function () {
  if ($(window).scrollTop() >= 60) {
    $('header .header-holder').addClass('fixed');
    $('header .js-submenu').addClass('d-none');
    $('header .js-main-menu').addClass('bg-gray');
  }
  else {
    $('header .header-holder').removeClass('fixed');
    $('header .js-submenu').removeClass('d-none');
    $('header .js-main-menu').removeClass('bg-gray');
  }
});

$(document).ready(function () {
  if ($(window).scrollTop() >= 60) {
    $('header .header-holder').addClass('fixed');
    $('header .js-submenu').addClass('d-none');
    $('header .js-main-menu').addClass('bg-gray');
  }
  else {
    $('header .header-holder').removeClass('fixed');
    $('header .js-submenu').removeClass('d-none');
    $('header .js-main-menu').removeClass('bg-gray');
  }

  // Hide/show animation hamburger function
  $('.navbar-toggler').on('click', function () {

    if (window.innerWidth <= 991) {
      $('.header-holder .main-menu').toggleClass('bg-gray-1');
      $('body').toggleClass('body-fixed');
    }
  });

  // Add smooth scrolling to all links
  $(".arrow-down a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 40

        //scrollTop: eval($(hash).offset().top - 70)
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  /*
  * scroll top
  */
  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 600) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

});

jQuery(function ($) {
  setupMenus();

  $(window).resize(function () {
    setupMenus();
  });

  function setupMenus() {

    if (window.innerWidth <= 991) {
      $('ul.top-submenu > li').addClass('moved-item'); //tag moved items so we can move them back
      $('ul.top-submenu > li').appendTo('ul.main-nav');
      $('.js-submenu').hide();
    }

    if (window.innerWidth > 991) {
      $('.main-nav, nav .top-submenu').removeAttr('style');
      //$( '.top-submenu li' ).removeClass( 'active' );
      $('.js-submenu').show();
      $('ul.main-nav > li.moved-item').appendTo('ul.top-submenu');
    }

  }

});



// Hide/show animation hamburger function
$('.navbar-toggler').on('click', function () {
});

// For IOS buble tapping issue
$(document).ready(function () {
  if ($(window).width() < 992) {
    $(".navbar a").on("click touchend", function (e) {
      var el = $(this);
      var link = el.attr("href");
      window.location = link;
    });
  }

});

$('#ResumeCV').on('change', function () {
  var fileName = $(this).val();
  $('#ResumeCVlabel').addClass("selected").html(fileName);
})
$('#coverletter').on('change', function () {
  var fileName = $(this).val();
  $('#coverletterlabel').addClass("selected").html(fileName);
})