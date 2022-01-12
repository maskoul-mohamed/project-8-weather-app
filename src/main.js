var city;


var key = 'c2d6f6f974cc0761aeacc70ce99d3e25';


function onSearch() {
    city = document.getElementById("cityInput").value
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    fetch(url)
        .then(response => {
            // handle the response
            return response.json()
        }).then(json => {
            var city = json.name
            var weather = json.weather[0].main
            console.log(city)
            console.log(weather)
        })
        .catch(error => {
            // handle the error
            console.log(error)
        });
}