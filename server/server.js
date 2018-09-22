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

const indexApi = require('./api/index');
app.use('/api', indexApi(knex));

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});