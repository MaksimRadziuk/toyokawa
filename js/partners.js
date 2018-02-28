

$(document).ready(function(){
  
  new WOW().init();


  $(".partners_block").each(function(){ 
    var h1 = $(this).height();
    var h = $(this).parent(".partners_row").height(); 
    if (h > h1){
      $(this).css('height', h);
    }
    else{}
  });  


  $('.partners_block>h4').hover(function(){
    $(this).parent('.partners_block').addClass('hover');
  },
  function(){
    $(this).parent('.partners_block').removeClass('hover')
  });

  $('.partners_block>.logo').hover(function(){
    $(this).parent('.partners_block').addClass('hover');
  },
  function(){
    $(this).parent('.partners_block').removeClass('hover')
  });

  $('.partners_block>.description').hover(function(){
    $(this).parent('.partners_block').addClass('hover');
  },
  function(){
    $(this).parent('.partners_block').removeClass('hover')
  });

});


