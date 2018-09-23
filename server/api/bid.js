'use strict';
const express = require('express');
const bidApi = express.Router();

module.exports = (knex) => {

  bidApi.post('/submit', (req, res) => {
    let { report_id, contractor_id, bid_amount } = req.body;

    if (!report_id || !contractor_id || !bid_amount) {
      return res.status(400).send({
        message: 'Bad post data'
      });
    };

    knex('bids')
        .where('report_id', report_id)
        .then((reports) => {
          if (reports.length > 0) {
            for (let i = 0; i < reports.length; i++) {
              if (reports[i].bid_amount > bid_amount) {
                return res.status(200).send({
                  message: 'Bid unsuccessful'
                });
              }
            }
            // new high bid
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
          } else {
            // first bid
            knex('reports')
              .where('id', report_id)
              .then((report) => {
                if (report.length > 0) {
                  // report id exists
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
                } else {
                  return res.status(400).send({
                    message: 'No corresponding report found'
                  });
                }
              })
              .catch((e) => {
                return res.status(500).send({
                  message: e
                });
              });
          }
        })
        .catch((e) => {
          return res.status(500).send({
            message: e
          });
        });
  });

  return bidApi;
}