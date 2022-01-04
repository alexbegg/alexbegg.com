$('#video').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
});
$('.playpause').hover(function toggleControls() {
    if ($("#video").get(0).hasAttribute("controls")) {
        $("#video").get(0).removeAttribute("controls")
    } else {
        $("#video").get(0).setAttribute("controls", "controls")
    }
});
$('#video').parent().click(function () {
    if($(this).children("#video").get(0).paused){
        $(this).children("#video").get(0).play();
        $(this).children(".playpause").fadeOut();
    } else {
        $(this).children("#video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});
