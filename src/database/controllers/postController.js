const { getInfoPost } = require('../services/blogPostService');
const { newBlogPost } = require('../services/postService');

const createBlogPost = async (req, res) => {
  try {
    const newBlog = await newBlogPost(req.user.payload, req.body);
    console.log('; newBlog\n\n\n\n\n\n\n', newBlog);

    return res.status(201).json(newBlog);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getInfoBlogPost = async (_req, res) => {
  const infoBlog = await getInfoPost();

  res.status(200).json(infoBlog);
};

module.exports = {
  createBlogPost,
  getInfoBlogPost,
};