const express = require('express');
const router = express.Router();

//Controllers
const SliderController = require('../../Controllers/Slider/SliderController');

router.get('/', SliderController.getSlider);

module.exports = router;