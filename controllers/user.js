const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { HttpError } = require('../helpers');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

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

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        HttpError(401, 'Wrong password or email!');
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        HttpError(401, 'Wrong password or email!');
      }
      const payload = { id: user._id };
      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '30d',
      });
      await User.findByIdAndUpdate(user._id, { token });
      res.status(200).json({
        email,
        token,
      });
    } catch (error) {
      next(error);
    }
  }

  async current(req, res, next) {
    try {
      const { email, token } = req.user;
      res.status(200).json({ email, token });
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { _id: id } = req.user;
      await User.findByIdAndUpdate(id, { token: null });
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
