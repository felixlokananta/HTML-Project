
function print_reverse(input_array) {
	for (var i = input_array.length - 1; i >= 0; i--) {
		console.log (input_array[i]);
	}
}

function is_uniform (input_array){
	for (var i = input_array.length - 1; i >= 0; i--) {
		if (i === input_array.length -1)
			var temp_value = input_array[i];
		else if (temp_value !== input_array[i]) {
			return false;
		}
	}
	return true;
}

function sum(input_array){
	var total = 0;
	input_array.forEach(function(element) {
		total = total + element;
	});
	return total;
}

function is_max(input_array) {
	var max_element = -10000;

	for (var i = input_array.length - 1; i >= 0; i--) {
		if (i === input_array.length-1)
			max_element = input_array[i];
		else if (max_element < input_array[i])
			max_element = input_array[i];
	}

	return max_element;
}