console.log ("Connected");

var input = prompt ("Are we There Yet?");
var loweredCaseInput = input.toLowerCase();
var finish = (loweredCaseInput.indexOf("yes") && loweredCaseInput.indexOf("yeah"));

// while (loweredCaseInput !== "yes" && loweredCaseInput !== "yeah") {
while (finish < 0) {
	input = prompt ("Are we There Yet?");
	loweredCaseInput = input.toLowerCase();
	finish = loweredCaseInput.indexOf("yes") && loweredCaseInput.indexOf("yeah");
}

alert ("Yay, we finally made it!");