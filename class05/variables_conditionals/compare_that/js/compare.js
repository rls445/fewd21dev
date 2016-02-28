var comparison;

function compare(){
	var a = $('#a').val();
	//grab value of thing with id of a
	var b =$('#b').val();
	if (a < b){
		comparison = '<';
	}
	else if (a > b){
		comparison = '>';
	}
	else if (a === b){
		comparison = '===';
	}
	else {
		comparison = "N/A";
	}

	console.log(comparison);

	$('#comparison').html(comparison);
}

$(document).ready(function(){
    console.log( "READY!" );
    $('#submit').click(compare);


});

//compare value or A with value of B
//show operator in the middle


// NOT WORKINg = NA, and reading digits as string