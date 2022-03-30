const NotFoundError = require('../common/errors/not-found.error')
const citiesRepository = require('./cities.repository.js');



module.exports = {
    async getCityByZipCode(zip) {
        let city = await citiesRepository.getCityDataByZipCode(zip);
        if (!city) {
            throw new NotFoundError('City not found!');
        }
        return city;
    }
}