$(document).ready(function () {
    $('.img').attr({'width' : '500px','height' : '2000px'});

    $('.remove').click(function(event){
        $(this).parent().parent().remove();
    })

    $('.top').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0 // 0 is 置頂
        }, 1000) // 1000毫秒
    });
});