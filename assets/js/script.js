// $(document).ready(function () {
	var timeISO8601 = moment().format();
	console.log(timeISO8601);

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
		
		// TODO:Add minimum and maximum radius (distance) settings to the input field.

		// TODO:Add Movieglu API to on.click function.		

		// TODO:Get Star Rating, Success/Failure selectors working.

		// TODO:Get Save DateIdeas Working - Add button to Save Generated Date Ideas and GET() into the corresponding area on html.

		// TODO:BUG: When selecting "Find Cheap Date" Button repeatedly using the same CITY and DISTANCE. It loads photos multiple times.

	
		var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
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
			data: {term: 'restaurants', location: city.value, radius: distance.value, price: 1},
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
				$("#restaurantPhoto").text("")
				var img= $('<img>');
				img.attr('src', result.businesses[index].image_url)
				img.appendTo('#restaurantPhoto')
				
				// Adds Restaurant Name
				$("#randomRestaurant2").text(result.businesses[index2].name)
				// Adds Restaurant Price Rating
				$("#randomRestaurantPrice2").text(result.businesses[index2].price)
				// Adds Restaurant photo
				$("#restaurantPhoto2").text("")
				var img= $('<img>');
				img.attr('src', result.businesses[index2].image_url)
				img.appendTo('#restaurantPhoto2')

				// Adds Restaurant Name
				$("#randomRestaurant3").text(result.businesses[index3].name)
				// Adds Restaurant Price Rating
				$("#randomRestaurantPrice3").text(result.businesses[index3].price)
				// Adds Restaurant photo
				$("#restaurantPhoto3").text("")
				var img= $('<img>');
				img.attr('src', result.businesses[index3].image_url)
				img.appendTo('#restaurantPhoto3')
			},			
		});
	});

	// MovieGlu API
	var moviegluAPI = "https://api-gate2.movieglu.com/filmsNowShowing/?n=10"
	$.ajax({
		url: moviegluAPI,
		method: "GET",
		headers: {			
			"api-version": "v200",
			"Authorization": 'Basic Q0hFQV8wOkRmWmc2a0dHbDA3YQ==',
			"client": "CHEA_0",
			"x-api-key": "NlDOeoEgK946kGiNMjKqM48xopku2zY37rp0zPWn",
			"device-datetime": `${timeISO8601}`,
			"territory": "US",
		},
		dataType: "json",
		data: {
			location: city.value,


		},
		success: function(result){
			console.log(result.cinemaDetails)
		}


	});



// })



// var settings = {
// 	"url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
// 	"method": "GET",
// 	"headers": { 
// 	"api-version": "v200",
// 	"Authorization": "Basic Q0hFQV8wOkRmWmc2a0dHbDA3YQ==",
// 	"client": "CHEA_0",
// 	"location": "new york",
// 	"terms": "theatre",
// 	"x-api-key": "NlDOeoEgK946kGiNMjKqM48xopku2zY37rp0zPWn",
// 	"device-datetime": "2021-12-11T19:35:52Z",
// 	"territory": "US",
// 	},
// 	};
	
// 	$.ajax(settings).done(function (response) {
// 	console.log(response);
// 	});
const minDistance = 10;
const maxDistance = 1000;
$("#distance").on("focusout", () => {
	let value = $("#distance").val();
	if (value > maxDistance){
		$("#distance").val(maxDistance)
	}
	if (value < minDistance){
		$("#distance").val(minDistance)
	}
})