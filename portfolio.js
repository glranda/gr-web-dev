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

  for (i=1; i<=4; i++) {
    if ((bottom + i) <= containerTop) {
      console('almost load ' + i);
      if (!(bottom + i).hasClass('load')) {
        load(i);
      }
    } else if ((bottom + i) >= containerTop) {
      console('almost unload ' + i);
      if (!(bottom + i).hasClass('unload')) {
        unload(i);
      }
    }
  }
}





// if (scrollStart === true) {
//   console.log('mouse in div');
//
// }

$(window).scroll(function() {
  var scrollStart = false;
  $('#lazyload').mouseenter(function(){scrollStart=true;});
  $('#lazyload').mouseleave(function(){scrollStart=false;});
  console.log(scrollStart);
  console.log('working...');
  // fakelazyload();
});
