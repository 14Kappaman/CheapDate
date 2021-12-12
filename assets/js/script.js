// $(document).ready(function () {

	// search field
	$('#success').on('click', function(event) {
		event.preventDefault();
		// the below function needs to notify user they must select a city and range. 
		function cheapDateSearch(){
			$('.input').each(function() {
				var city =$('#city').val();
				var distance = $('#distance').val();				
				localStorage.setItem(city, distance);
			});
		}
		// execute function on click
		cheapDateSearch();

	});
	
	// function 
	// var url = new URL("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Atlanta&price=1&radius=");
	
	// url.searchParams.append('location', city);
	// url.searchParams.append('radius', distance);

var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=atlanta";
var apiKey = "ylTgS_8g2vr6yKMeND8qD6hLtZ5IcznWaYieqPh1NwhXb1WkHQzBwRzcBxmmpKxtJV48JHKfBQrme82TGo--56mAy_HLnpg5tWSE_SC2hRYBgp5SBwRHq63EBqGyYXYx";

	$.ajax({
		
		url: queryURL,
		method: "GET",
		headers: {
			"accept": "application/json",
			"x-requested-with": "xmlhttprequest",
			"Access-Control-Allow-Origin":"*",
			"Authorization": `Bearer ${apiKey}`
		},
		dataType: "json",
		data: {term: 'restaurants', radius:5000, price: 1},
		success: function(result){
			console.log(result.businesses);
			var yelpBusinesses = result.businesses;
			var index = Math.floor(Math.random() * yelpBusinesses.length)
			console.log(index);
			var index2 = Math.floor(Math.random() * yelpBusinesses.length)
			var index3 = Math.floor(Math.random() * yelpBusinesses.length)
			// for (var i = 0; i < yelpBusinesses.length; i++) {
			// 	console.log(yelpBusinesses[i]);
			// }

			// Adds Restaurant Name
			$("#randomRestaurant").text(result.businesses[index].name)
			// Adds Restaurant Price Rating
			$("#randomRestaurantPrice").text(result.businesses[index].price)
			// Adds Restaurant photo
			var img= $('<img>');
			img.attr('src', result.businesses[index].image_url)
			img.appendTo('#restaurantPhoto')
			
			// Adds Restaurant Name
			$("#randomRestaurant2").text(result.businesses[index2].name)
			// Adds Restaurant Price Rating
			$("#randomRestaurantPrice2").text(result.businesses[index2].price)
			// Adds Restaurant photo
			var img= $('<img>');
			img.attr('src', result.businesses[index2].image_url)
			img.appendTo('#restaurantPhoto2')

			// Adds Restaurant Name
			$("#randomRestaurant3").text(result.businesses[index3].name)
			// Adds Restaurant Price Rating
			$("#randomRestaurantPrice3").text(result.businesses[index3].price)
			// Adds Restaurant photo
			var img= $('<img>');
			img.attr('src', result.businesses[index3].image_url)
			img.appendTo('#restaurantPhoto3')
		},

		
	})
	


// Get Random Restaurant from businesses array using Location, Radius of 5000M and Price rating of 1 $.
// 

// })