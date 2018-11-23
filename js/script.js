'use strict';

// Variables
var output = document.getElementById('converter-output');
output.innerHTML = 'Click the button to convert from celcius to ferenheit.' + '<br><br>' + output.innerHTML; 

var button = document.getElementById('converter-button');
var degree;
var ferenheit;

// Function on button click
button.addEventListener('click', function(){

	// Prompt window
	degree = window.prompt('Type temperature degree in celcius:');

	// Validate input then evalute if needed 
	if(isNaN(degree)) {
		output.innerHTML = 'You must type a number.<br><br>' + output.innerHTML;
	} else if(degree == null) {
		output.innerHTML = 'Canceled.<br><br>' + output.innerHTML;
	} else {
		ferenheit = degree * 1.8 + 32;
		output.innerHTML = degree + ' degree in celcius are ' + ferenheit + ' in ferenheit. <br><br>' + output.innerHTML; 
	}

}); 

