const express = require('express');
const categoryRouter = require('./categories/categoryRouter');
const loginRouter = require('./login/loginRouter');
const userRouter = require('./user/userRouter');

const router = express();

router.use('/login', loginRouter);

router.use('/user', userRouter);

router.use('/categories', categoryRouter);

module.exports = router;