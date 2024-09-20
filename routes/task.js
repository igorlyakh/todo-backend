const { TaskController } = require('../controllers');
const { isValidToken } = require('../middleware');

const taskRouter = require('express').Router();

taskRouter.post('/', isValidToken, TaskController.createTask);

module.exports = taskRouter;
