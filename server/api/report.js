'use strict';
const express = require('express');
const reportApi = express.Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3();

module.exports = (knex) => {

  aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId:  process.env.AWS_SECRET_ACCESS_KEY_ID,
    region:  process.env.AWS_REGION
  });

  const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'elevate-bucket',
        metadata: function (req, file, cb) {
          cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
          cb(null, `${Date.now().toString()}${file.originalname}`)
        }
    })
  });

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

  reportApi.post('/new', upload.single('file'), (req, res) => {
    let { location, description, safety_hazard, category, citizen_id, neighbourhood_id } = req.body;

    if (!location || !description || !category || !citizen_id || !neighbourhood_id) {
      return res.status(400).send({
        message: 'Bad form data'
      });
    };

    knex('reports')
        .returning('id')
        .insert({
            latitude: location.latitude,
            longitude: location.longitude,
            image_url: req.file.location,
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