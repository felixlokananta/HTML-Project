console.log ("Connected");

var input = prompt ("What would you like to do?");
var loweredCaseInput = input.toLowerCase();
var todo = [];



while (loweredCaseInput !== "quit") {
	
	if (loweredCaseInput === "list") 
		list_todos();
	else if (loweredCaseInput === "new") 
		add_todos();
	else if (loweredCaseInput === "delete") 
		delete_todos();

	input = prompt ("What would you like to do?");
	loweredCaseInput = input.toLowerCase();
}

console.log("okay you quit the app!!"); 

function print_todo (element, index, array) {
	console.log("["+ index + "]" + ": " + element);
}

function list_todos() {
	// console.log(todo);
	console.log ("***********");
	todo.forEach(print_todo);
	console.log ("***********");
}

function add_todos() {
	var todoInput = prompt ("Enter a new todo");
	todo.push(todoInput);
	console.log("Todo added");
}

function delete_todos() {
	var indexToBeDeleted = prompt ("Enter index to be deleted");
	todo.splice(indexToBeDeleted, 1);
	console.log("todo deleted");
}