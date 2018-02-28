

$(document).ready(function(){
  

  new WOW().init();

var videoExst = $('.banner').is('video');
if (videoExst = true){
  $('.bannerWrap').css({'height':'auto', 'maxHeight': '700px'});
}


/*TABS*/
  $('#tab24').click(function(){
  	$('#tab50').parent('.engineLink_block').removeClass('active');
  	$('#tab50_content').removeClass('active');

    $(this).parent('.engineLink_block').addClass('active');
  	$('#tab24_content').addClass('active');
  });
  $('#tab50').click(function(){
  	$('#tab24').parent('.engineLink_block').removeClass('active');
    $('#tab24_content').removeClass('active');

    $(this).parent('.engineLink_block').addClass('active');
    $('#tab50_content').addClass('active');

  });


var tab = window.location.hash;

if (tab === '#tab50') {
  $('#tab24').removeClass('active');
    $('#tab24_content').removeClass('active');
    $('#tab50').addClass('active');
    $('#tab50_content').addClass('active');
}
else{
  $('#tab50').removeClass('active');
    $('#tab50_content').removeClass('active');
    $('#tab24').addClass('active');
    $('#tab24_content').addClass('active');
}

});




