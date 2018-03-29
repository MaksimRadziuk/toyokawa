

$(document).ready(function(){
  
  new WOW().init();

  $('#date1963').hover(function(){
    $('.flash').animate({top:'-10px'},100);
  });
  $('#date1971').hover(function(){
    $('.flash').animate({top:'25px'},100);
  });
  $('#date1976').hover(function(){
    $('.flash').animate({top:'210px'},100);
  });
  $('#date1981').hover(function(){
    $('.flash').animate({top:'260px'},100);
  });
  $('#date1987').hover(function(){
    $('.flash').animate({top:'460px'},100);
  });
  $('#date1989').hover(function(){
    $('.flash').animate({top:'490px'},100);
  });
  $('#date1991').hover(function(){
    $('.flash').animate({top:'740px'},100);
  });
  $('#date1993').hover(function(){
    $('.flash').animate({top:'760px'},100);
  });
  $('#date1998').hover(function(){
    $('.flash').animate({top:'1010px'},100);
  });
  $('#date2002').hover(function(){
    $('.flash').animate({top:'1020px'},100);
  });
  $('#date2005').hover(function(){
    $('.flash').animate({top:'1250px'},100);
  });
  $('#date2011').hover(function(){
    $('.flash').animate({top:'1270px'},100);
  });
  $('#date2012').hover(function(){
    $('.flash').animate({top:'1530px'},100);
  });
  $('#date2013').hover(function(){
    $('.flash').animate({top:'1550px'},100);
  });
  $('#date2014').hover(function(){
    $('.flash').animate({top:'1870px'},100);
  });
  $('#date2015').hover(function(){
    $('.flash').animate({top:'1890px'},100);
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
