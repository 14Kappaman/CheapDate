var test = getYelpLocation

function getYelpLocation() {
    var yelpAPI ="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=atl";
    
    $.ajax({
        url: yelpAPI,
        header: {
            Authorization: "Bearer ylTgS_8g2vr6yKMeND8qD6hLtZ5IcznWaYieqPh1NwhXb1WkHQzBwRzcBxmmpKxtJV48JHKfBQrme82TGo--56mAy_HLnpg5tWSE_SC2hRYBgp5SBwRHq63EBqGyYXYx",
        },
        method: "GET",
        dataType: "json",
        data: {term: 'restaurants', radius:5000, price: 1},
    });

    return Response.json(getYelpLocation);
};
console.log(getYelpLocation);
