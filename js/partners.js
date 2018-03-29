

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