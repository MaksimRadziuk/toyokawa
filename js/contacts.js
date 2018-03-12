

$(document).ready(function(){
  
  new WOW().init();
/*HOVER OVER IMG*/
  $('.img_block.japan').hover(
    function(){
      $('.img_block.japan').animate({opacity:"1", saturate:"100%"});
      $("#target1").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.japan').animate({opacity:"1", saturate:"100%"});
      $('.description_block.japan>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.japan>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.japan').animate({opacity:".5", saturate:"0%"});
      $("#target1").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.japan').animate({opacity:".5", saturate:"0%"});
      $('.description_block.japan>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.japan>.rightPart').css('color',"#fff");
    }
  );

  $('.img_block.norway').hover(
    function(){
      $('.img_block.norway').animate({opacity:"1", saturate:"100%"});
      $("#target2").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.norway').animate({opacity:"1", saturate:"100%"});
      $('.description_block.norway>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.norway>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.norway').animate({opacity:".5", saturate:"0%"});
      $("#target2").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.norway').animate({opacity:".5", saturate:"0%"});
      $('.description_block.norway>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.norway>.rightPart').css('color',"#fff");
    }
  );

  $('.img_block.china').hover(
    function(){
      $('.img_block.china').animate({opacity:"1", saturate:"100%"});
      $("#target3").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.china').animate({opacity:"1", saturate:"100%"});
      $('.description_block.china>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.china>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.china').animate({opacity:".5", saturate:"0%"});
      $("#target3").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.china').animate({opacity:".5", saturate:"0%"});
      $('.description_block.china>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.china>.rightPart').css('color',"#fff");
    }
  );

  $('.img_block.usa').hover(
    function(){
      $('.img_block.usa').animate({opacity:"1", saturate:"100%"});
      $("#target4").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.usa').animate({opacity:"1", saturate:"100%"});
      $('.description_block.usa>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.usa>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.usa').animate({opacity:".5", saturate:"0%"});
      $("#target4").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.usa').animate({opacity:".5", saturate:"0%"});
      $('.description_block.usa>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.usa>.rightPart').css('color',"#fff");
    }
  );

  $('.img_block.southAfrica').hover(
    function(){
      $('.img_block.southAfrica').animate({opacity:"1", saturate:"100%"});
      $("#target5").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.southAfrica').animate({opacity:"1", saturate:"100%"});
      $('.description_block.southAfrica>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.southAfrica>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.southAfrica').animate({opacity:".5", saturate:"0%"});
      $("#target5").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.southAfrica').animate({opacity:".5", saturate:"0%"});
      $('.description_block.southAfrica>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.southAfrica>.rightPart').css('color',"#fff");
    }
  );

  $('.img_block.brasil').hover(
    function(){
      $('.img_block.brasil').animate({opacity:"1", saturate:"100%"});
      $("#target6").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.brasil').animate({opacity:"1", saturate:"100%"});
      $('.description_block.brasil>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.brasil>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.brasil').animate({opacity:".5", saturate:"0%"});
      $("#target6").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.brasil').animate({opacity:".5", saturate:"0%"});
      $('.description_block.brasil>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.brasil>.rightPart').css('color',"#fff");
    }
  );

/*HOVER OVER TRGET ICON*/

  $('#target1').hover(
    function(){
      $('.img_block.japan').animate({opacity:"1", saturate:"100%"});
      $("#target1").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.japan').animate({opacity:"1", saturate:"100%"});
      $('.description_block.japan>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.japan>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.japan').animate({opacity:".5", saturate:"0%"});
      $("#target1").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.japan').animate({opacity:".5", saturate:"0%"});
      $('.description_block.japan>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.japan>.rightPart').css('color',"#fff");
    }
  );

  $('#target2').hover(
    function(){
      $('.img_block.norway').animate({opacity:"1", saturate:"100%"});
      $("#target2").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.norway').animate({opacity:"1", saturate:"100%"});
      $('.description_block.norway>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.norway>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.norway').animate({opacity:".5", saturate:"0%"});
      $("#target2").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.norway').animate({opacity:".5", saturate:"0%"});
      $('.description_block.norway>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.norway>.rightPart').css('color',"#fff");
    }
  );

  $('#target3').hover(
    function(){
      $('.img_block.china').animate({opacity:"1", saturate:"100%"});
      $("#target3").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.china').animate({opacity:"1", saturate:"100%"});
      $('.description_block.china>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.china>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.china').animate({opacity:".5", saturate:"0%"});
      $("#target3").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.china').animate({opacity:".5", saturate:"0%"});
      $('.description_block.china>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.china>.rightPart').css('color',"#fff");
    }
  );

  $('#target4').hover(
    function(){
      $('.img_block.usa').animate({opacity:"1", saturate:"100%"});
      $("#target4").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.usa').animate({opacity:"1", saturate:"100%"});
      $('.description_block.usa>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.usa>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.usa').animate({opacity:".5", saturate:"0%"});
      $("#target4").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.usa').animate({opacity:".5", saturate:"0%"});
      $('.description_block.usa>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.usa>.rightPart').css('color',"#fff");
    }
  );

  $('#target5').hover(
    function(){
      $('.img_block.southAfrica').animate({opacity:"1", saturate:"100%"});
      $("#target5").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.southAfrica').animate({opacity:"1", saturate:"100%"});
      $('.description_block.southAfrica>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.southAfrica>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.southAfrica').animate({opacity:".5", saturate:"0%"});
      $("#target5").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.southAfrica').animate({opacity:".5", saturate:"0%"});
      $('.description_block.southAfrica>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.southAfrica>.rightPart').css('color',"#fff");
    }
  );

  $('#target6').hover(
    function(){
      $('.img_block.brasil').animate({opacity:"1", saturate:"100%"});
      $("#target6").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.brasil').animate({opacity:"1", saturate:"100%"});
      $('.description_block.brasil>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.brasil>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.brasil').animate({opacity:".5", saturate:"0%"});
      $("#target6").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.brasil').animate({opacity:".5", saturate:"0%"});
      $('.description_block.brasil>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.brasil>.rightPart').css('color',"#fff");
    }
  );

/*HOVER OVER DESCRIPTION*/

$('.description_block.japan').hover(
    function(){
      $('.img_block.japan').animate({opacity:"1", saturate:"100%"});
      $("#target1").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.japan').animate({opacity:"1", saturate:"100%"});
      $('.description_block.japan>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.japan>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.japan').animate({opacity:".5", saturate:"0%"});
      $("#target1").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.japan').animate({opacity:".5", saturate:"0%"});
      $('.description_block.japan>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.japan>.rightPart').css('color',"#fff");
    }
  );

  $('.description_block.norway').hover(
    function(){
      $('.img_block.norway').animate({opacity:"1", saturate:"100%"});
      $("#target2").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.norway').animate({opacity:"1", saturate:"100%"});
      $('.description_block.norway>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.norway>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.norway').animate({opacity:".5", saturate:"0%"});
      $("#target2").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.norway').animate({opacity:".5", saturate:"0%"});
      $('.description_block.norway>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.norway>.rightPart').css('color',"#fff");
    }
  );

  $('.description_block.china').hover(
    function(){
      $('.img_block.china').animate({opacity:"1", saturate:"100%"});
      $("#target3").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.china').animate({opacity:"1", saturate:"100%"});
      $('.description_block.china>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.china>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.china').animate({opacity:".5", saturate:"0%"});
      $("#target3").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.china').animate({opacity:".5", saturate:"0%"});
      $('.description_block.china>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.china>.rightPart').css('color',"#fff");
    }
  );

  $('.description_block.usa').hover(
    function(){
      $('.img_block.usa').animate({opacity:"1", saturate:"100%"});
      $("#target4").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.usa').animate({opacity:"1", saturate:"100%"});
      $('.description_block.usa>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.usa>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.usa').animate({opacity:".5", saturate:"0%"});
      $("#target4").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.usa').animate({opacity:".5", saturate:"0%"});
      $('.description_block.usa>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.usa>.rightPart').css('color',"#fff");
    }
  );

  $('.description_block.southAfrica').hover(
    function(){
      $('.img_block.southAfrica').animate({opacity:"1", saturate:"100%"});
      $("#target5").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.southAfrica').animate({opacity:"1", saturate:"100%"});
      $('.description_block.southAfrica>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.southAfrica>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.southAfrica').animate({opacity:".5", saturate:"0%"});
      $("#target5").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.southAfrica').animate({opacity:".5", saturate:"0%"});
      $('.description_block.southAfrica>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.southAfrica>.rightPart').css('color',"#fff");
    }
  );

  $('.description_block.brasil').hover(
    function(){
      $('.img_block.brasil').animate({opacity:"1", saturate:"100%"});
      $("#target6").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.brasil').animate({opacity:"1", saturate:"100%"});
      $('.description_block.brasil>.leftPart').css({'color':"#e22313", 'borderColor':'#e22313'});
      $('.description_block.brasil>.rightPart').css('color',"#e22313");
    },
    function(){
      $('.img_block.brasil').animate({opacity:".5", saturate:"0%"});
      $("#target6").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.brasil').animate({opacity:".5", saturate:"0%"});
      $('.description_block.brasil>.leftPart').css({'color':"#fff", 'borderColor':'#fff'});
      $('.description_block.brasil>.rightPart').css('color',"#fff");
    }
  );



});




