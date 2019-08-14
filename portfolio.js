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
  let img1 = $('#hm-1').offset().top,
      img2 = $('#hm-2').offset().top,
      img3 = $('#hm-3').offset().top,
      img4 = $('#hm-4').offset().top;

  let bottom1 = img1 + $('#hm-1').height(),
      bottom2 = img2 + $('#hm-2').height(),
      bottom3 = img3 + $('#hm-3').height(),
      bottom4 = img4 + $('#hm-4').height();

  let containerTop = $('#lazyload').offset().top;

  console.log('top = ' + containerTop);

  let bottoms = [bottom1, bottom2, bottom3, bottom4];

  for (i=0; i<=bottoms.length; i++) {
    i=0;
    if (bottoms[i]>= containerTop) {
      console.log('bottoms = ' + bottom1 + ', ' + bottom2 + ', ' + bottom3 + ', ' + bottom4);
      console.log('bottoms[i] = ' + bottoms[i]);

      $('#hm-' + [i]).css("visibility", "hidden");
    }
  }
}

$(window).scroll(function() {
  fakelazyload();
});
