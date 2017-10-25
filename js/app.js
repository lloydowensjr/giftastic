



	// start with an array of "topics"
	var mood = ["Black Excelence", "Jazz", "Hip Hop", "Soul Music", "Black Girl Magic", "Black Boy Joy", "Woke", "Black Love", "Shimmy", "Melanin", "Bey-Hive"]
	//console.log(mood);
	

	// display gifs

	function showGifs (){

		// our AJAX call
		var more = $(this).attr("data-name");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + more + "&api_key=nWlYdIj7aYQqIEfaj7GjKpJ39Le309SB&limit=10";
			//console.log(queryURL);

		$.ajax({
			url : queryURL, 
			method: "GET"
		}).done(function(response){
		var results = response.data;	
		for(var i = 0; i < results.length; i++){
		// create <div> to display gifs and rating
		var gifMe = $("<div class='more'>");
		// must grab and display rating
		var rating = results[i].rating;

		var plus = $("<p>").text("Rating: " + rating);

		gifMe.append(plus);
		// use the "static" link to display static gifs
		var gifURL = results[i].images.fixed_height_still.url;

		var gifs = $("<img>").attr("src", gifURL);

		gifMe.append(gifs);	

		gifMe.prepend(plus);
        gifMe.prepend(gifs);
        $("#gifme").prepend(gifMe);

	}

		

		});	

	}

	
	
	showButton();


	// using "topics" create buttons
	function showButton() {

		$("#gifsgohere").empty();

		// loop through array
		for (var i = 0; i < mood.length; i++) {

		// buttons should dynamically popluate page
		var p = $("<button>");
		p.addClass("more");
        p.attr("data-name", mood[i]);
		p.text(mood[i]);
        $("#gifsgohere").append(p);
		}
	}

	// upon click of submit button
	$("#gif-add").on("click", function(event) {
    event.preventDefault();
	// capture "topics"
	// create form field "input"
	var topics = $("#gif-in").val().trim();
	mood.push(topics);
	showButton();
	});

	$(document).on("click", ".more", showGifs);

	showButton();
	//console.log(showButton);

	
	
	// an intial click of gif should animate gif
	// once clicked second time gif should go back to static state
	
	
	

