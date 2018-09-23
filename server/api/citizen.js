'use strict';
const express = require('express');
const citizenApi = express.Router();

module.exports = (knex) => {

  citizenApi.get('/all', (req, res) => {
    knex('citizens')
      .then((results) => {
        return res.status(200).send({
          results
        });
      });
  });

  citizenApi.get('/:id', (req, res) => {
    knex('citizens').where('id', req.params.id)
      .then((results) => {
        return res.status(200).send({
          results
        });
      });
  });

  return citizenApi;
}