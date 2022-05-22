const express = require('express');
const loginRouter = require('./login/loginRouter');

const router = express();

router.use('/login', loginRouter);

module.exports = router;