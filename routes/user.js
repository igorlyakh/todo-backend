const { UserController } = require('../controllers');
const { userSchema } = require('../schemas');
const { validateBody } = require('../middleware');

const userRouter = require('express').Router();

userRouter.post(
  '/registration',
  validateBody(userSchema),
  UserController.registration
);
userRouter.post('/login');
userRouter.get('/current');
userRouter.post('/logout');

module.exports = userRouter;
