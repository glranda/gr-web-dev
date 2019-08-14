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
  let containerTop = $('.image-showcase').offset().top;
  containerTop = containerTop + 250;

  console.log('tops =  ' + top1 + ' ' + top2 + ' ' + top3 + ' ' + top4);
  console.log('bottoms =  ' + bottom1 + ' ' + bottom2 + ' ' + bottom3 + ' ' + bottom4);
  console.log('container = ' + containerTop);

  function load(x) {
    $(eval('img' + x)).addClass('load');
    $(eval('img' + x)).removeClass('unload');
  }
  function unload(x) {
    $(eval('img' + x)).attr("src","/portfolio/image/hc.png");;
    $(eval('img' + x)).attr("src","/portfolio/image/sfg.png");;
  }

  for (i=1; i<=4; i++) {
    let current = eval('bottom' + i);
    if (current <= containerTop) {
        load(i);
    } else if (current >= containerTop) {
        unload(i);
    }
  }
}

$(document).ready(function() {
  $(".image-showcase").on('scroll', function() {
    fakelazyload();
  });
});
