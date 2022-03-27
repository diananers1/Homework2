const errorHandler = require('./common/middlewares/error-handler.middleware');

const citiesController = require('./cities/cities.controller.js');
// const { square } = require('./common/helpers/math.helper');
const express = require('express');
const app = express();

// const dotenv = require('dotenv');

app.listen(3000, () => {
     console.log("Server is running");
});

app.get('/', (req, res) => {
     res.send('Hello World!');
});

app.use('/cities', citiesController );

app.use(errorHandler);
