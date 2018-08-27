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
  scrollArrow = document.querySelector('.arrow-wrapper');
};

var animateIntro = function() {
  $(".main-header").delay(100).animate({
        opacity: 1
    }, 1200, function() {
        $(".underbrow").animate({
            opacity: 1
        }, 1600);
    });

    $(function() {
      $('#intro-content').addClass('show');
    }, 1600);

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
