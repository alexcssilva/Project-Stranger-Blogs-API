const express = require('express');
const loginRouter = require('./login/loginRouter');
const userRouter = require('./user/userRouter');

const router = express();

router.use('/login', loginRouter);

router.use('/user', userRouter);

module.exports = router;