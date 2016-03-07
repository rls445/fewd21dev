
//define variables in the array
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

// the document ready function waits for all objects on the page to load
// before running any js
$(document).ready(function() {

// The For statement creates a loop through the code and sets the parameters for the 
// following function. The first statement sets i to 0 before
// the code starts, the second says the loop should run while i is less than the length
// of the array, and the third says to increase the value of i each time we go though 
// the loop. Basically this makes the array dynamic so the js wil work regarless of how
// many options are listed in the array. 

  for(i=0;i<cities.length;i++) {

// This function refers to the city-type id in the HTML, tells it to add the option 
// value tag, set it to equal the name of the variable the user has selected from the array,
// then add the variable name and close the option tag. The first cities[i] variable sets 
// the option value, the second adds the text into to HTML so it shows the city abbreviation
// on the page as the option selected.

    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

// When the city type in the form element changes, fire the following function

  $('form').on('change', '#city-type',function(){

// the city variable will be equal to the value selected from the array of cities

    var city = $('#city-type').val();

// The series of if/if else statements adds the corresponding city class to the body. 
// That class applies the new CSS which contains a background image for that city. 

    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});