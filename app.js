const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

//Envs
const api = process.env.APP_URL;

//const Slider = require('./app/models/SliderModels');

//Routers
 const SliderRouter = require('./app/Routers/SliderRouter/SliderRouter');


//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());

//Use Routers
 app.use('/api/carousel', SliderRouter);


module.exports = app;