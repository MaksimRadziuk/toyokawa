

$(document).ready(function(){
  
  new WOW().init();
/*HOVER OVER IMG*/
  $('.img_block.japan').hover(
    function(){
      $('.img_block.japan').animate({opacity:"1", saturate:"100%"});
      $("#target1").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.japan').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.japan').animate({opacity:".5", saturate:"0%"});
      $("#target1").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.japan').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('.img_block.norway').hover(
    function(){
      $('.img_block.norway').animate({opacity:"1", saturate:"100%"});
      $("#target2").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.norway').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.norway').animate({opacity:".5", saturate:"0%"});
      $("#target2").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.norway').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('.img_block.china').hover(
    function(){
      $('.img_block.china').animate({opacity:"1", saturate:"100%"});
      $("#target3").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.china').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.china').animate({opacity:".5", saturate:"0%"});
      $("#target3").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.china').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('.img_block.usa').hover(
    function(){
      $('.img_block.usa').animate({opacity:"1", saturate:"100%"});
      $("#target4").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.usa').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.usa').animate({opacity:".5", saturate:"0%"});
      $("#target4").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.usa').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('.img_block.southAfrica').hover(
    function(){
      $('.img_block.southAfrica').animate({opacity:"1", saturate:"100%"});
      $("#target5").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.southAfrica').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.southAfrica').animate({opacity:".5", saturate:"0%"});
      $("#target5").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.southAfrica').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('.img_block.brasil').hover(
    function(){
      $('.img_block.brasil').animate({opacity:"1", saturate:"100%"});
      $("#target6").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.brasil').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.brasil').animate({opacity:".5", saturate:"0%"});
      $("#target6").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.brasil').animate({opacity:".5", saturate:"0%"});
    }
  );

/*HOVER OVER TRGET ICON*/

  $('#target1').hover(
    function(){
      $('.img_block.japan').animate({opacity:"1", saturate:"100%"});
      $("#target1").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.japan').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.japan').animate({opacity:".5", saturate:"0%"});
      $("#target1").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.japan').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('#target2').hover(
    function(){
      $('.img_block.norway').animate({opacity:"1", saturate:"100%"});
      $("#target2").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.norway').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.norway').animate({opacity:".5", saturate:"0%"});
      $("#target2").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.norway').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('#target3').hover(
    function(){
      $('.img_block.china').animate({opacity:"1", saturate:"100%"});
      $("#target3").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.china').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.china').animate({opacity:".5", saturate:"0%"});
      $("#target3").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.china').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('#target4').hover(
    function(){
      $('.img_block.usa').animate({opacity:"1", saturate:"100%"});
      $("#target4").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.usa').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.usa').animate({opacity:".5", saturate:"0%"});
      $("#target4").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.usa').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('#target5').hover(
    function(){
      $('.img_block.southAfrica').animate({opacity:"1", saturate:"100%"});
      $("#target5").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.southAfrica').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.southAfrica').animate({opacity:".5", saturate:"0%"});
      $("#target5").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.southAfrica').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('#target6').hover(
    function(){
      $('.img_block.brasil').animate({opacity:"1", saturate:"100%"});
      $("#target6").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.brasil').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.brasil').animate({opacity:".5", saturate:"0%"});
      $("#target6").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.brasil').animate({opacity:".5", saturate:"0%"});
    }
  );

/*HOVER OVER DESCRIPTION*/

$('.description_block.japan').hover(
    function(){
      $('.img_block.japan').animate({opacity:"1", saturate:"100%"});
      $("#target1").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.japan').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.japan').animate({opacity:".5", saturate:"0%"});
      $("#target1").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.japan').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('.description_block.norway').hover(
    function(){
      $('.img_block.norway').animate({opacity:"1", saturate:"100%"});
      $("#target2").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.norway').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.norway').animate({opacity:".5", saturate:"0%"});
      $("#target2").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.norway').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('.description_block.china').hover(
    function(){
      $('.img_block.china').animate({opacity:"1", saturate:"100%"});
      $("#target3").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.china').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.china').animate({opacity:".5", saturate:"0%"});
      $("#target3").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.china').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('.description_block.usa').hover(
    function(){
      $('.img_block.usa').animate({opacity:"1", saturate:"100%"});
      $("#target4").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.usa').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.usa').animate({opacity:".5", saturate:"0%"});
      $("#target4").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.usa').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('.description_block.southAfrica').hover(
    function(){
      $('.img_block.southAfrica').animate({opacity:"1", saturate:"100%"});
      $("#target5").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.southAfrica').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.southAfrica').animate({opacity:".5", saturate:"0%"});
      $("#target5").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.southAfrica').animate({opacity:".5", saturate:"0%"});
    }
  );

  $('.description_block.brasil').hover(
    function(){
      $('.img_block.brasil').animate({opacity:"1", saturate:"100%"});
      $("#target6").css('backgroundImage', 'url(img/target-active.png)');
      $('.description_block.brasil').animate({opacity:"1", saturate:"100%"});
    },
    function(){
      $('.img_block.brasil').animate({opacity:".5", saturate:"0%"});
      $("#target6").css('backgroundImage', 'url(img/target-inactive.png)');
      $('.description_block.brasil').animate({opacity:".5", saturate:"0%"});
    }
  );



});




