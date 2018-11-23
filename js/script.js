'use strict';

// Variables
var outputC = document.getElementById('converterC-output');
outputC.innerHTML = 'Click the button to convert from celcius to ferenheit.' + '<br><br>' + outputC.innerHTML; 

var outputF = document.getElementById('converterF-output');
outputF.innerHTML = 'Click the button to convert from ferenheit to celcius.' + '<br><br>' + outputF.innerHTML; 

var buttonC = document.getElementById('converterC-button');
var buttonF = document.getElementById('converterF-button');

var degree;
var ferenheit;

// Messages 
var messageOne = 'In this temperature you can wear shorts.<br><br>';
var messageTwo = 'In this temperature you should wear jacket.<br><br>';
var messageThree = 'In this temperature you should wear jumper and scarf.<br><br>';
var message;

// Function on button click
buttonC.addEventListener('click', function(){

	// Prompt window
	degree = window.prompt('Type temperature degree in celcius:');

	// Validate input then evalute if needed 
	if(isNaN(degree)) {
		outputC.innerHTML = 'You must type a number.<br><br>' + outputC.innerHTML;
	} else if(degree == null) {
		outputC.innerHTML = 'Canceled.<br><br>' + outputC.innerHTML;
	} else {
		ferenheit = degree * 1.8 + 32;
		outputC.innerHTML = degree + ' degree in celcius are ' + ferenheit + ' in ferenheit. <br><br>' + outputC.innerHTML; 
		// Print message upon input
		if (degree < 8) {
			message = messageThree;
		} else if(degree < 16) {
			message = messageTwo;
		} else {
			message = messageOne;
		}

		outputC.innerHTML = message + outputC.innerHTML;
	}
}); 

	// Function on button click
buttonF.addEventListener('click', function(){

	// Prompt window
	ferenheit = window.prompt('Type temperature degree in ferenheit:');

	// Validate input then evalute if needed 
	if(isNaN(ferenheit)) {
		outputF.innerHTML = 'You must type a number.<br><br>' + outputF.innerHTML;
	} else if(ferenheit == null) {
		outputF.innerHTML = 'Canceled.<br><br>' + outputF.innerHTML;
	} else {
		degree = (ferenheit - 32) * 5/9;
		outputF.innerHTML = ferenheit + ' degree in ferenheit are ' + degree + ' in celcius. <br><br>' + outputF.innerHTML; 
		// Print message upon input
		if (degree < 8) {
			message = messageThree;
		} else if(degree < 16) {
			message = messageTwo;
		} else {
			message = messageOne;
		}

		outputF.innerHTML = message + outputF.innerHTML;
	}
}); 