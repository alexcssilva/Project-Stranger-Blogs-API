const express = require('express');
const categoryRouter = require('./categories/categoryRouter');
const loginRouter = require('./login/loginRouter');
const postRouter = require('./post/postRouter');
const userRouter = require('./user/userRouter');

const router = express();

router.use('/login', loginRouter);

router.use('/user', userRouter);

router.use('/categories', categoryRouter);

router.use('/post', postRouter);

module.exports = router;