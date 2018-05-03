console.log("connected");

var button_object = document.querySelector('button');
var body = document.querySelector('body');

/*button_object.addEventListener("click", function(){
	if (body.style.background === 'green')
		body.style.background = "white";
	else
		body.style.background = "green";
});
*/
button_object.addEventListener("click", function(){
	body.classList.toggle('green');
});