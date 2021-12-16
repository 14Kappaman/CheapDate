var timeISO8601 = moment().format();
console.log(timeISO8601);

// search field
$("#success").on("click", function (event) {
  event.preventDefault();
  // the below function needs to notify user they must select a city and range.
  function cheapDateSearch() {
    $(".input").each(function () {
      var city = $("#city").val();
      var distance = $("#distance").val();
      localStorage.setItem("city", city); //use of local storage
      localStorage.setItem("radius", distance); //use of local storage
    });
  }
  console.log(localStorage.getItem("radius", distance));
  // execute function on click
  cheapDateSearch();

  // Yelp API Information. Chooses restaurant by random.
  var queryURL =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?";
  var apiKey =
    "LDKwqpdJ71SbMWf6vKuuP4SIzPUd6Zng0ydt4H3fWuU_ELnu6XmsTw7AXm4NX1x85YJSlt6XtMsY1pPMF-jQ0GA9ZMg6MlYjeOcfd9FXwNQ3oI_sax1f0IG453a6YXYx";
  const cheapDateRadius = localStorage.getItem("radius", distance); //use of local storage

  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      accept: "application/json",
      "x-requested-with": "xmlhttprequest",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${apiKey}`,
    },
    dataType: "json",
    data: {
      term: "restaurants",
      location: city.value,
      radius: cheapDateRadius,
      price: 1,
    },
    success: function (result) {
      console.log(result.businesses);
      var yelpBusinesses = result.businesses;
      var index = Math.floor(Math.random() * yelpBusinesses.length);
      console.log(index);
      var index2 = Math.floor(Math.random() * yelpBusinesses.length);
      var index3 = Math.floor(Math.random() * yelpBusinesses.length);
      if (index2 === index) {
        index2 = Math.floor(Math.random() * yelpBusinesses.length);
      }
      var index3 = Math.floor(Math.random() * yelpBusinesses.length);
      console.log(yelpBusinesses[index3]);
      if (index3 === index2 || index3 === index) {
        index3 = Math.floor(Math.random() * yelpBusinesses.length);
      }

      // Adds Restaurant Name
      $("#randomRestaurant").text(result.businesses[index].name);
      // Adds Restaurant Price Rating
      $("#randomRestaurantPrice").text(result.businesses[index].price);
      // Adds Restaurant photo
      $("#restaurantPhoto").text("");
      var img = $("<img>").height(100).width(100);
      img.attr("src", result.businesses[index].image_url);
      img.appendTo("#restaurantPhoto");
      $("#restaurantrating")
        .text("")
        .append(renderRatingView(result.businesses[index].rating));

      // Adds Restaurant Name
      $("#randomRestaurant2").text(result.businesses[index2].name);
      // Adds Restaurant Price Rating
      $("#randomRestaurantPrice2").text(result.businesses[index2].price);
      // Adds Restaurant photo
      $("#restaurantPhoto2").text("");
      var img = $("<img>").height(100).width(100);
      img.attr("src", result.businesses[index2].image_url);
      img.appendTo("#restaurantPhoto2");
      $("#restaurantrating2")
        .text("")
        .append(renderRatingView(result.businesses[index2].rating));

      // Adds Restaurant Name
      $("#randomRestaurant3").text(result.businesses[index3].name);
      // Adds Restaurant Price Rating
      $("#randomRestaurantPrice3").text(result.businesses[index3].price);
      // Adds Restaurant photo
      $("#restaurantPhoto3").text("");
      var img = $("<img>").height(100).width(100);
      img.attr("src", result.businesses[index3].image_url);
      img.appendTo("#restaurantPhoto3");
      $("#restaurantrating3")
        .text("")
        .append(renderRatingView(result.businesses[index3].rating));

      $("#buttonClick1").on("click", function (event) {
        event.preventDefault();
        console.log("clicked");
        $("#randomRestaurant").clone().appendTo("#randomRestaurantClone");
        $("#restaurantPhoto").clone().appendTo("#restaurantPhotoClone");
        $("#restaurantrating").clone().appendTo("#restaurantratingClone");
        $("#randomEventName").clone().appendTo("#randomEventNameClone");
      });

      $("#buttonClick2").on("click", function (event) {
        event.preventDefault();
        console.log("clicked");
        $("#randomRestaurant2").clone().appendTo("#randomRestaurantClone2");
        $("#restaurantPhoto2").clone().appendTo("#restaurantPhotoClone2");
        $("#restaurantrating2").clone().appendTo("#restaurantratingClone2");
        $("#randomEventName2").clone().appendTo("#randomEventNameClone2");
      });

      $("#buttonClick2").on("click", function (event) {
        event.preventDefault();
        console.log("clicked");
        $("#randomRestaurant3").clone().appendTo("#randomRestaurantClone3");
        $("#restaurantPhoto3").clone().appendTo("#restaurantPhotoClone3");
        $("#restaurantrating3").clone().appendTo("#restaurantratingClone3");
        $("#randomEventName3").clone().appendTo("#randomEventNameClone3");
      });
    },
  });

  // Movieglu API
  var moviegluAPI = {
    url: "https://api-gate2.movieglu.com/cinemasNearby/?n=5",
    method: "GET",
    timeout: 0,
    headers: {
      "api-version": "v200",
      // "Authorization": "Basic R1JFRTo3b1JmTTl4RmxVaEo=",
      client: "GREE",
      // "x-api-key": "5xSPyPObGvTZamJ8LjD05TnqcaqEKlq2cMf10Ge3",
      "device-datetime": `${timeISO8601}`,
      territory: "US",
      geolocation: "33.753746; -84.386330",
    },
  };

  $.ajax(moviegluAPI).done(function (response) {
    console.log(response);
    var movieList = response.cinemas;
    var index = Math.floor(Math.random() * movieList.length);
    console.log(movieList[index]);
    var index2 = Math.floor(Math.random() * movieList.length);
    console.log(movieList[index2]);
    if (index2 === index) {
      index2 = Math.floor(Math.random() * movieList.length);
    }
    var index3 = Math.floor(Math.random() * movieList.length);
    console.log(movieList[index3]);
    if (index3 === index2 || index3 === index) {
      index3 = Math.floor(Math.random() * movieList.length);
    }

    var movie1TitleSection = $("#movie1");
    movie1TitleSection.text(movieList[index].cinema_name);
    $("#movielogo1").text("");
    var img = $("<img>").height(100).width(100);
    img.attr("src", movieList[index].logo_url);
    img.appendTo("#movielogo1");
    var movie1TitleSection2 = $("#movie2");
    movie1TitleSection2.text(movieList[index2].cinema_name);
    $("#movielogo2").text("");
    var img = $("<img>").height(100).width(100);
    img.attr("src", movieList[index2].logo_url);
    img.appendTo("#movielogo2");
    var movie1TitleSection3 = $("#movie3");
    movie1TitleSection3.text(movieList[index3].cinema_name);
    $("#movielogo3").text("");
    var img = $("<img>").height(100).width(100);
    img.attr("src", movieList[index3].logo_url);
    img.appendTo("#movielogo3");
  });

  // Ajax API call for ticketmaster.
  var ticketMaster_APIkey = "8njJQoW0vprJ4q925GfuaN5cdSBvPiGT";
  var ticketMasterSecret = "fvGGPygkGqrdUC6y";

  $.ajax({
    type: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/events?apikey=ibxVe2Aj1cwAiLoexvGXRgR33BWqaJS3",
    async: true,
    dataType: "json",
    data: {
      locale: "*",
      city: city.value,
      radius: localStorage.getItem("radius", distance),
    },
    success: function (response) {
      console.log(response);
      var theTicketMaster = response._embedded.events;
      console.log(theTicketMaster);
      var index = Math.floor(Math.random() * theTicketMaster.length);
      console.log(index);
      var index2 = Math.floor(Math.random() * theTicketMaster.length);
      var index3 = Math.floor(Math.random() * theTicketMaster.length);
      if (index2 === index) {
        index2 = Math.floor(Math.random() * theTicketMaster.length);
      }
      var index3 = Math.floor(Math.random() * theTicketMaster.length);
      console.log(theTicketMaster[index3]);
      if (index3 === index2 || index3 === index) {
        index3 = Math.floor(Math.random() * theTicketMaster.length);
      }

      $("#randomEventName").text(theTicketMaster[index].name);
      $("#eventLogo").text("");
      $(".img1").append(
        "<img src= " + theTicketMaster[index].images[9].url + " '/>"
      );
      console.log(theTicketMaster[index].images[9].url);

      $("#randomEventName2").text(theTicketMaster[index2].name);
      $("#eventLogo2").text("");
      $(".img2").append(
        "<img src= " + theTicketMaster[index2].images[9].url + " '/>"
      );
      console.log(theTicketMaster[index2].images[9].url);

      $("#randomEventName3").text(theTicketMaster[index3].name);
      $("#eventLogo3").text("");
      $(".img3").append(
        "<img src=' " + theTicketMaster[index3].images[9].url + " '/>"
      );
      console.log(theTicketMaster[index3].images[9].url);
    },
    error: function (xhr, status, err) {
      // This time, we do not end up here!
    },
  });
});

const ratingStars = [...document.getElementsByClassName("rating-star")];

function starField(stars) {
  const starChecked = "rating-star fas fa-star fa-2x checked";
  const starUnchecked = "rating-star far fa-star fa-2x";
  const starArr = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starUnchecked) {
        for (i; i >= 0; --i) stars[i].className = starChecked;
      } else {
        for (i; i < starArr; ++i) stars[i].className = starUnchecked;
      }
    };
  });
}
starField(ratingStars);

const ratingStars2 = [...document.getElementsByClassName("rating-star2")];

function starField2(stars) {
  const starChecked = "rating-star2 fas fa-star fa-2x checked";
  const starUnchecked = "rating-star2 far fa-star fa-2x";
  const starArr = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starUnchecked) {
        for (i; i >= 0; --i) stars[i].className = starChecked;
      } else {
        for (i; i < starArr; ++i) stars[i].className = starUnchecked;
      }
    };
  });
}
starField2(ratingStars2);

const ratingStars3 = [...document.getElementsByClassName("rating-star3")];

function starField3(stars) {
  const starChecked = "rating-star3 fas fa-star fa-2x checked";
  const starUnchecked = "rating-star3 far fa-star fa-2x";
  const starArr = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starUnchecked) {
        for (i; i >= 0; --i) stars[i].className = starChecked;
      } else {
        for (i; i < starArr; ++i) stars[i].className = starUnchecked;
      }
    };
  });
}
starField3(ratingStars3);

// sets minimum and max distance / radius in meters. Required by Yelp API
const minDistance = 10;
const maxDistance = 40000;
$("#distance").on("focusout", () => {
  let value = $("#distance").val();
  if (value > maxDistance) {
    $("#distance").val(maxDistance);
  }
  if (value < minDistance) {
    $("#distance").val(minDistance);
  }
});

// Displays yelp business review ratings in Stars.
function renderRatingView(rating) {
  var image = $("<img>");
  switch (rating) {
    case 0:
      image.attr("src", "assets/images/regular/regular_0.png");
      break;
    case 1:
      image.attr("src", "assets/images/regular/regular_1.png");
      break;
    case 1.5:
      image.attr("src", "assets/images/regular/regular_1_half.png");
      break;
    case 2:
      image.attr("src", "assets/images/regular/regular_2.png");
      break;
    case 2.5:
      image.attr("src", "assets/images/regular/regular_2_half.png");
      break;
    case 3:
      image.attr("src", "assets/images/regular/regular_3.png");
      break;
    case 3.5:
      image.attr("src", "assets/images/regular/regular_3_half.png");
      break;
    case 4:
      image.attr("src", "assets/images/regular/regular_4.png");
      break;
    case 4.5:
      image.attr("src", "assets/images/regular/regular_4_half.png");
      break;
    case 5:
      image.attr("src", "assets/images/regular/regular_5.png");
      break;
    default:
      throw new Error("can not display invalid rating");
  }
  return image;
}