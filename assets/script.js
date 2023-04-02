// use fetch to get the data for the weather stuff

//create input box to get city name. save that value as a variable. 

//create query string. have to get lat and long to get the weather. do two api calls. first, takes the city name and gives lat and long in the textbox. take that return to do the weather api call. 

//

var userForm = document.querySelector('#user-form')
var cityInput = document.querySelector('#cityname')


    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={4a46a814423b539ffe06ab6c3ce3d0c7}"

    // fetch(requestUrl)
    //     .then(function (response) {
    //         return response.json()
    //     })
    //     .then(function (data) {
    //         console.log(data)
    //     })






var formSubmitHandler = function (event) {
    event.preventDefault()

    var cityname = cityInput.value.trim()

    if (cityname) {
        getForecastData(cityname)
    }
}


