const express = require('express');
const loginRouter = require('./user/loginRouter');

const router = express();

router.use('/login', loginRouter);

module.exports = router;