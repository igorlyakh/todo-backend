const bcrypt = require('bcrypt');

const { HttpError } = require('../helpers');
const { User } = require('../models');

class UserController {
  async registration(req, res, next) {
    try {
      const { password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await User.create({
        ...req.body,
        password: hashedPassword,
      });
      res.status(201).json({
        id: result._id,
        email: result.email,
      });
    } catch (error) {
      if (error.code === 11000) {
        next(HttpError(409, 'Email in use!'));
      }
      next(error);
    }
  }
}

module.exports = new UserController();
