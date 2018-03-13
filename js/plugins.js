/*global $, JQuery , alert , console*/

$(function () {
'use strict';

//adjust header height

var myHeader =$('.header'),
     mySlider = $('.bxslider'),
    myTesti = $('.testimonials');

myHeader.height($(window).height());

$(window).resize(function(){

myHeader.height($(window).height());

});

// active nav bar links

$('.navbar .nav li a').click(function(){

$(this).parent().addClass('active').siblings().removeClass('active');

});

// adjust bxslider to center
        // mySlider.each(function () {

        //     $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

        // });

// trigger my slider 
  mySlider.bxSlider({

    pager : false

  });

  //smooth scroll for section

  $(".navbar .nav li a").click(function(){

    $('html , body').animate({

        scrollTop: $('#'+ $(this).data('value')).offset().top 
    },1000)
  });

//our auto slider code

(function autoSlider () {

    $('.slider .active').each(function () {

    if ( !$(this).is (":last-child") ) {

            $(this).delay(2000).fadeOut( 1000, function () {
            $(this).removeClass('active').next().addClass('active').fadeIn(1000);
            autoSlider () ;
        });
    }
    else {

            $(this).delay(2000).fadeOut( 1000, function () {

            $(this).removeClass('active');
            $('.slider div').eq(0).addClass('active').fadeIn(1000);
            autoSlider () ;

             });
    }   
    });
}());

// trigger mixIt

    $('#Container').mixItUp();
    
    //adjust shuffle links

    $('.shuffle li').click(function(){

        $(this).addClass('selected').siblings().removeClass('selected');

    });

    // trigger nicescroll
    $("html").niceScroll({
          cursorcolor: "#424242",
          cursorwidth: "10px"

    });

        var scrollButton = $('#scroll-top');
    
    $(window).scroll(function(){
        
        //console.log($(this).scrollTop());
        
        if ($(this).scrollTop() >=700){
            scrollButton.show();
        }
        else{
          scrollButton.hide();   
        }
        
        // __________________________________________ here my code wat to edit without work
        $('section').each(function() {

            if ( $(window).scrollTop() > $(this).offset().top ) {


            var sectionID = $(this).attr('id');

            console.log($('.navbar li a[data-value="'+ sectionID +'"]'));
             $('.navbar  a').removeClass('active');

            $('.navbar li a[data-value="'+ sectionID +'"]').addClass('active'); 

    
            }   
        });
        
    });
    
    scrollButton.click(function(){
        
        $('body, html').animate({scrollTop:0}, 600)
    });



});

        
    
