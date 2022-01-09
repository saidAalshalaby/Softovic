$(document).ready(function()
{

$('i.icon').click(function(){
    $('.nav-list').slideToggle()
});

// when scrolling , make steacky navbar 
$(Window).scroll(function(){
    var sc=$(this).scrollTop();
    if(sc>100)
    {
        $('header').addClass('sticky');
    }

    else
    {
        $('header').removeClass('sticky');
    }
    if(sc>1530)
    {
        $('.timer').countTo();
        $(Window).off('scroll');
    }
    if ( sc > 500) { // Fade The Scroll Top Btn
            
        $('.scrollTop').fadeIn();
        
    } else {
        
        $('.scrollTop').fadeOut();
        
    }
});

// portfolio buttons change
$('.buttons button').click(function(){
    $(this).addClass('active-btn').siblings().removeClass('active-btn');
    var filter=$(this).attr('id');
    if(filter=='all')
    {
        $('.images >div').fadeIn();
    }
    else{
        $('.images >div').fadeOut();
        $('.images').contents().filter('.'+filter).fadeIn();
    }

    
})

    // owl carousel >> Team Section
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
  
    
    // Choose Panel 
    $('.c_panel li').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        
        var p = $(this).data('role');
        $('.content > div ').hide();
        $('.content').contents().filter('#' + p).fadeIn();
        
    });
    
    // popup video in choose section
    $('.pop').magnificPopup({
        type: 'iframe',
        autoplay:'true'
    });
    
    // slick slider on pleasure section
    $('.slick').slick({
        nextArrow : false,
        prevArrow : false
    });
    
    
    // Scroll to Top
    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });
    
    // smooth Scroll 
    $('.list a').click(function(){
        
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 80
        });
        
    });
    
   
});

