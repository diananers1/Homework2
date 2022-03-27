const axios = require('axios')
const NotFoundError = require('../common/errors/not-found.error')

module.exports = {
    async getDataCityByZipCode(zipCode) {
        return axios
        .get('https://api.zippopotam.us/us/' + zipCode)
        .then(res => {
            if (res == {}) {
                throw new NotFoundError('City not found');
            }
            return res['data'];
        })
        .catch(error => {
          throw new Error('Error'); 
        })
    }
}