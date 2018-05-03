console.log('connected');

// check off specific tools by clicking
$("ul").on("click", "li", function (argument) {
	// body...
	$(this).toggleClass("completed");
})

// click on X to delete ToDo
$("ul").on("click", "span", function (argument) {
	// body...
	// $(this).parent().fadeOut().remove();
	$(this).parent().fadeOut(500, function (argument) {
		// body...
		$(this).remove();
	});
	argument.stopPropagation();
})

//Selecting the input type text
$("input[type='text']").keypress(function (argument) {
	// body...
	if(argument.which === 13) { //13 is Enter Key
		// grabbing new todo text from input
		var ToDoText = $(this).val();
		// create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-minus-square'></i> </span>"+ToDoText+"</li>");
		$(this).val('');
	}
})

$(".fa-plus-square").click(function (argument) {
	// body...
	$("input[type='text']").fadeToggle();
})