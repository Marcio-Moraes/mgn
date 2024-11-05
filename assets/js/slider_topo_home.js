$(document).ready(function(){
    $(".slider_topo_home").owlCarousel(
        {
            loop:true,
            autoplay: true,
            margin:0,
            nav:true,
            dots:true,
            dotsEach: false,
            items:5,
            autoplayTimeout:30000,
            autoplayHoverPause:false,
            // animateOut: 'fadeOut',
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        }
    );
  });

  $(document).ready(function(){
    $(".slider_topo_com_bg").owlCarousel(
        {
            loop:true,
            autoplay: true,
            margin:0,
            nav:true,
            dots:false,
            dotsEach: false,
            items:5,
            autoplayTimeout:30000,
            autoplayHoverPause:false,
            // animateOut: 'fadeOut',
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        }
    );
  });
  