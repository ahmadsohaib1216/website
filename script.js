jQuery(document).ready(function(){
    // hiding experience content
    jQuery("#experience ul").hide();
    jQuery("#experience h4").click(function(){
    jQuery(this).next("ul").slideToggle();    
    });
    jQuery("#experience h4").addClass(".responsibilities");
    // finish of experience content
    
    //scrolling
//    jQuery(function(){
//      jQuery('a[href^="#"]').click(function(e){
//            var target = jQuery(this).attr('href');
//            var strip= target.slice(1);
//            var anchor= jQuery("a[id='" + strip + "']");
//            e.preventDefault();
//            $('html,body').animate({
//              scrollTop: anchor.offset().top;  
//            },2000);
//                    
//                                 
//                                 
//    });
//        
//        
//           
//    });
    //scroll close
    
    
    
    
});// final close