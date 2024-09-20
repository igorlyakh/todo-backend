const userSchema = require('./user');
const taskSchema = require('./task');

module.exports = { ...userSchema, taskSchema };
