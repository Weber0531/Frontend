$(document).ready(function () {
    $('img').attr({'width' : '500px','height' : '200px'});

    $('.remove').click(function(event){
        $(this).parent().parent().remove();
    })
});