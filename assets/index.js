<<<<<<< HEAD
var APIKey = "&appid=f4d2eb8cfda6922a76bd431cf3a62f32"
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=";
var uvURL ='http://api.openweathermap.org/data/2.5/uvi?';
var foreCast='http://api.openweathermap.org/data/2.5/forecast?q=';
    
moment().subtract(10, 'days').calendar();
    
$("#button-addon1").on("click", function(){
    var userInput = $("#userInput").val();
    $("#userInput").val("");

    getWeather(userInput);
})

function getWeather(userInput){
    $.ajax({
        type: "GET",
        url: queryURL+userInput+APIKey,
        dataType: "json"
    }).then(function(response){
        console.log(response);
        const cityEl = $('.city');
        const windEl = $('.wind');
        const humidityEl = $('.humidity');
        const tempEl = $('.temp');
        const tempInF= (response.main.temp-273.15) * 1.80 + 32;
        cityEl.html(response.name);
        windEl.html('Wind Speed: ' + response.wind.speed);
        humidityEl.html('Humidity ' + response.main.humidity);
        tempEl.html('Temp in F: ' + tempInF.toFixed(2));

        getForecast(userInput);
        getUV(response.coord.lat, response.coord.lon)
    })
};

function getForecast(userInput){
        
    $.ajax({
        url: foreCast+userInput+APIKey,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // const foreCastEl = $('#bottom');
        // JSON.stringify(response.list);
        // foreCastEl.html('Forecast: ' +response.list);
        // $("#bottom").text("Forecast: " + response.list);
        // console.log(response.list.main);
        
    });
};

function getUV(lat, lon){
    $.ajax({
        url: uvURL+APIKey+"&lat="+lat+"&lon="+lon,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // const uvEl = $('.value');
        // uvEl.html('UV Index' +response.value);
        // $(".value").text("UV Index: " + response.value);
        // console.log(uvEl);
        // if (response.value>7){
        //     $('.value').css('background-color','red');
        // } else {
        //     $('.value').css('background-color','green');
    })

};


// });

    //   function renderCities() {

    //     $("#button-addon1").empty();

    //     for (var i = 0; i < city.length; i++) {
            
            

    //       var a = $("<button>");          
    //       a.addClass("city-class");
    //       a.attr("data-name", city[i]);
    //       a.text(city[i]);
    //       $("#button-addon1").append(a);
    //     }
    //   }

    // //   $("#button-addon1").on("click", function(event) {
    // //     event.preventDefault();
    // //     var cities = $(".form-control").val().trim();
    // //     city.push(cities);

    // //     renderCities();
    // //   });

    // //   renderCities();
    

=======
var APIKey = "&appid=f4d2eb8cfda6922a76bd431cf3a62f32"
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=";
var uvURL ='http://api.openweathermap.org/data/2.5/uvi?';
var foreCast='http://api.openweathermap.org/data/2.5/forecast?q=';
    
moment().subtract(10, 'days').calendar();
    
$("#button-addon1").on("click", function(){
    var userInput = $("#userInput").val();
    $("#userInput").val("");

    getWeather(userInput);
})

function getWeather(userInput){
    $.ajax({
        type: "GET",
        url: queryURL+userInput+APIKey,
        dataType: "json"
    }).then(function(response){
        console.log(response);
        const cityEl = $('.city');
        const windEl = $('.wind');
        const humidityEl = $('.humidity');
        const tempEl = $('.temp');
        const tempInF= (response.main.temp-273.15) * 1.80 + 32;
        cityEl.html(response.name);
        windEl.html('Wind Speed: ' + response.wind.speed);
        humidityEl.html('Humidity ' + response.main.humidity);
        tempEl.html('Temp in F: ' + tempInF.toFixed(2));

        getForecast(userInput);
        getUV(response.coord.lat, response.coord.lon)
    })
};

function getForecast(userInput){
        
    $.ajax({
        url: foreCast+userInput+APIKey,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // const foreCastEl = $('#bottom');
        // JSON.stringify(response.list);
        // foreCastEl.html('Forecast: ' +response.list);
        // $("#bottom").text("Forecast: " + response.list);
        // console.log(response.list.main);
        
    });
};

function getUV(lat, lon){
    $.ajax({
        url: uvURL+APIKey+"&lat="+lat+"&lon="+lon,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // const uvEl = $('.value');
        // uvEl.html('UV Index' +response.value);
        // $(".value").text("UV Index: " + response.value);
        // console.log(uvEl);
        // if (response.value>7){
        //     $('.value').css('background-color','red');
        // } else {
        //     $('.value').css('background-color','green');
    })

};


// });

    //   function renderCities() {

    //     $("#button-addon1").empty();

    //     for (var i = 0; i < city.length; i++) {
            
            

    //       var a = $("<button>");          
    //       a.addClass("city-class");
    //       a.attr("data-name", city[i]);
    //       a.text(city[i]);
    //       $("#button-addon1").append(a);
    //     }
    //   }

    // //   $("#button-addon1").on("click", function(event) {
    // //     event.preventDefault();
    // //     var cities = $(".form-control").val().trim();
    // //     city.push(cities);

    // //     renderCities();
    // //   });

    // //   renderCities();
    

>>>>>>> 1fcf207c5dd5e2f4075adfd44f2508e963e7aef0
