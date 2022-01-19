var city;

var key = 'c2d6f6f974cc0761aeacc70ce99d3e25';

async function onSearch() {
    var weatherManager = new WeatherManager()

    city = document.getElementById("cityInput").value
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    if (city) {
        weatherManager.fetchForecast(url).then(() => {
            display(weatherManager.currentForecast)
        })
    }

    document.getElementById("cityInput").value = ""
    city = undefined

  


}


function display(currentForecast) {
    console.log(currentForecast)

}