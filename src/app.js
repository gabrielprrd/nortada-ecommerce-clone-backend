const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();

// Enviroment variables configuration
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? path.resolve(__dirname, '..', '.env.test') : path.resolve(__dirname, '..', '.env'),
});

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use(require('./routes'));

// Controllers
app.use(require('./controllers/AuthController'));

module.exports = app;
