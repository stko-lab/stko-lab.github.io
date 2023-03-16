var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function($) {	

	//Set Default State of each portfolio piece
	$(".paging").show();
	$(".paging a:first").addClass("active");

	//Get size of images, how many there are, then determin the size of the image reel.
	var imageWidth = $(".window").width();
	var imageSum = $(".image_reel img").size();
	var imageReelWidth = imageWidth * imageSum;
	
	//Adjust the image reel to its new size
	$(".image_reel").css({'width' : imageReelWidth});

	//Paging + Slider Function
	rotate = function(){	
	    var triggerID = $active.attr("rel") - 1; //Get number of times to slide
	    var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide
	
	    $(".paging a").removeClass('active'); //Remove all active class
	    $active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)
	    
		$(".desc").stop(true,true).slideUp('slow');
		
		$(".desc").eq( $('.paging a.active').attr("rel") - 1 ).slideDown("slow"); 
		
	    //Slider Animation
	    $(".image_reel").animate({ 
	        left: -image_reelPosition
	    }, 500 ); 
	
		
	}; 

	//Rotation + Timing Event
	rotateSwitch = function(){	
	$(".desc").eq( $('.paging a.active').attr("rel") - 1 ).slideDown("slow");	
	    play = setInterval(function(){ //Set timer - this will repeat itself every 3 seconds
	        $active = $('.paging a.active').next();
	        if ( $active.length === 0) { //If paging reaches the end...
	            $active = $('.paging a:first'); //go back to first
	        }
	        rotate(); //Trigger the paging and slider function
	    }, 10000); //Timer speed in milliseconds (3 seconds)	
	
	};
	
	rotateSwitch(); //Run function on launch

 //On Click
    $(".paging a").click(function() {    
        $active = $(this); //Activate the clicked paging
        //Reset Timer
        clearInterval(play); //Stop the rotation
        rotate(); //Trigger rotation immediately
        rotateSwitch(); // Resume rotation
        return false; //Prevent browser jump to link anchor
    });    

});


}
/*
     FILE ARCHIVED ON 21:04:23 Jan 09, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:50:17 Mar 15, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 58.252
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.059
  RedisCDXSource: 1.045
  esindex: 0.007
  LoadShardBlock: 40.044 (3)
  PetaboxLoader3.datanode: 84.15 (5)
  load_resource: 171.716 (2)
  PetaboxLoader3.resolve: 109.471 (2)
*/