const axios = require('axios')
const NotFoundError = require('../common/errors/not-found.error')

module.exports = {
    async getCityDataByZipCode(zipCode) {
        return axios
        .get('https://api.zippopotam.us/us/' + zipCode)
        .then(res => {
            if (!res) {
                throw new NotFoundError('City not found!');
            }
            return res['data']['places'][0]['place name']  +", "+ res['data']['places'][0]['state abbreviation']+ ", "+res['data']['country'];
        })
        .catch(error => {
          throw new Error('Error'); 
        })
    }
}