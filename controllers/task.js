const { HttpError } = require('../helpers');
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

  async deleteTask(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Task.findByIdAndDelete(id);
      if (!result) {
        HttpError(404, 'Данная задача не найдена!');
      }
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TaskController();
