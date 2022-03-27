const NotFoundError = require('../common/errors/not-found.error')
const citiesRepository = require('./cities.repository.js');



module.exports = {

    async getCityByZipCode(zip) {
        // let city = await citiesRepository.getDataCityByZipCode(zip);
        return 'aa';//city['places'][0]['place name'] + ', ' + city['places'][0]['state abbreviation'] + ', ' + city['country'];
    }
}