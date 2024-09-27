const userSchema = require('./user');
const { taskSchema, taskUpdate } = require('./task');

module.exports = { ...userSchema, taskSchema, taskUpdate };
