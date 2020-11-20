const storage = new Storage();

const weatherLoc = storage.getLocationData();

const weather = new Weather(weatherLoc.city, weatherLoc.country);
weather.getWeather();

const ui = new UI();

// document.addEventListener('DOMContentLoaded', weather.getWeather);


document.querySelector('#change-btn').addEventListener('click', () => {
    const city = document.querySelector('#changeCity').value;
    const country = document.getElementById('changeCountry').value;

    if (city === '' || country === '') {
        //Show error
        alert('Please Fill both fields');
    } else {
        weather.changeLocation(city, country);
        storage.setLocationData(city, country);
        weather.getWeather();
        $('#locModal').modal('hide');
    }

})





