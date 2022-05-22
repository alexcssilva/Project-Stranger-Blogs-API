const express = require('express');
const userRouter = require('./user/userRouter');

const router = express();

router.use('/login', userRouter);

module.exports = router;