const services = require('../services');

const { postServices } = services;

const postNewBlogPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const blogPost = postServices.postNewBlogPost(id, title, content, categoryIds);
    return res.status(201).json(blogPost);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const posts = await postServices.getAll();
    return res.status(200).json(posts);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await postServices.getById(id);
    return res.status(200).json(posts);
  } catch (e) {
      return res.status(404).json({ message: 'Post does not exist' }); 
  }
};

const updById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const posts = await postServices.updById(id, title, content);
    return res.status(200).json(posts);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAll,
  postNewBlogPost,
  getById,
  updById,
};