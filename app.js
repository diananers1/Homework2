const errorHandler = require('./common/middlewares/error-handler.middleware');
const citiesController = require('./cities/cities.controller.js');
const express = require('express');
const app = express();


app.listen(3000, () => {
     console.log("Server is running");
});

app.get('/', (req, res) => {
     res.send('Hello!');
});

app.use('/cities', citiesController);

app.use(errorHandler);
