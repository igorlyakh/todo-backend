const { TaskController } = require('../controllers');
const { isValidToken, validateBody } = require('../middleware');
const { taskSchema } = require('../schemas');

const taskRouter = require('express').Router();

taskRouter.post('/', isValidToken, validateBody(taskSchema), TaskController.createTask);
taskRouter.delete('/:id', isValidToken, TaskController.deleteTask);
taskRouter.get('/', isValidToken, TaskController.getAll);
taskRouter.patch('/:id/complete', isValidToken);

module.exports = taskRouter;
