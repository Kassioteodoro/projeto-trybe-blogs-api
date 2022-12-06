const services = require('../services');

const isBodyValid = (title, content) => title && content;

const { postServices } = services;

module.exports = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { user } = req;
console.log('aqui o', user);
  if (isBodyValid(title, content)) {
    return res.status(401).json({
      message: 'Unauthorized user',
    });
  }

  const post = await postServices.getById(id);
    if (post.dataValues.userId !== user.id) {
      return res.status(400).json({
        message: 'Some required fields are missing',
      });
    }

  return next();
};