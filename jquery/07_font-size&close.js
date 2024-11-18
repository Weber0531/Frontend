$(document).ready(function() {
    // 放大
    $('.font-b').click(function(event) {
        event.preventDefault();
        $('.content p').css("font-size","20px");
    });

    // 中等
    $('.font-m').click(function(event) {
        event.preventDefault();
        $('.content p').css("font-size","16px");
    });

    // 縮小
    $('.font-s').click(function(event) {
        event.preventDefault();
        $('.content p').css("font-size","13px");
    });

    // 關閉效果
    $('.ad-close').click(function(event) {
        event.preventDefault();
        $('.ad').hide();
    });
})