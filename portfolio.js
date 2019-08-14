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

var setupValues = function() {
  myHeader = document.querySelector('.main-header');
  subHead = document.querySelector('.underbrow');
};

var animateIntro = function() {
  $(".main-logo").delay(100).animate({
        opacity: 1
    }, 1200, function() {
        $(".main-header").animate({
            opacity: 1
        }, 1600);
    });

    setTimeout(function() {
      $('#intro-content').addClass('show-intro');
      $('.underbrow').addClass('show-under');
    }, 800);

};


var init = function() {
  setupValues();
  animateIntro();
};

GRAYSON.scrolling = {
        init: init
    };

    return GRAYSON;

}($, GRAYSON || {}));

function fakelazyload() {
  let img1 = $('#hm-1'),
      img2 = $('#hm-2'),
      img3 = $('#hm-3'),
      img4 = $('#hm-4');

  let top1 = img1.offset.top(),
      top2 = img1.offset.top(),
      top3 = img1.offset.top(),
      top4 = img1.offset.top();

  let bottom1 = top1 + $('#hm-1').height(),
      bottom2 = top2 + $('#hm-2').height(),
      bottom3 = top3 + $('#hm-3').height(),
      bottom4 = top4 + $('#hm-4').height();

  let containerTop = $('#lazyload').offset().top;

  function load(x) {
    $(img + x).addClass('load');
    $(img + x).removeClass('unload');
  }
  function unload(x) {
    $(img + x).addClass('unload');
    $(img + x).removeClass('load');
  }
    switch(true) {
      case bottom1 <= containerTop:
        load(1);
      break;
      case bottom2 <= containerTop:
        load(2);
      break;
      case bottom3 <= containerTop:
        load(3);
      break;
      case bottom4 <= containerTop:
        load(4);
      break;
      case bottom1 >= containerTop:
        unload(1);
      break;
      case bottom2 >= containerTop:
        unload(2);
      break;
      case bottom3 >= containerTop:
        unload(3);
      break;
      case bottom4 >= containerTop:
        unload(4);
      break;
    }
  }

var scrollStart = false;
$('#lazyload').mouseenter(function(){scrollStart=true;});
$('#lazyload').mouseleave(function(){scrollStart=false;});

console.log(scrollStart);

if (scrollStart === true) {
  console.log('mouse in div');
  $(window).scroll(function() {
    console.log('working...');
    fakelazyload();
  }
}






});
