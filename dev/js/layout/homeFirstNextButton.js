$("#homeNext").click(function () {
    $("html, body").animate({
        scrollTop: $("#homeTwoScreen").offset().top
    }, { duration: 500, easing: "swing" });
    return false;
});