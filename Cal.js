var operation = false;
var equality = false;
var LHS = false;
var RHS = false;
var storedInput = [];
var lastOperation = []

function clickHandler1() {
	if (operation == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button1.value;
			lastOperation += button1.value;
			RHS = true;
			operation = false;
	} else if (equality == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button1.value;
			storedInput = [];
			equality = false;
	} else {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value += button1.value;
			LHS = true;
	}
}
function clickHandler2() {
	if (operation == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button2.value;
			lastOperation += button2.value;
			RHS = true;
			operation = false;
	} else if (equality == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button2.value;
			storedInput = [];
			equality = false;
	} else {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value += button2.value;
			LHS = true; 
	}
}
function clickHandler3() {
	if (operation == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button3.value;
			lastOperation += button3.value;
			RHS = true;
			operation = false;
	} else if (equality == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button3.value;
			storedInput = [];
			equality = false;
	} else {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value += button3.value;
			LHS = true;
	}
}
function clickHandler4() {
	if (operation == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button4.value;
			lastOperation += button4.value;
			operation = false;
			RHS = true;
	} else if (equality == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button4.value;
			storedInput = [];
			equality = false;
	} else {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value += button4.value;
			LHS = true;
	}
}
function clickHandler5() {
	if (operation == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button5.value;
			lastOperation += button5.value;
			operation = false;
			RHS = true;
	} else if (equality == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button5.value;
			storedInput = [];
			equality = false;
	} else {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value += button5.value;
			LHS = true;
	}
}
function clickHandler6() {
	if (operation == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button6.value;
			lastOperation += button6.value;
			RHS = true;
			operation = false;
	} else if (equality == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button6.value;
			storedInput = [];
			equality = false;
	} else {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value += button6.value;
			LHS = true;
	}
}
function clickHandler7() {
	if (operation == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button7.value;
			lastOperation += button7.value;
			RHS = true;
			operation = false;
	} else if (equality == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button7.value;
			storedInput = [];
			equality = false;
	} else {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value += button7.value;
			LHS = true;
	}
}
function clickHandler8() {
	if (operation == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button8.value;
			lastOperation += button8.value;
			RHS = true;
			operation = false;
	} else if (equality == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button8.value;
			storedInput = [];
			equality = false;
	} else {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value += button8.value;
			LHS = true;
	}
}
function clickHandler9() {
	if (operation == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button9.value;
			lastOperation += button9.value;
			RHS = true;
			operation = false;
	} else if (equality == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button9.value;
			storedInput = [];
			equality = false;
	} else {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value += button9.value;
			LHS = true;
	}
}
function clickHandler0() {
	if (operation == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button0.value;
			lastOperation += button0.value;
			RHS = true;
			operation = false;
	} else if (equality == true) {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value = [];
			displaySpan.value += button0.value;
			storedInput = [];
			equality = false;
	} else {
		var displaySpan = document.getElementById('display'); 
			displaySpan.value += button0.value;
			LHS = true;
	}
}

function clickAdd() {
	if (equality == true) {
		operation = true;
		storedInput += "+";
		equality = false;
		LHS = true;
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	} else if (operation == true && LHS == true) {
		var y = [];
		for (var i = 0; i <= storedInput.length - 2; i++) {
			y += storedInput[i];
		}
		storedInput = y
		storedInput += "+";
		LHS = true;
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	} else if (LHS == true) {
		operation = true;
		var displaySpan = document.getElementById('display'); 
			storedInput += displaySpan.value;
			displaySpan.value = eval(storedInput);
			storedInput = displaySpan.value;
			storedInput += "+";
			lastOperation += "+";
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	}
}
function clickSub() {
	if (equality == true) {
		operation = true;
		storedInput += "-";
		equality = false;
		LHS = true;
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	} else if (operation == true && LHS == true) {
		var y = [];
		for (var i = 0; i <= storedInput.length - 2; i++) {
			y += storedInput[i];
		}
		storedInput = y
		storedInput += "-";
		LHS = true;
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	} else if (LHS == true) {
		operation = true;
		var displaySpan = document.getElementById('display'); 
			storedInput += displaySpan.value;
			displaySpan.value = eval(storedInput);
			storedInput = displaySpan.value;
			storedInput += "-";
			lastOperation += "-";
		//ar outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	} else {
			storedInput = "-";
			//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	}
}
function clickMul() {
	if (equality == true) {
		operation = true;
		storedInput += "*";
		equality = false;
		LHS = true;
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	} else if (operation == true && LHS == true) {
		var y = [];
		for (var i = 0; i <= storedInput.length - 2; i++) {
			y += storedInput[i];
		}
		storedInput = y
		storedInput += "*";
		LHS = true;
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	} else if (LHS == true) {
		operation = true;
		//var displaySpan = document.getElementById('display'); 
			storedInput += displaySpan.value;
			displaySpan.value = eval(storedInput);
			storedInput = displaySpan.value;
			storedInput += "*";
			lastOperation += "*";
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	}
}
function clickDiv() {
	if (equality == true) {
		operation = true;
		storedInput += "/";
		equality = false;
		LHS = true;
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	} else if (operation == true && LHS == true) {
		var y = [];
		for (var i = 0; i <= storedInput.length - 2; i++) {
			y += storedInput[i];
		}
		storedInput = y
		storedInput += "/";
		LHS = true;
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	} else if (LHS == true) {
		operation = true;
		var displaySpan = document.getElementById('display'); 
			storedInput += displaySpan.value;
			displaySpan.value = eval(storedInput);
			storedInput = displaySpan.value;
			storedInput += "/";
			lastOperation += "/";
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
	}
}
function clickClear() {
	var displaySpan = document.getElementById('display'); 
		displaySpan.value = [];
		storedInput = []; 
		operation = false;
		equality = false;
		LHS = false;
		RHS = false;
}
function clickEqual() {
	if (LHS == true && RHS == true) {
		equality = true;
		var displaySpan = document.getElementById('display');
			storedInput += displaySpan.value 
			displaySpan.value = eval(storedInput);
			storedInput = displaySpan.value
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
		LHS = false;
		RHS = false;
	} else if (equality == true) {
		storedInput += lastOperation
		//var outputSpan = document.getElementById('output'); outputSpan.innerHTML = storedInput;
		var displaySpan = document.getElementById('display');
			displaySpan.value = eval(storedInput);
			storedInput = displaySpan.value;
	}
}

var button1 = document.getElementById('button1');
	button1.addEventListener('click', clickHandler1);
var button2 = document.getElementById('button2');
	button2.addEventListener('click', clickHandler2);
var button3 = document.getElementById('button3');
	button3.addEventListener('click', clickHandler3);
var button4 = document.getElementById('button4');
	button4.addEventListener('click', clickHandler4);
var button5 = document.getElementById('button5');
	button5.addEventListener('click', clickHandler5);
var button6 = document.getElementById('button6');
	button6.addEventListener('click', clickHandler6);
var button7 = document.getElementById('button7');
	button7.addEventListener('click', clickHandler7);
var button8 = document.getElementById('button8');
	button8.addEventListener('click', clickHandler8);
var button9 = document.getElementById('button9');
	button9.addEventListener('click', clickHandler9);
var button0 = document.getElementById('button0');
	button0.addEventListener('click', clickHandler0);

var buttonAdd = document.getElementById('addButton').addEventListener('click', clickAdd);
var buttonSub = document.getElementById('subtractButton').addEventListener('click', clickSub);
var buttonMul = document.getElementById('multiplyButton').addEventListener('click', clickMul);
var buttonDiv = document.getElementById('divideButton').addEventListener('click', clickDiv);
var buttonClear = document.getElementById('clearButton').addEventListener('click', clickClear);
var buttonEqual = document.getElementById('equalsButton').addEventListener('click', clickEqual);