const repository = require('./cities.repository');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const axios = require('axios');
let test_data = {data:{"post code": "28173", "country": "United States", "country abbreviation": "US", "places": [{"place name": "Waxhaw", "longitude": "-80.7278", "state": "North Carolina", "state abbreviation": "NC", "latitude": "34.9251"}]}};
const { assert } = require("@sinonjs/referee");
const citiesRepository = require('./cities.repository');


describe("Testing cities.repository file.", function () {
  
    describe("Testing the 'getCityDataByZipCode' function.", function () {
      it("returns city data by zip code ", async function () {
        const stub = sinon.stub(axios, 'get');

        stub.withArgs('https://api.zippopotam.us/us/28173').returns(Promise.resolve(test_data));

        let res = await citiesRepository.getCityDataByZipCode(28173);
        
        expect(res).to.be.equal("Waxhaw, NC, United States");

        assert.equals(stub.withArgs('https://api.zippopotam.us/us/28173').callCount, 1);

      })

    })

})