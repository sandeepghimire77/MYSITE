/* Show and hide the menu */

$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        /* this is done so that if window scroll is below 80 , the navbar is invisible ...else it is visible if user scrools down if its more than
        80 */

        
        if($(window).scrollTop() < 80 ) {
            
            $('.navbar').css ({
               'margin-top': '-100px',
                'opacity': '0'
                
            });
            
            $('.navbar-inverse').css({
                'background-color': 'rgba(59, 59 , 59, 0)'
                
            });
            
        } else {
            
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-inverse').css({
                'background-color': 'rgba(59, 59 , 59, 0.7)',
                'border-color': '#444'
                
            });
            
            $('.navbar-brand img').css({
               'height': '33px',
                'padding-top': '0px'
                
            });
            
            $('.navbar-nav > li > a ').css({
                'padding-top': '15px'

                
                
            });
            
            
        }
       
        
    });
    
    
});

//for add smooth scrolling
$(document).ready(function() {
    
    'use strict';
    /* we add smooth scrooling to the nav-item  list */
   
    
    $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
    
});

/* active menu item on click */
$(document).ready(function() {
    
    'use strict';
    /* we need to access navbar-nav li a   and using click fn we do the code */
    
    
    $('.navbar-nav li a').click(function(){
        
        'use strict';
        
        $('.navbar-nav li a').parent().removeClass("active");
        
        $(this).parent().addClass("active");
    
    });
});

// highlight menu item on scroll
$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll( function() {
        
        'use strict';
        /* applying each funtion on the section part */
        
        $("section").each(function()  {
            
            'use strict';
            
            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
             
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
           
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                
            }
            
            
        });
    
    
    });
    
    
});

// add auto padding to header 

$(document).ready(function() {
    
    'use strict';
    
    setInterval( function() {
        
        'use strict';
        
        var windowHeight = $(window).height();
        
        var containerHeight = $(".header-container").height();
        
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
            
            'padding-top': Math.round( padTop / 2) + 'px',
            'padding-bottom': Math.round( padTop / 2) + 'px'
            
        });
        
        
    }, 10)
    
    
});

// Add bx slider to screens
$(document).ready(function() {
    
    $('.bxslider').bxSlider({
        
        slideWidth: 292.5,
        auto: true,
        minSlides: 1, 
        maxSlides: 3, 
        slideMargin: 50
    });
    
});


// Add counter
$(document).ready(function() {
    
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
});

// Add animation/ Initialize Woo
$(document).ready(function() {
    
    'use strict';
   
    new WOW().init();
    
});






























