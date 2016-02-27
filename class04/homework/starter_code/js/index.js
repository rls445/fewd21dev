$( document ).ready(function() {
    console.log( "HELLO!" );

});


$("a").click(function(event){
	event.preventDefault();
	console.log("No click!");
});
//this is a nested function

$(".categories").click(function(beLite){
	$(".categories").css("font-weight", "300");
	console.log("I'm lite");
});

// I first wrote the function above this way,
// then figured out I could consolidate? Is it better to wrte things this way?
// $(".categories").click(beLite);

// function beLite(){
// 	$(".categories").css("font-weight", "300")
// 	console.log("I'm lite");
//}

$(".relxr-header nav ul li").click(function(beBold){
	$(".relxr-header nav ul li").css("font-weight", "900");
	console.log("I'm bold");
});
// ^^is there a way for me to have this js apply to one component
//of the nav bar at a time? (vs restyling the whole nav?)

$(".relxr-header .logo").mouseover(function(toYellow){
	$(".relxr-header .logo").css("color", "#f9e42e");
	console.log("I'm yellow now");
});


$(".readmore").click(articleExpand);

function articleExpand(){
	$("p").slideDown("slow");
	console.log("got here");
	$(".readmore").hide();
	console.log("got here 2");
	$(".readless").show();
	console.log("got here 3");	
	$("#show-this-on-click").show();
	console.log("look at the rest of the story showing up!");
}


$(".readless").click(function(backToMore){
	$(".readless").hide();
	$(".readmore").show();
	$("#show-this-on-click").slideUp();
});

//It happens quickly, but it looks like my show/hide always take place
// before the slidup/down. I tried to change the order to see what would
// happen, but couldn't get it to work that way. 


$(".learnmore").click(funThing);

function funThing(){
	$("#learnmoretext").slideDown("slow");
	$(".learnmore").hide();
}


