const express = require('express');

const controllers = require('../controllers');
const middlewares = require('../middlewares');

const { userControllers } = controllers;
const { validateLogin } = middlewares;

const router = express.Router();

router.post('/', validateLogin, userControllers.postNewLogin);

module.exports = router;