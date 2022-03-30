const express = require('express');
const asyncHandler = require('express-async-handler');

const citiesService = require('./cities.service.js');

const route = express.Router();


route.get('/:zipCode/', async(req,res) => {
    let result = await citiesService.getCityByZipCode(req.params['zipCode']);
    res.send(result);
});


module.exports = route;