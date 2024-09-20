const { TaskController } = require('../controllers');
const { isValidToken, validateBody } = require('../middleware');
const { taskSchema } = require('../schemas');

const taskRouter = require('express').Router();

taskRouter.post('/', isValidToken, validateBody(taskSchema), TaskController.createTask);

module.exports = taskRouter;
