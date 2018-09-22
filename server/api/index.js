'use strict';
const express = require('express');
const indexApi = express.Router();

module.exports = (knex) => {

  indexApi.get('/', (req, res) => {

    return res.status(200).send({
        message: 'Success'
      });

  });

  return indexApi;

}