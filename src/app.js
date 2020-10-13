require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

mongoose.connect(
  process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use(routes);


module.exports = app;