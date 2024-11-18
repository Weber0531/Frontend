$(document).ready(function(){
    $('.button1').click(function(event){
        $('.message').slideDown(2000);// 數字為毫秒，1秒=1000毫秒
    });

    $('.button2').click(function(event){
        $('.message').slideUp();// 數字為毫秒，1秒=1000毫秒
    });
    
    $('.button3').click(function(event){
        $('.message').slideToggle(1000);// 數字為毫秒，1秒=1000毫秒
    });

    $('.button4').click(function(event){
        $('.message').fadeIn();// 數字為毫秒，1秒=1000毫秒
    });

    $('.button5').click(function(event){
        $('.message').fadeOut(1000);// 數字為毫秒，1秒=1000毫秒
    });

    $('.button6').click(function(event){
        $('.message').fadeToggle();// 數字為毫秒，1秒=1000毫秒
    });

    $('.start').click(function(event) {
        $('.message').slideDown(3000).fadeOut().slideToggle();
    })
    
    // css寫法
    $('.button7').click(function(event){
        $('.text').addClass('active'); //add class="text active"
    });

    $('.button8').click(function(event){
        $('.text').removeClass('active');//remove class="text active"
    });

    $('.button9').click(function(event){
        $('.text').toggleClass('active');
    });

    //stop語法
    $('.stop').click(function(event) {
        $('.box').stop().slideToggle(5000);
    })
})