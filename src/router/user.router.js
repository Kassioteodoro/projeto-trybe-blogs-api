const express = require('express');

const controllers = require('../controllers');
const middlewares = require('../middlewares');

const { userControllers } = controllers;
const { validateUser, validateToken } = middlewares;

const router = express.Router();

router.post('/', validateUser, userControllers.postNewUser);
router.get('/', validateToken, userControllers.getAll);

module.exports = router;