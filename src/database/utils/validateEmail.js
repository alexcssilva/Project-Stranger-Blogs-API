const validateEmail = async (req, res, next) => {
  const { email, password } = req.body;
  const checkEmail = /\S+@\S+.\S+/;

  if (!email && !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!checkEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

module.exports = validateEmail;