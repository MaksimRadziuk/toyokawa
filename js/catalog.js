

$(document).ready(function(){
  

  new WOW().init();



/*ТАБУЛЯЦИЯ / TABS*/
  $('#tab24').click(function(){
  	$('#tab50').removeClass('active');
  	$('#tab50_content').removeClass('active');
  	$(this).addClass('active');
  	$('#tab24_content').addClass('active');
  });
  $('#tab50').click(function(){
  	$('#tab24').removeClass('active');
  	$('#tab24_content').removeClass('active');
  	$(this).addClass('active');
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




