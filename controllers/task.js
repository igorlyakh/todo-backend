const { Task } = require('../models');

class TaskController {
  async createTask(req, res, next) {
    try {
      const result = await Task.create({ ...req.body });
      res.status(201).json({ ...result });
    } catch (error) {
      next(error);
    }
  }
}
