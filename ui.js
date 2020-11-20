
class UI {
    constructor() {
        this.wHeading = document.querySelector('.w-heading');
        this.wDate = document.querySelector('.w-date');
        this.wIcon = document.querySelector('.w-icon');
        this.wTemp = document.querySelector('.w-temp');
        this.wFar = document.querySelector('.w-far');
        this.wDesc = document.querySelector('.w-desc');
        this.wHumidity = document.querySelector('#w-humidity');
        this.wWind = document.querySelector('#w-wind');
        this.wPressure = document.querySelector('#w-pressure');
        this.wCity = document.querySelector('#w-city');
        this.wSunrise = document.querySelector('#w-sunrise');
        this.wSunset = document.querySelector('#w-sunset');
    }
    paintUI(data) {
        const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        this.wHeading.textContent = data.name;

        let th;
        if (new Date().getUTCDate() == 1) {
            th = 'st';
        } else if (new Date().getUTCDate() == 2) {
            th = 'nd';
        } else if (new Date().getUTCDate() == 3) {
            th = 'rd';
        } else {
            th = 'th';
        }
        this.wDate.textContent = day[new Date().getDay()] + '' + ' ' + new Date().getUTCDate() + th + ' ' + month[new Date().getMonth()];

        this.wIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

        this.wTemp.textContent = parseInt((data.main.temp - 273.15)) + '°C  ';

        this.wFar.textContent = '(' + parseFloat((((data.main.temp - 273.15) * 9 / 5) + 32)).toFixed(2) + ' °F)';

        this.wDesc.textContent = data.weather["0"].description;

        this.wHumidity.textContent = 'Humidity : ' + data.main.humidity + '%';
        this.wWind.textContent = 'Wind : ' + parseFloat((data.wind.speed * 3.6)).toFixed(2) + ' Km/hr';

        this.wPressure.textContent = 'Pressure : ' + data.main.pressure + ' hpa';

        this.wCity.textContent = 'City : ' + data.name;

        function getSunrise() {
            let Timestamp = data.sys.sunrise;
            let dateObj = new Date(Timestamp);
            // Get hours from the timestamp 
            let hours = dateObj.getUTCHours();

            // Get minutes part from the timestamp 
            let minutes = dateObj.getUTCMinutes();

            let formattedTime = hours.toString().padStart(2, '0') + ':' +
                minutes.toString().padStart(2, '0');
            return formattedTime;
        }
        this.wSunrise.textContent = 'Sunrise : ' + getSunrise() + ' a.m';


        function getSunset() {
            let Timestamp = data.sys.sunset;
            let dateObj = new Date(Timestamp);
            // Get hours from the timestamp 
            let hours = dateObj.getUTCHours();

            // Get minutes part from the timestamp 
            let minutes = dateObj.getUTCMinutes();

            let formattedTime = hours.toString().padStart(2, '0') + ':' +
                minutes.toString().padStart(2, '0');
            return formattedTime;
        }
        this.wSunset.textContent = 'Sunset : ' + getSunset() + ' p.m';
    }
}








