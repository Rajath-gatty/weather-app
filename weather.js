
class Weather {
    constructor(city, country) {
        this.appid = 'ad4704a082dd4a556a99923cd52cb5bf';
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.appid}`)
            .then(responseData => {
                return responseData.json();
            })
            .then(data => {
                ui.paintUI(data);
            })
            .catch(err => {
                alert('City not found');
            })
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }

}
