class Storage {
    constructor() {
        this.city;
        this.country;
        this.defaultCity = 'Mangalore';
        this.defaultCountry = 'India';
    }

    getLocationData() {
        if (sessionStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = sessionStorage.getItem('city');
        }

        if (sessionStorage.getItem('country') === null) {
            this.country = this.defaultCountry;
        } else {
            this.country = sessionStorage.getItem('country');
        }
        return {
            city: this.city,
            country: this.country
        }

    }

    setLocationData(city, country) {
        sessionStorage.setItem('city', city);
        sessionStorage.setItem('country', country);
    }
}