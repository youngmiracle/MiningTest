const express = require('express');
const userController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const route = express.Router();


route.post('/registration', userController.registration);
route.post('/login', userController.login);
route.get('/auth', authMiddleware, userController.check);

module.exports = route;