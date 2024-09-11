const express = require('express');
const questionsController = require('../controllers/questionsControllers')

const route = express.Router();

route.use('/da', questionsController.getQuestions)

module.exports = route;