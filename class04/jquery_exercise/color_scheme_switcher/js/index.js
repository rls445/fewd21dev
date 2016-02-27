// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }




// A $( document ).ready() block. 
//this checks to see if everything in your browser is loaded
//and ready to show js
// you can put this multiple times so you can 
// troubleshoot bugs in code. where is it going wrong?


jQuery( document ).ready(function() {
    console.log( "ready!" );


// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;
// in jquery:

jQuery('#grayButton').click(switchGray);
jQuery('#whiteButton').click(switchWhite);

function switchGray(){
	jQuery('body').css("background-color", "gray");
	console.log("I'm gray!");
}


function switchWhite(){
	jQuery('body').css("background-color", "white");
	jQuery('body').css("color", "black");
	console.log("I'm white!");
}

});





