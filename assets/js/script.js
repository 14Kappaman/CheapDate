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

		// TODO: Get Geolocation data from cheapDateSearch() data. --> City <--

	
		var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?";
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
				if (index2 === index){
                    index2=Math.floor(Math.random()*yelpBusinesses.length)
                };
                var index3 = Math.floor(Math.random()*yelpBusinesses.length);
                console.log(yelpBusinesses[index3]);
                if (index3 === index2 || index3 === index){
                    index3=Math.floor(Math.random()*yelpBusinesses.length)
                }
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
				$("#restaurantrating").text("").append(renderRatingView(result.businesses[index].rating))

				// Adds Restaurant Name
				$("#randomRestaurant2").text(result.businesses[index2].name)
				// Adds Restaurant Price Rating
				$("#randomRestaurantPrice2").text(result.businesses[index2].price)
				// Adds Restaurant photo
				$("#restaurantPhoto2").text("")
				var img= $('<img>');
				img.attr('src', result.businesses[index2].image_url)
				img.appendTo('#restaurantPhoto2')
				$("#restaurantrating2").text("").append(renderRatingView(result.businesses[index2].rating))


				// Adds Restaurant Name
				$("#randomRestaurant3").text(result.businesses[index3].name)
				// Adds Restaurant Price Rating
				$("#randomRestaurantPrice3").text(result.businesses[index3].price)
				// Adds Restaurant photo
				$("#restaurantPhoto3").text("")
				var img= $('<img>');
				img.attr('src', result.businesses[index3].image_url)
				img.appendTo('#restaurantPhoto3')
				$("#restaurantrating3").text("").append(renderRatingView(result.businesses[index3].rating))

			},			
		});
	});

	
	// Movieglu API
		var moviegluAPI = {
			"url": "https://api-gate2.movieglu.com/cinemasNearby/?n=5",
			"method": "GET",
			"timeout": 0,
			"headers": {
				"api-version": "v200",
				"Authorization": "Basic U1RVRF8yMDA6UWJCVlRMcGRpVzFL",
				"client": "STUD_200",
				"x-api-key": "kmDHO9Q5OMgS8e899aU1e7lxGwyrk26rxGPBn7i0",
				"device-datetime": `${timeISO8601}`,
				"territory": "US",
				"geolocation": "33.753746; -84.386330"
			},
			};
			
			$.ajax(moviegluAPI).done(function (response) {
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

	// Google Maps API 
	// googleMapsURL="https://maps.googleapis.com/maps/api/js?AIzaSyB1XdVLrKYTGM1slYJeOrgXz7p5JmpMRS0&callback=initMap"
	



const minDistance = 10;
const maxDistance = 40000;
$("#distance").on("focusout", () => {
	let value = $("#distance").val();
	if (value > maxDistance){
		$("#distance").val(maxDistance)
	}
	if (value < minDistance){
		$("#distance").val(minDistance)
	}
})
function renderRatingView(rating){
	var image=$("<img>")
	switch (rating){
		case 0:
			image.attr("src", "assets/images/regular/regular_0.png")
			break;
		case 1:
			image.attr("src", "assets/images/regular/regular_1.png")
			break;
		case 1.5:
			image.attr("src", "assets/images/regular/regular_1_half.png")
			break;
		case 2:
			image.attr("src", "assets/images/regular/regular_2.png")
			break;
		case 2.5:
			image.attr("src", "assets/images/regular/regular_2_half.png")
			break;
		case 3:
			image.attr("src", "assets/images/regular/regular_3.png")
			break;
		case 3.5:
			image.attr("src", "assets/images/regular/regular_3_half.png")
			break;
		case 4:
			image.attr("src", "assets/images/regular/regular_4.png")
			break;
		case 4.5:
			image.attr("src", "assets/images/regular/regular_4_half.png")
			break;
		case 5:
			image.attr("src", "assets/images/regular/regular_5.png")
			break;
		default:
			throw new Error("can not display invalid rating")

	}
	return image;
}
// })

