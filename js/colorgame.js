console.log("connected!!");

var colorSum = 6;
var	squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var reset = document.querySelector("#reset");
var result = document.querySelector("#result");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var colors = generateColors(colorSum);
var pickedColor = pickColor();

initialColor();


//List of Event Listener
for (var i = squares.length - 1; i >= 0; i--) {
	//add event listener to square
	squares[i].addEventListener("click", function () {
		// body... 
		//Grab the color and compare it to picked color
		if (this.style.backgroundColor === pickedColor) {
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor = pickedColor;
			}
			result.textContent = "Correct!!";
			h1.style.backgroundColor = pickedColor;
			reset.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			result.textContent = "Try Again";
		}
	});
}

easyBtn.addEventListener("click", function () {
	/* body... */
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colorSum = 3;
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.display = "none";
	}
	resetGame();
})

hardBtn.addEventListener("click", function () {
	/* body... */
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colorSum = 6;
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.display = "block";
	}
	resetGame();
})

reset.addEventListener("click", resetGame);

//List of fucntion
function resetGame () {
	// body... 
	colors = generateColors(colorSum);
	pickedColor = pickColor();
	result.textContent = "";
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	initialColor();	
}

function initialColor () {
	// body... 
	for (var i = squares.length - 1; i >= 0; i--) {
		//add initial color to square
		squares[i].style.backgroundColor = colors[i];
	}
	colorDisplay.textContent = pickedColor;
}

function pickColor () {
	// body... 
	var randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

function randomRGB () {
	// body... 
	var randomNum = Math.floor(Math.random() * 256);
	return randomNum;
}

function generateColors (num) {
	// body... 
	// make an array
	var arr = [];

	for (var i = 0; i < num; i++) {
		var temp = "rgb("+randomRGB()+", "+randomRGB()+", "+randomRGB()+")";
		arr.push(temp);
	}
	return arr;
}