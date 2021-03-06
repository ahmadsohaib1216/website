jQuery(document).ready(function () {
    // variables for sliding
    setbinding();
    var windowHeight = jQuery(window).height();
    var windowScrollPosTop = jQuery(window).scrollTop();
    var windowScrollPosBottom = windowHeight + windowScrollPosTop;



    // hiding experience content
    jQuery("#experiencelink ul").hide();
    jQuery("#experiencelink h4").click(function () {
        jQuery(this).next("ul").slideToggle();
    });
    jQuery("#experiencelink h4").addClass(".responsibilities");
    // finish of experience content



    //sliding effect     //jQuery(".photo1").css("opacity,0");
    jQuery.fn.revealOnScroll = function () {
            return this.each(function () {
                var objectOffSet = jQuery(this).offset();
                var objectOffSetTop = objectOffSet.top;

                if (!jQuery(this).hasClass("animation-done")) {
                    if (windowScrollPosBottom > objectOffSetTop) {
                        jQuery(this).animate({
                            "opacity": 1
                        }, 2000).addClass("animation-done");
                    }

                }

            });


        } // end of function

    jQuery(window).scroll(function () {
        windowHeight = jQuery(window).height();
        windowScrollPosTop = jQuery(window).scrollTop();
        windowScrollPosBottom = windowHeight + windowScrollPosTop;

        jQuery(".exp img").revealOnScroll();
        jQuery("#imagecircle").revealOnScroll();


    }); //end

    //navigate starts here
    function setbinding() {
        jQuery("nav a").click(function (e) {
            var sectionid = e.currentTarget.id + "link";
            //alert('id of this' +" "+ sectionid);
            jQuery("html body").animate({
                scrollTop: jQuery("#" + sectionid).offset().top

            }, 2000);
            e.preventDefault();
        });
    }
    // navigate ends here


    //header static
    var navOffSet = jQuery("nav").offset().top;
    jQuery("nav").wrap('<div class="place-holder"></div');
    jQuery(".place-holder").height(jQuery("nav").outerHeight());

    jQuery(window).scroll(function () {
        //var scrollPosition = jQuery(window).scrollTop();

        if (windowScrollPosTop >= navOffSet) { //windowScrollPosTop is declared on top
            jQuery("nav").addClass("fixed");
        } else {
            jQuery("nav").removeClass("fixed");
        }
    });
    //header static ends here


    //back to top starts here
    var divOffset = jQuery("#educationlink").offset().top;
    jQuery(".top").click(function(e1){
       jQuery("html,body").animate({
        scrollTop:0   
       },1000);
        e1.preventDefault();
    });
    jQuery(window).scroll(function () {
        //var scrollPosition = jQuery(window).scrollTop();
        
        if(windowScrollPosTop >= divOffset){
          if(!jQuery(".top").is(":visible")){
              jQuery(".top").fadeIn();
              
          }  
        }
        else{
            jQuery(".top").hide();
        } 
            
        
    });

    //back to top ends here



}); // final close