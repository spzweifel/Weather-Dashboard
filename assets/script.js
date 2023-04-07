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

  var city = cityInput.val();
  console.log(city)
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var geoLon = data.coord.lon
      var geoLat = data.coord.lat
      console.log(geoLon)
      console.log(geoLat)

      if (cityInput.val() != "") {
        var cityArray = JSON.parse(localStorage.getItem("city")) || []

        localStorage.setItem("city", JSON.stringify(cityArray))
        displayForecast(geoLat, geoLon)
      }


function displayForecast(geoLat, geoLon) {
  
}


//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//use data.lon and data.lat to get the lon and lat of the selected city and the use that geo data in the fetch request

//I'm able to display the lat and lon of the desired city. Now I need to get the weather data for that. Maybe using the second fetch here.



//in get fetch api, only want the getapi function for the click event. that function should call another fucntion to get the city weather. then in that function, can have one for display weather that accepts a paraneter for city name. in get api, take everything form line 30 and all the way to line 51. that fetch and 31 to 34. move them all to that function. in the getapi, prevent default and then call the git weather function and pass the city because the get weather function will get the city from two different situations. once from the search, value from input. when city name is clicked, get the value from a data attribute from the data that is clicked. when get weather is called, it needs to accept the city name. once is the input and the other is the actual click. will pass to cityinput.val from the get weather function. won't need the variable. can define a parameter of city name in the function just like in line 31. code will still use that parameter. 




  
      
    });
}

//why is this not reading in the console?
search.on("click", getApi);




// function cityRender() {
    
// }
// cityRender();

today.eq(0).text(dayjs().format("MM/DD/YYYY"));
day1.eq(0).text(dayjs().add(1, "day").format("MM/DD/YYYY"));
day2.eq(0).text(dayjs().add(2, "day").format("MM/DD/YYYY"));
day3.eq(0).text(dayjs().add(3, "day").format("MM/DD/YYYY"));
day4.eq(0).text(dayjs().add(4, "day").format("MM/DD/YYYY"));
day5.eq(0).text(dayjs().add(5, "day").format("MM/DD/YYYY"));



})