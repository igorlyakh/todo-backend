const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().min(6).required().messages({
    'string.min': 'Email должен быть не менее {#limit} символов.',
    'any.required': 'Email обязателен для заполнения.',
  }),
  name: Joi.string().min(3).required().messages({
    'string.min': 'Имя должно быть не менее {#limit} символов.',
    'any.required': 'Имя обязательно для заполнения.',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Пароль должен быть не менее {#limit} символов.',
    'any.required': 'Пароль обязателен для заполнения.',
  }),
});

module.exports = userSchema;
