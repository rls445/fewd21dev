$(document).ready(function(){
	console.log("THIS IS WORKING");

   var $myGroup = $('#myGroup');
    $myGroup.on('show','.collapse', function() {
        $myGroup.find('.collapse.in').collapse('hide');
    });
});