

$(document).ready(function(){
  
  new WOW().init();

  $(window).scroll(function() {
    $('#animatedElement').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass("slideUp");
      }
    });
  });

  $(".partners_block").each(function(){ 
      var h1 = $(this).height();
      var h = $(this).parent(".partners_row").height(); 
      if (h > h1){
        $(this).css('height', h);
      }
      else{}
    });  

});


