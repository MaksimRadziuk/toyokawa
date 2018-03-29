$(document).ready(function(){
  new WOW().init();

/*HOVER EFFECT IN aboutEngine main*/
    $('#point1').hover(
        function(){$('#part1').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point1>font>font').css({'color':'#fff'});},        
        function(){$('#part1').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point1>font>font').css({'color':'#ed2010'});}
    );

    $('#point2').hover(
        function(){$('#part2').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point2>font>font').css({'color':'#fff'});},        
        function(){$('#part2').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point2>font>font').css({'color':'#ed2010'});}
    );

    $('#point3').hover(
        function(){$('#part3').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point3>font>font').css({'color':'#fff'});},        
        function(){$('#part3').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point3>font>font').css({'color':'#ed2010'});}
    );

    $('#point4').hover(
        function(){$('#part4').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point4>font>font').css({'color':'#fff'});},        
        function(){$('#part4').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point4>font>font').css({'color':'#ed2010'});}
    );

    $('#point5').hover(
        function(){$('#part5').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point5>font>font').css({'color':'#fff'});},
        function(){$('#part5').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point5>font>font').css({'color':'#ed2010'});}
    );

    $('#point6').hover(
        function(){$('#part6').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point6>font>font').css({'color':'#fff'});},
        function(){$('#part6').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point5>font>font').css({'color':'#ed2010'});}
    );


    $('#part6').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point6').css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point6>font>font').css({'color':'#fff'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point6').css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point6>font>font').css({'color':'#ed2010'});}
    );
    $('#part5').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point5').css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point5>font>font').css({'color':'#fff'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point5').css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point5>font>font').css({'color':'#ed2010'});}
    );
    $('#part4').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point4').css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point4>font>font').css({'color':'#fff'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point4').css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point4>font>font').css({'color':'#ed2010'});}
    );
    $('#part3').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point3').css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point3>font>font').css({'color':'#fff'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point3').css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point3>font>font').css({'color':'#ed2010'});}
    );
    $('#part2').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point2').css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point2>font>font').css({'color':'#fff'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point2').css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point2>font>font').css({'color':'#ed2010'});}
    );
    $('#part1').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point1').css({'color':'#fff', 'backgroundColor':'#dd161c'});
                    $('#point1>font>font').css({'color':'#fff'});},

        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point1').css({'color':'#ed2010', 'backgroundColor':'#fff'});
                    $('#point1>font>font').css({'color':'#ed2010'});}
    );


/*SLIDER SETTINGS*/
    $('.proud_wrap').slick({
      vertical:true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll:1,
      initialSlide:1,
      arrows: true,
      infinite:false,
      centerPadding:"170px",
      draggable:true,
      verticalSwiping: true,
      focusOnSelect:true,
      respondTo:'slider',
      touchMove:true, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding:"150px",
          }
        }
      ]
    });

var videoExst = $('.banner').is('video');
var videoHeight = $('.banner video').height();
if (videoExst = true){
  $('.bannerWrap').css({'height':'auto', 'maxHeight': videoHeight*0.8});
}

});


/*TRANSLATE DEBUG*/
function fixedCharCodeAt (str, idx) {
    var code = str.charCodeAt(idx);
    if (0xD800 <= code && code <= 0xDBFF) { 
        var hi = code;
        var low = str.charCodeAt(idx+1);
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) { 
        var hi = str.charCodeAt(idx-1);
        var low = code;
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    return code;
}
document.getElementById("p1").addEventListener('DOMSubtreeModified', function () {
  mydiv=document.getElementById("p1");
  c=fixedCharCodeAt(mydiv.textContent,0);
  if (c<1280) {
    document.body.style.fontFamily = "Tahoma";
  } else {
    document.body.style.fontFamily = "SimSun";
  }
}, false);  
