$(document).ready(function(){
    $('.button').click(function(){
        $('h1,p').toggle();// 自動偵測顯示或隱藏
    });
})

const main = document.querySelector(".main");
console.log(main);
main.innerHTML = `<h1 class="header">title 1</h1>`;