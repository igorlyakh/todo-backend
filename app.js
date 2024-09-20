const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { userRouter, taskRouter } = require('./routes');

require('colors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/task', taskRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found!' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error!' } = err;
  res.status(status).json({ message });
});

const { PORT = 3000, DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('\nDB connection successful!'.magenta);
    app.listen(PORT, () => {
      console.log(`Server start on port ${PORT}!`.magenta);
    });
  })
  .catch(() => {
    console.log('\nConnection error!\nServer is shuting down!\n'.red.bold);
    process.exit(1);
  });
