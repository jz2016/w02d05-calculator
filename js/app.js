let buttonsPressed = [];

const display = document.querySelector("#answer");

function displayButtonPressed(num) {
	display.innerHTML += num;
	buttonsPressed.push(num)
}

function clearScreen(){
	$(display).empty()
}

function calculate(){
	if((eval(display.innterHTML)) % Math.floor(eval(display.innerHTML)) !== 0){
	const computeValueWithDecimal = eval(display.innerHTML).toFixed(2);
	display.innerHTML = computeValueWithDecimal;
	buttonsPressed = [];
	} else {
		const computeValue = eval(display.innerHTML).toFixed(0);
		display.innerHTML = computeValue;
		buttonsPressed = [];
	}
}

// I was not able to figure out how to adjust the calculated output to have
// no decimal places if no decimal was present in the equation in the 
// screen. My goal was to have the output value have 2 decimal places
// if a decimal was present, but no decimals in the outupt value if
// there was no decimal present. I tried to write an if statement in
// my calculate function, but had no luck in getting those conditions to 
// stick. Right now the output value will always contain two decimal places,
// even if the value is a whole number.

// The code below was what I oringally had active in the code, but 
// any equations with decimals was displaying an output where there was
// no limit to the right side of the decimal's place.
 
//  function calculate(){
//  	 const computeValue = eval(display.innerHTML);
// 		display.innerHTML = computeValue;
// 		buttonsPressed = [];
// }


$("#1").on("click", function() {displayButtonPressed(1); });
$("#2").on("click", function() {displayButtonPressed(2); });
$("#3").on("click", function() {displayButtonPressed(3); });
$("#4").on("click", function() {displayButtonPressed(4); });
$("#5").on("click", function() {displayButtonPressed(5); });
$("#6").on("click", function() {displayButtonPressed(6); });
$("#7").on("click", function() {displayButtonPressed(7); });
$("#8").on("click", function() {displayButtonPressed(8); });
$("#9").on("click", function() {displayButtonPressed(9); });
$("#0").on("click", function() {displayButtonPressed(0); });
$("#decimal").on("click", function() {displayButtonPressed("."); });

$("#add").on("click", function() {displayButtonPressed("+"); });
$("#subtract").on("click", function() {displayButtonPressed("-"); });
$("#multiply").on("click", function() {displayButtonPressed("*"); });
$("#divide").on("click", function() {displayButtonPressed("/"); });

$("#equals").on("click", function() {calculate() });

$("#clear").on("click", clearScreen)







