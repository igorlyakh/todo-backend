const { TaskController } = require('../controllers');
const { isValidToken, validateBody, isValidId } = require('../middleware');
const { taskSchema } = require('../schemas');
const { updateTaskIsComplete } = require('../schemas/task');

const taskRouter = require('express').Router();

taskRouter.post('/', isValidToken, validateBody(taskSchema), TaskController.createTask);
taskRouter.delete('/:id', isValidToken, isValidId, TaskController.deleteTask);
taskRouter.get('/', isValidToken, TaskController.getAll);
taskRouter.patch(
  '/:id/complete',
  isValidToken,
  isValidId,
  validateBody(updateTaskIsComplete),
  TaskController.setIsComplete
);

module.exports = taskRouter;
