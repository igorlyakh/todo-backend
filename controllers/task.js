const { Task } = require('../models');

class TaskController {
  async createTask(req, res, next) {
    try {
      const { _id: owner } = req.user;
      const result = await Task.create({ ...req.body, owner });
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TaskController();
