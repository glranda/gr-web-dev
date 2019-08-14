/* ----- Designed and coded by Grayson Randall -----
----- https://graysonrandall.github.io/portfolio/index.html ----- */

var GRAYSON = (function($, GRAYSON) {

$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              }, 500, function() {
            });
        }
    });
});

// var animateIntro = function() {
//   $(".my-logo").delay(100).animate({
//         opacity: 1
//     }, 1200, function() {
//         $(".main-header").animate({
//             opacity: 1
//         }, 1600);
//     });

var animateIntro = function() {
  // $('.my-logo').delay(800).queue(function (next) {
  //   $(this).css('display', 'none');
  //   next();
  // });

  let logo = $( ".my-logo" );
  let profile = $( ".profile" );
  let body = $('body');
  let intro = $('#intro-content');
  let brow = $('.underbrow');
  function runIt() {
    setTimeout(function() {
      logo.css( "opacity", "1" );
    }, 800);

    logo
      .delay(2000)
      .animate({ right: "+=350" }, 600 );
    // profile
    //   .delay(3000)
    //   .css( "opacity", "1" )
    //   .delay(2000)
    //   .animate({ left: "+=350" }, 600 );
    // body
    //   .delay(5000)
    //   .removeClass('hide-main');
    // intro
    //   .delay(5000)
    //   .addClass('show-intro');
    // brow
    //   .delay(5000)
    //   .addClass('show-under');
  }

  runIt();

    // setTimeout(function() {
    //   $('#intro-content').addClass('show-intro');
    //   $('.underbrow').addClass('show-under');
    //   $('body').removeClass('hide-main');
    // }, 800);

}


var init = function() {
  // setupValues();
  animateIntro();
};

GRAYSON.scrolling = {
        init: init
    };

    return GRAYSON;

}($, GRAYSON || {}));

function fakelazyload() {
  let img1 = $('#hm-1');
  let img2 = $('#hm-2');
  let img3 = $('#hm-3');
  let img4 = $('#hm-4');
  let top1 = img1.offset().top;
  let top2 = img2.offset().top;
  let top3 = img3.offset().top;
  let top4 = img4.offset().top;
  let bottom1 = top1 + $('#hm-1').height();
  let bottom2 = top2 + $('#hm-2').height();
  let bottom3 = top3 + $('#hm-3').height();
  let bottom4 = top4 + $('#hm-4').height();
  let containerActual = $('.image-showcase').offset().top;
  let containerTop = $('.image-showcase').offset().top;
  let containerBottom = containerTop + $('.image-showcase').height();
  containerTop = containerTop + 300;
  containerActual = containerActual - 200;

  function load(x) {
    $(eval('img' + x)).attr("src","/portfolio/image/" + x + "-load.png");
  }
  function unload(x) {
    $(eval('img' + x)).attr("src","/portfolio/image/" + x + "-unload.png");
  }

  for (i=1; i<=4; i++) {
    let currentTop = eval('top' + i);
    let currentBot = eval('bottom' + i);

    if (currentBot <= containerTop && currentBot <= containerBottom && currentTop >= containerActual) {
        load(i);
    } else if (currentBot >= containerTop && currentBot <= containerBottom && currentTop >= containerActual) {
        unload(i);
    }
  }
}

$(document).ready(function() {
  $(".image-showcase").on('scroll', function() {
    fakelazyload();
  });
});
