'use strict';
const express = require('express');
const bidApi = express.Router();

module.exports = (knex) => {

  bidApi.post('/submit', (req, res) => {
    let { report_id, contractor_id, bid_amount } = req.body;

    console.log(req.body);

    if (!report_id || !contractor_id || !bid_amount) {
      return res.status(400).send({
        message: 'Bad post data'
      });
    };

    knex('bids')
        .returning('id')
        .insert({
            report_id,
            contractor_id,
            bid_amount,
        })
        .then((bid_id) => {
            return res.status(200).send({
              bid_id,
              message: 'Bid successful',
            });
        })
        .catch((e) => {
          return res.status(500).send({
            message: e
          });
        });
  });

  return bidApi;
}