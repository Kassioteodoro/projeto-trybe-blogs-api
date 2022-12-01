const express = require('express');

const controllers = require('../controllers');
const middlewares = require('../middlewares');

const { categoryControllers } = controllers;
const { validateToken } = middlewares;

const router = express.Router();

router.post('/', validateToken, categoryControllers.postNewCategory);
router.get('/', validateToken, categoryControllers.getAll);

module.exports = router;