// total will store the running total, starting at 0
var total =0;

// `enter()` reads the user's input, and updates the receipt
function submitMe(e){

    // Set up variables to use
    var newValue;
    var newTotalString;

    // Prevent form submission
    e.preventDefault();

    // Read the user input
    newValue = $("#newEntry").val();

    // Convert to decimal
    newValue = parseFloat(newValue);

    // Convert to currency
    total = total + newValue;
    newTotalString = currencyFormat(total); 
    // ^^ this "total" will be what the currencyFortmat function returns

    newValue = currencyFormat(newValue);

    // Add line item to table
   var newLineString = "<tr><td>&nbsp;</td><td>"+newValue+"</td></tr>";
    $("#entries").append(newLineString);

    // Update the running total

    $("#total").text(newTotalString);

    // Print the updated total with proper currency formatting

    // Clear out the input field, ready for next value
    $("#newEntry").val("");

}

// Use this to convert a number to U.S. currency format
function currencyFormat(numberInput){


    // Convert the number to decimal
    var currency = parseFloat(numberInput);

    // Round to 2 decimal places
    currency = currency.toFixed(2);

    // Add the $ before the number
    currency = "$" +currency.toString();

    // Send back the result
    return currency;

}

$(document).ready(function(){
    $('#entry').submit(submitMe);
    //^^when this form us submitted, fire this function
});


// When the user submits the form, run the `enter` function
