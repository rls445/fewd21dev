
// //this says what triggers the function

// document.getElementById('stopButton').onclick = illuminateRed;
// document.getElementById('slowButton').onclick = illuminateOrange;
// document.getElementById('goButton').onclick = illuminateGreen;


// //the functions define what happens
// function illuminateRed() {
// //this is calling a function within a function, different from nesting a function
// //order or functions don't matter, order of operations within them does
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// function illuminateOrange() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "orange";
// }

// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }



// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// }


jQuery( document ).ready(function() {
    console.log( "ready!" );


jQuery('#stopButton').click(illuminateRed);
jQuery('#slowButton').click(illuminateOrange);
jQuery('#goButton').click(illuminateGreen);

function illuminateRed(){
	clearall ();
	jQuery('#stopLight').css("backgroundColor", "red");
	console.log("I'm red!");
}

function illuminateOrange(){
	clearall();
	jQuery('#slowLight').css("backgroundColor", "orange");
	console.log("I'm orange!");
}

function illuminateGreen(){
	clearall();
	jQuery('#goLight').css("backgroundColor", "green");
	console.log("I'm green!");
}

function clearall(){
	jQuery('.bulb').css("backgroundColor", "black");
}


});