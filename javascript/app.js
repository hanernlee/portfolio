$(document).ready(function () {

  $('#about').on('click', function() {
    if ($('#about-section').is(':hidden')) {
      $('#about-section').css("display","block");
      $('#about-desc').css("display","block");
      $('#navigation').css('display','none');
      $('#name-container').fadeOut();
    }
  });

  $('#work').on('click', function() {
    if ($('#work-section').is(':hidden')) {
      $('#work-section').css("display","block");
      $('#navigation').css('display','none');
      $('#name-container').hide();
    }
  });

  $('#contact').on('click', function() {
    if ($('#contact-section').is(':hidden')) {
      $('#contact-section').css("display","block");
      $('#navigation').css('display','none');
      $('#name-container').hide();
    }
  });


  $('.close-btn').on('click', function() {
    $('#about-section').css('display','none');
    $('#work-section').css("display","none");
    $('#contact-section').css("display","none");
    $('#navigation').fadeIn('slow');
    $('#name-container').fadeIn('slow');
  });



});
