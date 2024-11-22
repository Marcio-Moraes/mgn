$(document).ready(function(){
    $(".slider_topo_home").owlCarousel(
        {
            loop:false,
            autoplay: false,
            margin:0,
            nav:false,
            dots:false,
            dotsEach: false,
            items:1,
            autoplayHoverPause:true,
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
            loop:false,
            autoplay: false,
            margin:0,
            nav:false,
            dots:false,
            dotsEach: false,
            items:1,
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
  