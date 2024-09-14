const userRouter = require('express').Router();

userRouter.post('/registration');
userRouter.post('/login');
userRouter.get('/current');
userRouter.post('/logout');

module.exports = userRouter;
