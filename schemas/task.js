const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string().min(3).required().messages({
    'string.min': 'Заголовок должен быть не менее {#limit} символов.',
    'string.base': 'Значение поля должно быть строкой!',
    'any.required': 'Заголовок обязателен для заполнения.',
  }),
  description: Joi.string().max(32).messages({
    'string.max': 'Описание не должно быть длиннее чем {#limit} символа!',
    'string.base': 'Описание должно быть строкой!',
  }),
  isComplete: Joi.boolean(),
});

const updateTaskIsComplete = Joi.object({
  isComplete: Joi.boolean().required().messages({
    'any.required': 'Передайте значение поля!',
    'boolean.base': 'Значение поля должно быть только true или false!',
  }),
})
  .unknown(false)
  .messages({
    'object.unknown': 'Нельзя передавать дополнительные значения!',
  });

module.exports = { taskSchema, updateTaskIsComplete };
