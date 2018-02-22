$(document).ready(function(){

/*HOVER EFFECT IN aboutEngine main*/
    $('#point1').hover(
        function(){$('#part1').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});},        
        function(){$('#part1').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );

    $('#point2').hover(
        function(){$('#part2').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});},        
        function(){$('#part2').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );

    $('#point3').hover(
        function(){$('#part3').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});},        
        function(){$('#part3').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );

    $('#point4').hover(
        function(){$('#part4').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});},        
        function(){$('#part4').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );

    $('#point5').hover(
        function(){$('#part5').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});},
        function(){$('#part5').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );

    $('#point6').hover(
        function(){$('#part6').css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $(this).css({'color':'#fff', 'backgroundColor':'#dd161c'});},
        function(){$('#part6').css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $(this).css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );


    $('#part6').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point6').css({'color':'#fff', 'backgroundColor':'#dd161c'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point6').css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );
    $('#part5').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point5').css({'color':'#fff', 'backgroundColor':'#dd161c'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point5').css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );
    $('#part4').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point4').css({'color':'#fff', 'backgroundColor':'#dd161c'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point4').css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );
    $('#part3').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point3').css({'color':'#fff', 'backgroundColor':'#dd161c'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point3').css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );
    $('#part2').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point2').css({'color':'#fff', 'backgroundColor':'#dd161c'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point2').css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );
    $('#part1').hover(
        function(){$(this).css({'color':'#dd161c', 'borderBottom':'2px solid #ed2010'}).addClass('hover');
                    $('#point1').css({'color':'#fff', 'backgroundColor':'#dd161c'});},
        function(){$(this).css({'color':'#fff', 'borderBottom':'2px solid transparent'}).removeClass('hover');
                    $('#point1').css({'color':'#ed2010', 'backgroundColor':'#fff'});}
    );


/*SLIDER SETTINGS*/
    $('.proud_wrap').slick({
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll:1,
      arrows: true,
      infinite:false,
      vertical:true,
      centerPadding:"220px",
      initialSlide:1,
      responsive: [
        {
          breakpoint: 1370,
          settings: {
            centerPadding:"180px"
          }
        },
        {
          breakpoint: 1025,
          settings: {
            centerPadding:"130px"
          }
        },
        {
          breakpoint: 701,
          settings: {
            centerPadding:"100px"
          }
        },
        {
          breakpoint: 575,
          settings: {
            centerPadding:"80px"
          }
        }

      ]
    });

});