$(document).ready(function () {

  $('#about').on('click', function() {
    if ($('#about-section').is(':hidden')) {
      $(this).find('i').removeClass('fa-user').addClass('fa-close');
      $('#about-section').css("display","flex");
      $('#work').css({'opacity':'0','pointer-events':'none'});
      $('#contact').css({'opacity':'0','pointer-events':'none'});
      $('#name-container').hide();
    } else {
      $(this).find('i').removeClass('fa-close').addClass('fa-user');
      $('#about-section').css("display","none");
      $('#work').css({'opacity':'1','pointer-events':'auto'});
      $('#contact').css({'opacity':'1','pointer-events':'auto'});
      $('#name-container').show();
    }
  });


  $('#work').on('click', function() {
    if ($('#work-section').is(':hidden')) {
      $(this).find('i').removeClass('fa-briefcase').addClass('fa-close');
      $('#work-section').css("display","flex");
      $('#about').css({'opacity':'0','pointer-events':'none'});
      $('#contact').css({'opacity':'0','pointer-events':'none'});
      $('#name-container').hide();
    } else {
      $(this).find('i').removeClass('fa-close').addClass('fa-briefcase');
      $('#work-section').css("display","none");
      $('#about').css({'opacity':'1','pointer-events':'auto'});
      $('#contact').css({'opacity':'1','pointer-events':'auto'});
      $('#name-container').show();
    }
  });

  $('#contact').on('click', function() {
    if ($('#contact-section').is(':hidden')) {
      $(this).find('i').removeClass('fa-phone').addClass('fa-close');
      $('#contact-section').css("display","flex");
      $('#about').css({'opacity':'0','pointer-events':'none'});
      $('#work').css({'opacity':'0','pointer-events':'none'});
      $('#name-container').hide();
    } else {
      $(this).find('i').removeClass('fa-close').addClass('fa-phone');
      $('#contact-section').css("display","none");
      $('#about').css({'opacity':'1','pointer-events':'auto'});
      $('#work').css({'opacity':'1','pointer-events':'auto'});
      $('#name-container').show();
    }
  });



});
