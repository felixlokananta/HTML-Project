console.log ("Connected");

var movies_collection = [];

var movie = {
	title: "Moana",
	rating: 4.5,
	have_watched: true
};

movies_collection.push(movie);

var movie = {
	title: "The Amazing Spiderman",
	rating: 4.0,
	have_watched: false
};

movies_collection.push(movie);

var movie = {
	title: "Frozen",
	rating: 5.0,
	have_watched: false
};

movies_collection.push(movie);

var movie = {
	title: "Justice League",
	rating: 3.5,
	have_watched: true
};

movies_collection.push(movie);

movies_collection.forEach(print_movies);

console.log(movies_collection);

function print_movies (someObject) {
	if (someObject.have_watched === true)
		console.log('You have watched "'+ someObject.title +'" - '+ someObject.rating +" stars.");
	else
		console.log('You have not seen "'+ someObject.title +'" - '+ someObject.rating +" stars.");
}