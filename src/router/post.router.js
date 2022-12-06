const express = require('express');

const controllers = require('../controllers');
const middlewares = require('../middlewares');

const { postControllers } = controllers;
const { validatePost, validateUpdPost, validateToken } = middlewares;

const router = express.Router();

router.post('/', validateToken, validatePost, postControllers.postNewBlogPost);
router.get('/', validateToken, postControllers.getAll);
router.get('/:id', validateToken, postControllers.getById);
router.put('/:id', validateToken, validateUpdPost, postControllers.updById);

module.exports = router;