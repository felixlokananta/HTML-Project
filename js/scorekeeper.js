console.log("CONNECTED!!");

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var maxRound = document.querySelector("#maxRound");

var p1value = 0;
var p2value = 0;
var valueMax = 5;
var finish = false;

p1Button.addEventListener("click", updateScore);
p2Button.addEventListener("click", updateScore);
resetButton.addEventListener("click", resetScore);
maxRound.addEventListener("input", updateValueMax);

function updateValueMax() {
	var pText = document.querySelector("p");

	valueMax = parseInt(this.value);

	pText.textContent = "Playing to : " + valueMax;

	resetScore();
}

function addOneToValue (playerValue) {
	
	if (playerValue < valueMax) {
		playerValue++;
		if (playerValue === valueMax)
			finish = true;
	}	

	return playerValue;
}

function resetScore(){
	var spanP1Text = document.querySelector("#spanP1");
	var spanP2Text = document.querySelector("#spanP2");
	p1value = 0;
	p2value = 0;
	finish = false;
	spanP1Text.textContent = 0;
	spanP2Text.textContent = 0;
	spanP1Text.classList.remove("finish");
	spanP2Text.classList.remove("finish");
	

}

function updateScore () {
	// console.log(valueMax);		
	if (finish === false) {
		console.log("masuk ke dlm function");
		var spanP1Text = document.querySelector("#spanP1");
		var spanP2Text = document.querySelector("#spanP2");

		// console.log(this.id);
		if (this.id === 'p1')	
			p1value = addOneToValue(p1value);
		else if (this.id === 'p2')
			p2value = addOneToValue(p2value);

		if (p1value === valueMax)
			// spanP1Text.classList.toggle("finish");
			spanP1Text.classList.add("finish");
		if (p2value === valueMax)
			spanP2Text.classList.add("finish");
		
		spanP1Text.textContent = p1value;
		spanP2Text.textContent = p2value;
	}
	
}

