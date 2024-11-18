$(document).ready(function () {
    $('.cart > li > a').click(function (e) { 
        e.preventDefault();
        $(this).siblings().slideToggle();
        // this以外的都隱藏起來
        $(this).parent().siblings().find('ul').slideUp();
    });

    // $(document).ready(function() {
    //     $('.cart > li > a').click(function(event) {
    //       event.preventDefault();
    //       $(this).parent().siblings().find('ul').slideUp();
    //       $(this).parent().find('ul').slideToggle();
    //     });
    // });
});