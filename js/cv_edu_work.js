var main = function() {
    $('.article').click(function() {
        $(this).children('.description').slideToggle(500);
    });
};


$(document).ready(main);


$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


