window.onclick = function (event) {
	let modal = document.getElementById("myModal")
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
let counter = localStorage.getItem('counter') || 0; // try to get counter from local storage

function getNumberOfClicks() {
	counter++; // increase
	localStorage.setItem('counter', counter); // set counter into local storage
	setCounterIntoText(counter);
	if (counter > 5) {
		displayClearButton("block");
	}
}

function setCounterIntoText(counter) {
	var text = "You have clicked " + counter + " times to related button.";
	document.getElementById('modalText').innerHTML = text;

}

function clearCounter() {
	localStorage.clear('counter', 0);
	counter = 0;
	setCounterIntoText(counter);
	displayClearButton("none");
}

function displayClearButton(display) {
	var x = document.getElementById("clearButton");
	x.style.display = display;

}

function modalEvent(event) {
	var modal = document.getElementById("myModal");
	modal.style.display = event;
}