const express = require('express');
const authRoute = require('./authRoute');
const questRoute = require('./questionsRoute');

const route = express.Router();

route.use('/auth', authRoute);
route.use('/quest', questRoute)

module.exports = route;