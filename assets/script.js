// use fetch to get the data for the weather stuff

//create input box to get city name. save that value as a variable.

//create query string. have to get lat and long to get the weather. do two api calls. first, takes the city name and gives lat and long in the textbox. take that return to do the weather api call.

//add an event listener on the search button
$(function(){


//have to reference
var today = $(".box");
var day1 = $(".day-box1");
var day2 = $(".day-box2");
var day3 = $(".day-box3");
var day4 = $(".day-box4");
var day5 = $(".day-box5");
var userForm = $("#user-form");
var cityInput = $("#cityname");
var search = $(".btn");

var apiKey = "4a46a814423b539ffe06ab6c3ce3d0c7"
//var lat =

//addeventlistener for the city and console logs it

function getApi(event) {
  event.preventDefault();

  var city = cityInput.value;
  console.log(city)
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);

        var currentCard = `
        <h4 class="">temp: ${data.main.temp}</h4>
                <p>hum: </p>`


    //   var title = data.city.name + " " + dayjs().format("MM/DD/YYYY");
    //   today.children().eq(0).text(title);
    //   var cityList = data.list;

    //   $("img").remove();

    //   for (var i = 0; i < cityList.length; i++) {
    //     var main = cityList[i].main;
    //     var temp = Math.ceil((9 / 5) * (main.temp - 273) + 32);
    //     var humidity = main.humidity + "%";
    //     var windSpeed = cityList[i].wind.speed + "mph";
    //     var icon = cityList[i].weather[0].icon;

    //     var img = $("<img>").attr(
    //       "src",
    //       "https://openweathermap.org/img/wn" + icon + "@2x.png"
    //     );
    //   }

      
    });
}

//why is this not reading in the console?
search.addEventListener("click", getApi);




function cityRender() {
    
}
cityRender();

// var formSubmitHandler = function (event) {
//     event.preventDefault()

//     var cityname = cityInput.value.trim()

//     if (cityname) {
//         getForecastData(cityname)
//     }
// }

today.eq(0).text(dayjs().format("MM/DD/YYYY"));
day1.eq(0).text(dayjs().add(1, "day").format("MM/DD/YYYY"));
day2.eq(0).text(dayjs().add(2, "day").format("MM/DD/YYYY"));
day3.eq(0).text(dayjs().add(3, "day").format("MM/DD/YYYY"));
day4.eq(0).text(dayjs().add(4, "day").format("MM/DD/YYYY"));
day5.eq(0).text(dayjs().add(5, "day").format("MM/DD/YYYY"));



})