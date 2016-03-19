jQuery(document).ready(function(){
    console.log("Ready!");

	$('.hamburger').on('click', function( event ){
	     event.preventDefault();
	     $('nav').slideToggle();
	});
});

// if this collapsed and I expand, the menu is 
// gone alltogether. How do I get it to show again
// at a bigger screen size?