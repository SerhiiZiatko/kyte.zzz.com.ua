$(document).ready(function(){
	



  $('#slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('#slider2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('#menu').click(function() {
    if ($('.nav ul').hasClass('dropDown'))
    {
      $('.nav ul').removeClass('dropDown');
    }
    else
      {
        $('.nav ul').addClass('dropDown');
      }
    
  });

  $("#navigation").changeActiveNav();


  $(window).scroll(function() {
      if ($(this).scrollTop() > 2){ 
//I am using this section to add and remove the dynamic class "stick" 
          $('.header').addClass("sticky"); 
      }
      else{
          $('.header').removeClass("sticky");
      }
  });
});