$(document).ready(function() {
    $('.dropdown').click(function(event) {
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    });
})

const el = document.querySelector('li');