
$(document).ready(function () {
    setSlider();
    console.log("ready!");
});



// SLIDER
// init
function setSlider() {

    $(".carousel").carousel({
        interval: false,
        pause: true,
        touch: true
    });

    // enable prev/next navigation
    $(".carousel .carousel-control-prev").on("click", function () {
        $(".carousel").carousel("prev");
    });

    $(".carousel .carousel-control-next").on("click", function () {
        $(".carousel").carousel("next");
    });

    $(".carousel .carousel-inner").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            this.parent().carousel("next");
        },
        swipeRight: function () {
            this.parent().carousel("prev");
        },
        threshold: 0,
        tap: function (event, target) {
            window.location = $(this).find(".carousel-item.active a").attr("href");
        },
        excludedElements: "label, button, input, select, textarea, .noSwipe"
    });
}




