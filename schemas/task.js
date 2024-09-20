const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string().min(3).required().messages({
    'string.min': 'Заголовок должен быть не менее {#limit} символов.',
    'any.required': 'Заголовок обязателен для заполнения.',
  }),
  description: Joi.string().max(32).messages({
    'string.max': 'Описание не должно быть длиннее чем {#limit} символа!',
    'string.base': 'Описание должно быть строкой!',
  }),
  isComplete: Joi.boolean(),
});

module.exports = taskSchema;
