$(document).ready(function() {
    $('a').click(function(event){
        event.preventDefault();// 取消默認行為
        $('.box').slideUp();
    })
})