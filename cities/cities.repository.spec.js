const repository = require('./cities.repository');
const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const axios = require('axios');
let test_data = {"post code": "28173", "country": "United States", "country abbreviation": "US", "places": [{"place name": "Waxhaw", "longitude": "-80.7278", "state": "North Carolina", "state abbreviation": "NC", "latitude": "34.9251"}]};
let test_data2 = {"post code": "2817311", "country": "United States", "country abbreviation": "US", "places": [{"place name": "Waxhaw", "longitude": "-80.7278", "state": "North Carolina", "state abbreviation": "NC", "latitude": "34.9251"}]};
const stub = sinon.stub(axios, 'get');


describe("Testing cities.repository file.", function () {
    // If timeout is set to 0, it means it will wait for a test result
    // for as long as it takes.
    // this.timeout(0);

    describe("Testing the 'getDataCityByZipCode' function.", function () {
      it("returns city data by zip code ", async function () {
        
        
        stub.withArgs('https://api.zippopotam.us/us/28173').returns(test_data);

        let res = await axios.get('https://api.zippopotam.us/us/28173');

        expect(res).to.be.equal(test_data);

        
      }),
      it("returns city data by zip codesa ", async function () {
        
        
        stub.withArgs('https://api.zippopotam.us/us/28173').returns(test_data);

        let res = await axios.get('https://api.zippopotam.us/us/28173');

        expect(res).to.be.equal(test_data2);

        
      })
  
    
    })

})