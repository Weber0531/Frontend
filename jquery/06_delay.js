$(document).ready(function() {
    $('.open').click(function(event) {
        $('.box1').fadeIn();
        $('.box2').delay(1000).slideDown();
        $('.box3').delay(3000).show(0);
    });
})