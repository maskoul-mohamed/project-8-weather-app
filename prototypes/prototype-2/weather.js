class Weather {
    #_city;
    #_temp;
    #_description;

    get city(){
        return this.#_city;
    }

    set city(value){
        this.#_city = value;
    }
    get temp() {
        return this.#_temp;
    }

    set temp(value) {
        this.#_temp = value
    }

 

    get description() {
        return this.#_description
    }

    set description(value){
        this.#_description = value
    }
}