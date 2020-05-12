const express = require('express');
require('./db/mongoose'); // makes the file run, we dont get anything in a variable to use.
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;