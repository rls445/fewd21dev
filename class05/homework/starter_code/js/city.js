//wait for DOM elements to load before running
$(document).ready(function(){
    console.log( "READY!" );

	// Create a function that runs whenever the update button is clicked
    $("#submit-btn").click(function(e){

    	//prevent the submit button from refreshing the page
    	e.preventDefault();

    	////// define variables///////
    	//Create a variable called cityvalue and get the value of the #city-type input
        var cityvalue = $("#city-type").val();

        //Correct for capitalization
        cityvalue = cityvalue.toLowerCase();

        // BONUS - remove any extra space
        cityvalue = cityvalue.trim();

        // add if statements to define outcome for user inputs

        // if the user enters a variation of New York, change the background to the NYC image

        if (cityvalue == "new york" || cityvalue == "new york city" || cityvalue== "nyc"){
        	console.log("Almost working");
        	$('body').attr('class','nyc');
        }
        // if the user enters a variation of San Francisco change the background to the SF image

        if (cityvalue == "san francisco" || cityvalue == "sf" || cityvalue== "bay area"){
        	$('body').attr('class','sf');
        }
       	// if the user enters a variation of Los Angeles change the background to the LA image
        if (cityvalue == "los angeles" || cityvalue == "la" || cityvalue== "lax"){
        	$('body').attr('class','la');
        }
        // if the user enters a variation of Austin, change the background to the Austin image
        if (cityvalue == "austin" || cityvalue == "atx"){
        	$('body').attr('class','austin');
        }
        // if the user enters a variation of Sydney, change the background to the Sydney image
        if (cityvalue == "sydney" || cityvalue == "syd"){
        	$('body').attr('class','sydney');
        }

	});

    $("#submit-btn").click(clearInput);

        function clearInput(){
        	console.log("Ready to clear")
        	$("#city-type").val('');
        }

});
