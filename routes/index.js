var express = require('express');
var router = express.Router();

const { check, validationResult } = require('express-validator');

const { TestData } = require('../models');
const { TestCase } = require('../models');
const { TestResult } = require('../models');

router.get("/", (req, res, next) => {
  res.send("Hello World");
});

router.get('/test/data', function (req, res, next) {
  res.render('TestData', { title: 'Express' });
});

router.post('/test/data/upload',

  [check('Test_Data_Id').isByteLength({ min: 1, max: 500 })],
  [check('Test_Data_Name').isByteLength({ min: 1, max: 500 })],
  [check('Test_Data_Server_Name').isByteLength({ min: 1, max: 500 })],
  [check('Protocol').isByteLength({ min: 1, max: 500 })],
  [check('Host').isByteLength({ min: 1, max: 500 })],
  [check('Http_Method').isByteLength({ min: 1, max: 500 })],
  [check('Header').isByteLength({ min: 1, max: 500 })],
  [check('Query').isByteLength({ min: 1, max: 500 })],
  [check('Parameter').isByteLength({ min: 1, max: 500 })],
  [check('Path').isByteLength({ min: 1, max: 500 })],
  [check('Body').isByteLength({ min: 1, max: 500 })],
  [check('Cookie').isByteLength({ min: 1, max: 500 })],
  [check('Http_Status_Code').isByteLength({ min: 1, max: 500 })],
  [check('Data').isByteLength({ min: 1, max: 500 })],

  function (req, res, next) {
    let errs = validationResult(req);

    if (errs['errors'].length > 0) {
      res.render('index', { errs: errs['errors'] });
    }
    else {
      let param = JSON.parse(JSON.stringify(req.body));

      const data = TestData.create({
        Test_Data_Id: param['Test_Data_Id'],
        Test_Data_Name: param['Test_Data_Name'],
        Test_Data_Server_Name: param['Test_Data_Server_Name'],
        Protocol: param['Protocol'],
        Host: param['Host'],
        Http_Method: param['Http_Method'],
        Header: param['Header'],
        Query: param['Query'],
        Parameter: param['Parameter'],
        Path: param['Path'],
        Body: param['Body'],
        Cookie: param['Cookie'],
        Http_Status_Code: param['Http_Status_Code'],
        Data: param['Data'],
      });

      res.render('Uploaded');
    }
  }
);

module.exports = router;
