const mongoose = require('mongoose');
const express = require('express');
const { port, mongodb_uri } = require('./config');
const teachersRouter = require('./routes/teachers.route');

mongoose.connect(mongodb_uri)
  .then(() => {
    console.log('Mongo DB connected');
  });

const app = express();

app.use(express.json());

app.use('/teachers', teachersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});