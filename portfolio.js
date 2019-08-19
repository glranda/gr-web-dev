/* ----- Designed and coded by Grayson Randall -----
----- https://graysonrandall.github.io/portfolio/index.html ----- */

var GRAYSON = (function($, GRAYSON) {

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
              $('html, body').animate({
                  scrollTop: $(hash).offset().top - 300
              }, 500, function() {
            });
        }
    });
});

var animateIntro = function() {
  let logo = $( ".my-logo" );
  let profile = $( ".profile" );
  let body = $('body');
  let intro = $('#intro-content');
  let header = $('.main-header');
  let brow = $('.underbrow');

  function desktopAnimations() {
    setTimeout(function() {
      logo.addClass('show');
      profile.addClass('show');
    });
    logo
      .delay(200)
      .animate({ right: "350" }, 350 )
      .delay(950)
      .animate({ right: "0" }, 200 )
    profile
      .delay(200)
      .animate({ left: "350" }, 350 )
      .delay(950)
      .animate({ left: "0" }, 200 );
    setTimeout(function() {
      body.removeClass('hide-main');
    }, 1050);
    setTimeout(function() {
      logo.addClass('finale');
    }, 1450);
    setTimeout(function() {
      profile.addClass('z');
    }, 2550);
    setTimeout(function() {
      profile.addClass('finale');
      header.addClass('show-intro');
      brow.addClass('show-under');
      intro.addClass('show-intro');
    }, 2600);
  }

  function mobileAnimations() {
    setTimeout(function() {
      profile.addClass('show').css('position', 'relative');
      body.removeClass('hide-main');
      header.addClass('show-intro');
      intro.addClass('show-intro');
      brow.addClass('show-under');
    }, 200);
  }

  if ($(window).width() >= 680) {
    desktopAnimations();
  } else {
    mobileAnimations();
  }
}

var init = function() {
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
  containerTop = containerTop + 375;
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
    if ($(window).width() >= 680) {
      fakelazyload();
    }
  });
});
