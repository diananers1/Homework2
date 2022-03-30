const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const rewire = require("rewire");
const faker = require('@faker-js/faker').faker;
const service= require('./cities.service');


describe("Testing cities.service file.", function () {

    const citiesService = rewire("./cities.service");

    describe("Testing the 'getCityByZipCode' function.", function () {
        it("returns city data by zip code ", async function () {
            faker.seed(555);
            let myCity = faker.address.cityName() + "," + faker.address.stateAbbr() + ", " + faker.address.country()
            citiesService.__set__({
                citiesRepository: {
                    getCityDataByZipCode: () => {
                        return myCity;    
                    } 
                }
            });

            await expect(citiesService.getCityByZipCode("28173")).to.eventually.be.equal(myCity);
        
        })

        it("should return NotFoundError", async function () {
            citiesService.__set__({
                citiesRepository: {
                    getCityDataByZipCode: () => {
                        return ''; 
                    } 
                }
            });

            await expect(citiesService.getCityByZipCode("")).to.eventually.be.rejectedWith('City not found!');
        
        })

    })

})


