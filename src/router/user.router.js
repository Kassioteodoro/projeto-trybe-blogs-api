const express = require('express');

const controllers = require('../controllers');
const middlewares = require('../middlewares');

const { userControllers } = controllers;
const { validateUser } = middlewares;

const router = express.Router();

router.post('/', validateUser, userControllers.postNewUser);

module.exports = router;