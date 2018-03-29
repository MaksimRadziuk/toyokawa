

$(document).ready(function(){
  

  new WOW().init();

  $('.catalog_card.turbine').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.turbine').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.turbine').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.turbine').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.turbine').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.starter').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.starter').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.starter').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.starter').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.starter').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.generator').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.generator').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.generator').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.generator').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.generator').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.piston').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.piston').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.piston').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.piston').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.piston').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.cylinder').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.cylinder').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.cylinder').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.cylinder').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.cylinder').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.valve').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.valve').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.valve').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.valve').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.valve').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.crankshaft').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.crankshaft').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.crankshaft').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.crankshaft').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.crankshaft').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.cam-shaft').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.cam-shaft').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.cam-shaft').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.cam-shaft').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.cam-shaft').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.piston-rod').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.piston-rod').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.piston-rod').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.piston-rod').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.piston-rod').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.water-pump').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.water-pump').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.water-pump').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.water-pump').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.water-pump').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.oil-pump').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.oil-pump').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.oil-pump').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.oil-pump').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.oil-pump').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.oil-radiator').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.oil-radiator').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.oil-radiator').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.oil-radiator').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.oil-radiator').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.injection').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.injection').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.injection').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.injection').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.injection').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.cylinder-head').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.cylinder-head').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.cylinder-head').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.cylinder-head').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.cylinder-head').slideUp();
  	}
  	else {}
  });
  $('.catalog_card.MPC').click(function(){
  	var el = $('.preview_block').is(':visible');
  	var curr = $('.preview_block.MPC').is(':visible');
  	if (el === true && curr === false) {
  		$('.preview_block').hide();
  		$('.preview_block.MPC').show();
  	}
  	if (el === false && curr === false) {
  		$('.preview_block.MPC').slideDown();
  	}
  	if (el === true && curr === true) {
  		$('.preview_block.MPC').slideUp();
  	}
  	else {}
  });




/*IPHONE FOCUS FIX*/
  if (innerWidth <= 600) {

    $('.catalog_card.turbine').hover(
      function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.turbine').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.turbine').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.turbine').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.turbine').slideUp();
      }
      else {}
      },
      function(){}
    );
    $('.catalog_card.starter').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.starter').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.starter').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.starter').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.starter').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.generator').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.generator').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.generator').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.generator').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.generator').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.piston').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.piston').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.piston').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.piston').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.piston').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.cylinder').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.cylinder').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.cylinder').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.cylinder').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.cylinder').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.valve').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.valve').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.valve').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.valve').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.valve').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.crankshaft').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.crankshaft').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.crankshaft').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.crankshaft').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.crankshaft').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.cam-shaft').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.cam-shaft').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.cam-shaft').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.cam-shaft').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.cam-shaft').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.piston-rod').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.piston-rod').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.piston-rod').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.piston-rod').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.piston-rod').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.water-pump').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.water-pump').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.water-pump').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.water-pump').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.water-pump').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.oil-pump').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.oil-pump').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.oil-pump').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.oil-pump').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.oil-pump').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.oil-radiator').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.oil-radiator').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.oil-radiator').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.oil-radiator').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.oil-radiator').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.injection').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.injection').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.injection').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.injection').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.injection').slideUp();
      }
      else {}
    },function(){});
    $('.catalog_card.cylinder-head').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.cylinder-head').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.cylinder-head').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.cylinder-head').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.cylinder-head').slideUp();
      }
      else {}
    },function(){});

    $('.catalog_card.MPC').hover(function(){
      var el = $('.preview_block').is(':visible');
      var curr = $('.preview_block.MPC').is(':visible');
      if (el === true && curr === false) {
        $('.preview_block').hide();
        $('.preview_block.MPC').show();
      }
      if (el === false && curr === false) {
        $('.preview_block.MPC').slideDown();
      }
      if (el === true && curr === true) {
        $('.preview_block.MPC').slideUp();
      }
      else {}
    },function(){});
  }
  else{}

});




