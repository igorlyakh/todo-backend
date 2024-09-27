const Joi = require('joi');

const registrationSchema = Joi.object({
  email: Joi.string().min(6).required().messages({
    'string.min': 'Email должен быть не менее {#limit} символов.',
    'string.base': 'Значение поля должно быть строкой!',
    'any.required': 'Email обязателен для заполнения.',
  }),
  name: Joi.string().min(3).required().messages({
    'string.min': 'Имя должно быть не менее {#limit} символов.',
    'string.base': 'Значение поля должно быть строкой!',
    'any.required': 'Имя обязательно для заполнения.',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Пароль должен быть не менее {#limit} символов.',
    'string.base': 'Значение поля должно быть строкой!',
    'any.required': 'Пароль обязателен для заполнения.',
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().min(6).required().messages({
    'string.min': 'Email должен быть не менее {#limit} символов.',
    'string.base': 'Значение поля должно быть строкой!',
    'any.required': 'Email обязателен для заполнения.',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Пароль должен быть не менее {#limit} символов.',
    'string.base': 'Значение поля должно быть строкой!',
    'any.required': 'Пароль обязателен для заполнения.',
  }),
});

module.exports = { registrationSchema, loginSchema };
