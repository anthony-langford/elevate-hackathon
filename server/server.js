'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const knexConfig  = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(knexLogger(knex));
app.use(bodyParser.json())

// Routes
const indexApi = require('./api/index');
const citizenApi = require('./api/citizen');
const bidApi = require('./api/bid');
const reportApi = require('./api/report');
app.use('/api', indexApi(knex));
app.use('/api/citizen', citizenApi(knex));
app.use('/api/bid', bidApi(knex));
app.use('/api/report', reportApi(knex));

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});