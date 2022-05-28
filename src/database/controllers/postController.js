const { getInfoPost, getInfoPostId } = require('../services/blogPostService');
const { newBlogPost } = require('../services/postService');

const createBlogPost = async (req, res) => {
  try {
    const newBlog = await newBlogPost(req.user.payload, req.body);

    return res.status(201).json(newBlog);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getInfoBlogPost = async (_req, res) => {
  const infoBlog = await getInfoPost();

  res.status(200).json(infoBlog);
};

const getInfoBlogPostId = async (req, res) => {
  const { id } = req.params;

  const infoBlog = await getInfoPostId(id);

  if (!infoBlog) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  res.status(200).json(infoBlog);
};

module.exports = {
  createBlogPost,
  getInfoBlogPost,
  getInfoBlogPostId,
};
