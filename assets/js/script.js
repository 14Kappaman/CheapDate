// $(document).ready(function () {
var timeISO8601 = moment().format();
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
		var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?";
		var apiKey = "68bbHwsCWL4OAYGtkSOWSf2JFp7C2zbjnUxztytfSKJmA2cddY0ahKSeO6agzuI9Bf-nC3XII8n1qIPAZQHdrjzu0E4xiPcvWUINsr7NZ5xZgPiBiSbc6HfMUwmwYXYx";
		
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
				data: {term: 'restaurants', radius: distance.value, location: city.value, price: 1},
				success: function(result){
					console.log(result.businesses);
					var yelpBusinesses = result.businesses;
					var index = Math.floor(Math.random() * yelpBusinesses.length)
					console.log(index);
					var index2 = Math.floor(Math.random() * yelpBusinesses.length)
					var index3 = Math.floor(Math.random() * yelpBusinesses.length)
					for (var i = 0; i < yelpBusinesses.length; i++) {
						console.log(yelpBusinesses[i]);
					}
		
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
					var yelpBusinesses2 = result.businesses;

					// var index4 = Math.floor(Math.random() * yelpBusinesses2.length)
					// console.log(yelpBusinesses2[index4]);
					// var index5 = Math.floor(Math.random() * yelpBusinesses2.length)
					// console.log(yelpBusinesses2[index5]);
					// var index6 = Math.floor(Math.random() * yelpBusinesses2.length)
					// console.log(yelpBusinesses2[index6]);
					// var  restaurantSelection1 = $("#movie1");
					// restaurantSelection1.text(yelpBuisnesses2[index4].name)
					// var  restaurantSelection2 = $("#movie2");
					// restaurantSelection2.text(yelpBuisnesses2[index5].name)
					// var  restaurantSelection3 = $("#movie3");
					// restaurantSelection3.text(yelpBuisnesses2[index6].name)
				},
		
				
			})
			var settings = {
				"url": "https://api-gate2.movieglu.com/cinemasNearby/?n=5",
				"method": "GET",
				"headers": { 
				"api-version": "v200",
				"Authorization": "Basic U1RVRF8yMDA6UWJCVlRMcGRpVzFL",
				"client": "STUD_200",
				"geolocation": "33.753746;-84.386330 ",
				"x-api-key": "kmDHO9Q5OMgS8e899aU1e7lxGwyrk26rxGPBn7i0",
				"device-datetime": `${timeISO8601}`,
				"territory": "US",
				},
				};
				
				$.ajax(settings).done(function (response) {
				console.log(response);
				var movieList = response.cinemas;
                var index = Math.floor(Math.random()*movieList.length);
				console.log(movieList[index]);
                var index2 = Math.floor(Math.random()*movieList.length);
				console.log(movieList[index2]);
				if (index2 === index){
					index2=Math.floor(Math.random()*movieList.length)
				};
				var index3 = Math.floor(Math.random()*movieList.length);
				console.log(movieList[index3]);
                if (index3 === index2 || index3 === index){
					index3=Math.floor(Math.random()*movieList.length)
				}

				var  movie1TitleSection = $("#movie1");
				movie1TitleSection.text(movieList[index].cinema_name)
				var  movie1TitleSection2 = $("#movie2");
				movie1TitleSection2.text(movieList[index2].cinema_name)
				var  movie1TitleSection3 = $("#movie3");
				movie1TitleSection3.text(movieList[index3].cinema_name)

				});
	});

	// function 
	// var url = new URL("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Atlanta&price=1&radius=");
	
	// url.searchParams.append('location', city);
	// url.searchParams.append('radius', distance);




// Get Random Restaurant from businesses array using Location, Radius of 5000M and Price rating of 1 $.
// 

// })