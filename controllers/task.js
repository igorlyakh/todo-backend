const { HttpError } = require('../helpers');
const { Task } = require('../models');

// TODO: updateComplete()

//? getOne()

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

  async getAll(req, res, next) {
    try {
      const { _id: owner } = req.user;
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * 10;
      const result = await Task.find({ owner }, '-owner', {
        skip,
        limit,
      });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async setIsComplete(req, res, next) {}
}

module.exports = new TaskController();
