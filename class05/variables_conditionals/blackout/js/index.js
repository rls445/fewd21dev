var lights = "on";

function switchLights(){
	if (lights == "on"){
		lights = "off";
		//if lights are on, then set it to off
		$('body').addClass('dark')
	} else{
		// if lights are not on, set it to on
		lights ="on";
		$('body').removeClass('dark')
	}

}

$(document).ready(function(){
    console.log( "READY!" );
    $("#light_switch").click(switchLights);
});