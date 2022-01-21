var city;

var key = 'c2d6f6f974cc0761aeacc70ce99d3e25';

async function onSearch() {
    var weatherManager = new WeatherManager()

    city = document.getElementById("cityInput").value
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    if (city) {
        weatherManager.fetchForecast(url).then(() => {
            if(weatherManager.errorMsg){
                displayError(weatherManager.errorMsg)
            }else {
                display(weatherManager.currentForecast)

            }
        })
    }

    document.getElementById("cityInput").value = ""
    city = undefined
}


function display(currentForecast) {
    document.getElementById('cityText').innerText = currentForecast.city
    document.getElementById('tempText').innerText = currentForecast.temp
    document.getElementById('descriptionText').innerText = currentForecast.description
    document.getElementById('humidityText').innerText = currentForecast.humidity
    document.getElementById('weatherIcon').src = "http://openweathermap.org/img/wn/"+currentForecast.iconCode +"@2x.png"

    document.getElementById('card').classList.remove('hide')
    document.getElementById('text').classList.add('hide')

}

function displayError(errorMsg){
    const textDisplay = document.getElementById('text')
    textDisplay.innerText = errorMsg
    textDisplay.style.color = "#e63946"
    document.getElementById('card').classList.add('hide')
    document.getElementById('text').classList.remove('hide')
}