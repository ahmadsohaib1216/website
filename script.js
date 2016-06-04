    jQuery(document).ready(function(){
        // variables for sliding
        var windowHeight = jQuery(window).height();    
          var windowScrollPosTop = jQuery(window).scrollTop();   
          var windowScrollPosBottom = windowHeight+windowScrollPosTop;
        
        
        
        // hiding experience content
        jQuery("#experience ul").hide();
        jQuery("#experience h4").click(function(){
        jQuery(this).next("ul").slideToggle();    
        });
        jQuery("#experience h4").addClass(".responsibilities");
        // finish of experience content

    

        //sliding effec     //jQuery(".photo1").css("opacity,0");
        jQuery.fn.revealOnScroll=function(){
        return this.each(function(){
            var objectOffSet = jQuery(this).offset();
        var objectOffSetTop = objectOffSet.top;

            if(!jQuery(this).hasClass("animation-done")){
                if(windowScrollPosBottom > objectOffSetTop){
                jQuery(this).animate({"opacity":1},3000).addClass("animation-done");
            }

            }
            
        });    
            
            
        }// end of function
        
        jQuery(window).scroll(function(){

          windowHeight = jQuery(window).height();    
          windowScrollPosTop = jQuery(window).scrollTop();   
          windowScrollPosBottom = windowHeight+windowScrollPosTop;
            
            jQuery(".exp img").revealOnScroll();
            jQuery("#imagecircle").revealOnScroll();
        

        });










    });// final close