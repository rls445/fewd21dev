/*  
On click white button set color white
on click grey button set colors grey

function to make colors white

	change background
	change text colors


function to make colors grey

	change background
	change text colors

*/
document.getElementById('whiteButton').onclick = switchToWhite;

document.getElementById('grayButton').onclick = switchToGray;



function switchToWhite(){
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
}

function switchToGray(){
	document.body.style.backgroundColor = "gray";
	document.body.style.color = "white";
}