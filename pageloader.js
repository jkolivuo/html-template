Jquery:
$(document).ready(function(){

  // Hide div 2 by default
  $('.cv').hide();
  $('.contact').hide();

  $('#cv_div').click(function(){ 
      $('.home').hide();
      $('.contact').hide();
      $('.cv_div').fadeIn(800);
  });

  $('#home').click(function(){ 
      $('.cv_div').hide();
      $('.contact').hide();
      $('.home').fadeIn(800);
  }); 
  $('#contact').click(function() {
    $('.cv_div').hide();
    $('.home').hide();
    $('.contact').fadeIn(800);
  });
});