document.addEventListener("DOMContentLoaded", function() {
  // Vimeo API
  var iframe = $("#vimeo-player")[0];
  var player = $f(iframe);

  // Vimeo Pop Up
  $(".watch-video-btn").click(function() {
    $(".vimeo-pop-up").show();
    player.api("play");
  });
  // Close Video Pop Up
  $(".close-btn").click(function() {
    $(".vimeo-pop-up").hide();
    player.api("pause");
  });

  // Sign up to waitlist Pop Up
  $(".banner-link").click(function(e) {
    e.preventDefault();
    $(".waitlist-pop-up").show();
  });
  // Close Sign up to waitlist Pop Up
  $(".close-btn").click(function() {
    $(".waitlist-pop-up").hide();
  });

  // Historical interest rate with Linen App
  $(".rates-link").click(function(e) {
    e.preventDefault();
    $(".rate-pop-up").show();
  });
  // Close Historical interest rate with Linen App
  $(".close-btn, .rates-btn").click(function() {
    $(".rate-pop-up").hide();
  });
});

// Disclaymer

$(window).scroll(function() {
  let windowScroll = $(window).scrollTop();
  if (windowScroll > 1) {
    $(".mobile-disclaymer").hide();
  } else $(".mobile-disclaymer").show();
});

// // Mobile Navigation
// $(".modile-nav").addClass("closed");
// console.log($(".modile-nav").hasClass("closed"));
// $(".modile-nav").click(function() {
//   if ($(".mobile-nav").hasClass("closed")) {
//     console.log("closed");
//   } else if ($(".mobile-nav").hasClass("opened")) {
//     console.log("opened");
//   }
// });

// $(".opened").click(function() {
//   $(".header-nav").hide();
//   $(this).addClass("closed");
//   $(this).removeClass("opened");
// });
$(".modile-nav").click(function() {
  console.log("asd");
    $(".header-nav").toggle();
});
