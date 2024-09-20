const { UserController } = require('../controllers');
const { registrationSchema, loginSchema } = require('../schemas');
const { validateBody, isValidToken } = require('../middleware');

const userRouter = require('express').Router();

userRouter.post(
  '/registration',
  validateBody(registrationSchema),
  UserController.registration
);
userRouter.post('/login', validateBody(loginSchema), UserController.login);
userRouter.get('/current', isValidToken, UserController.current);
userRouter.post('/logout', isValidToken, UserController.logout);

module.exports = userRouter;
