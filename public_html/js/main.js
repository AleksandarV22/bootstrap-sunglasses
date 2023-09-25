$(document).ready(function(){
    //ANIMATION
    function animation(){
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function(){

            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if(position < windowHeight + scroll - 100){
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }

    $(window).scroll(function(){
        animation();
    });
    animation();


    //Counter up

    if($('.counter').length >= 0){
        $('.counter').counterUp({
            time:2000
        });
    }

    //Product slider
    if($('.product-slider').length >= 0){
        $('.product-slider').owlCarousel({
            autoplay:true,
            responsive:{
                0:{
                    items:1,
                    slideBy: 1
                },
                550:{
                    items: 2,
                    margin:30,
                    slideBy: 2
                },
                850:{
                    items: 3,
                    margin: 30,
                    slideBy: 3
                },
                1200:{
                    items: 4,
                    margin: 40,
                    slideBy: 4
                }
            }
        });
    }
    

});