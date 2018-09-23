'use strict';
const express = require('express');
const reportApi = express.Router();

module.exports = (knex) => {

  reportApi.get('/all', (req, res) => {
    knex('reports')
      .then((results) => {
        return res.status(200).send({
          results
        });
      });
  });

  reportApi.get('/:id', (req, res) => {
    let report_id = req.params.id;

    if (!report_id) {
      return res.status(400).send({
        message: 'Missing report ID'
      });
    };

    knex('reports')
      .where('reports.id', report_id)
      .innerJoin('citizens', 'reports.citizen_id', '=', 'citizens.id')
      .then((results) => {
        return res.status(200).send({
          results
        });
      });
  });

  reportApi.post('/new', (req, res) => {
    let { latitude, longitude, description, safety_hazard, category, citizen_id, neighbourhood_id } = req.body;

    if (!latitude || !longitude || !description || !category || !citizen_id || !neighbourhood_id) {
      return res.status(400).send({
        message: 'Bad form data'
      });
    };

    knex('reports')
        .returning('id')
        .insert({
            latitude,
            longitude,
            image_url: '',
            description,
            safety_hazard,
            category,
            citizen_id,
            neighbourhood_id
        })
        .then((report_id) => {
            return res.status(200).send({
                report_id,
                message: 'Successfully added new report',
            });
        })
        .catch((e) => {
          console.log(JSON.stringify(e))
            return res.status(500).send({
                message: e
              });
        });
  });

  reportApi.post('/upvote', (req, res) => {
    let { report_id } = req.body;

    if (!report_id) {
      return res.status(400).send({
        message: 'Missing report ID'
      });
    };

    knex('reports')
        .where('id', report_id)
        .then((report) => {
          let upvotes = Number(report[0].upvotes) + 1;
          return knex('reports')
            .where('id', report[0].id)
            .update({
                upvotes
            })
        })
        .then(() => {
            return res.status(200).send({
              message: 'Upvote successful',
            });
        })
        .catch((e) => {
          return res.status(500).send({
            message: e
          });
        });
  });

  reportApi.post('/downvote', (req, res) => {
    let { report_id } = req.body;

    if (!report_id) {
      return res.status(400).send({
        message: 'Missing report ID'
      });
    };

    knex('reports')
        .where('id', report_id)
        .then((report) => {
          let downvotes = Number(report[0].downvotes) + 1;
          return knex('reports')
            .where('id', report[0].id)
            .update({
                downvotes
            })
        })
        .then(() => {
            return res.status(200).send({
              message: 'Downvote successful',
            });
        })
        .catch((e) => {
          return res.status(500).send({
            message: e
          });
        });
  });

  return reportApi;

}