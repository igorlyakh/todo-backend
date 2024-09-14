const { UserController } = require('../controllers');
const { userSchema } = require('../schemas');
const { validateBody, isValidToken } = require('../middleware');

const userRouter = require('express').Router();

userRouter.post('/registration', validateBody(userSchema), UserController.registration);
userRouter.post('/login', validateBody(userSchema), UserController.login);
userRouter.get('/current', isValidToken, UserController.current);
userRouter.post('/logout');

module.exports = userRouter;
