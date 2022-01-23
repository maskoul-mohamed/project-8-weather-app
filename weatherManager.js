class WeatherManager {
    #_currentForecast;
    #_weekForecast;
    #_errorMsg = undefined;

    set currentForecast(value) {
        this.#_currentForecast = value
    }

    get currentForecast() {
        return this.#_currentForecast
    }

    get errorMsg() {
        return this.#_errorMsg;
    }

    // async fetchForecast(url) {
    //     var weather = new Weather()

    //     fetch(url)
    //     .then(response => {
    //         // handle the response
    //         return response.json()
    //     }).then(json => {
    //         weather.city = json.name
    //         weather.description = json.weather[0].main
    //         weather.iconCode = json.weather[0].icon
    //         weather.temp = json.main.temp
    //         weather.humidity = json.main.humidity
    //         this.#_currentForecast = weather
    //         // console.log(this.#_currentForecast)
    //     })
    //     .catch(error => {
    //         // handle the error
    //         console.log(error)
    //     });
    //     return await weather

    // }

    async fetchForecast(url) {

        var response = await fetch(url)
        var json = await response.json()
        // handle the response

        var weather = new Weather()
   

        if(!response.ok){
            this.#_errorMsg = `An error has occured: ${response.status}`
        } else {
            this.#_errorMsg = undefined
            weather.city = json.name
            weather.description = json.weather[0].main
            weather.iconCode = json.weather[0].icon
            weather.temp = json.main.temp
            weather.humidity = json.main.humidity
            this.#_currentForecast = weather
        }

    }

 

}