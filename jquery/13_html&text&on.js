$(document).ready(function () {
    $('.box h1').text('this is .box h1 in js'); // html()註解掉才看得到，因為html()會把（選擇器裡）所有內容清空，再加上文字
    // $('body').html('<h2>this is h2 in js</h2>');

    // on範例
    $('.wrap').on('click', 'h1', function (event) {
        event.preventDefault();
        alert('Yes');// 彈出視窗
    });

    // click範例
  $(".box").click(function(event) {
    event.preventDefault();
    //要執行的程式碼
  });

    $('.box1').html('<h1>用jQuery動態產生出來的</h1>');
});