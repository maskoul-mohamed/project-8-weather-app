class WeatherManager {
    #_currentForecast;

    fetchForecast(url) {
        fetch(url)
        .then(response => {
            // handle the response
            return response.json()
        }).then(json => {
            var weather = new Weather()
            weather.city = json.name
            weather.description = json.weather[0].main
            weather.temp = json.main.temp
            this.#_currentForecast = weather
            document.write(this.#_currentForecast.city + " ")
            document.write(this.#_currentForecast.description + " ")
            document.write(this.#_currentForecast.temp)
        })
        .catch(error => {
            // handle the error
            console.log(error)
        });
    }
} 