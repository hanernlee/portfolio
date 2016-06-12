$(document).ready(function () {

  $('#about').on('click', function() {
    if ($('#about-section').is(':hidden')) {
      $('#about-section').css("display","block");
      $('#about').css({'opacity':'0','pointer-events':'none'});
      $('#work').css({'opacity':'0','pointer-events':'none'});
      $('#contact').css({'opacity':'0','pointer-events':'none'});
      $('#name-container').hide();
    }
  });

  $('#work').on('click', function() {
    if ($('#work-section').is(':hidden')) {
      $('#work-section').css("display","block");
      $('#about').css({'opacity':'0','pointer-events':'none'});
      $('#work').css({'opacity':'0','pointer-events':'none'});
      $('#contact').css({'opacity':'0','pointer-events':'none'});
      $('#name-container').hide();
    }
  });

  $('#contact').on('click', function() {
    if ($('#contact-section').is(':hidden')) {
      $('#contact-section').css("display","block");
      $('#about').css({'opacity':'0','pointer-events':'none'});
      $('#work').css({'opacity':'0','pointer-events':'none'});
      $('#contact').css({'opacity':'0','pointer-events':'none'});
      $('#name-container').hide();
    }
  });


  $('.close-btn').on('click', function() {
    $('#about-section').css("display","none");
    $('#work-section').css("display","none");
    $('#contact-section').css("display","none");

    $('#work').css({'opacity':'1','pointer-events':'auto'});
    $('#contact').css({'opacity':'1','pointer-events':'auto'});
    $('#about').css({'opacity':'1','pointer-events':'auto'});
    $('#name-container').show();
  });



});
