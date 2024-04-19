$(document).ready(function () {
    // this
    $('.menu li').click(function (e) { 
        $(this).addClass('active');
    });

    // 影響父層
    $('.add-cart').click(function (e) { 
        $(this).parent().toggleClass('active');
    });

    // 影響同層
    $('.siblings li').click(function (e) { 
        $(this).addClass('active').siblings().removeClass('active');;
    });

    $('.find li').click(function (e) { 
        $(this).find('h3').toggleClass('active');
    });
});