function animateHamburger() {
    $('#hamburger-button').toggleClass('open');
    /*animation from burger to X*/
}

function slideMenu() {
    $('.navbar').toggleClass('open');
    /*animation for slide down menu*/
}
$('#hamburger-button').click(function () {
    console.log('trying');
    animateHamburger();
    slideMenu(); /*attaching click handler to the burger button*/
});

/*BACK TO TOP BUTTOM*/
var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut();
    }
});

$backToTop.on('click', function (e) {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
});
/*BACK TO TOP BUTTOM*/

/*SKILLS*/
var php = function () {
    document.querySelector(".design").className = "php1";
};
var css = function () {
    document.querySelector(".song").className = "css1";
};
var htm = function () {
    document.querySelector(".mixing").className = "htm1";
};
var jav = function () {
    document.querySelector(".orga").className = "javascript1";
};
setTimeout(php, 1000);
setTimeout(css, 2000);
setTimeout(htm, 3000);
setTimeout(jav, 4000);
/*SKILLS*/
