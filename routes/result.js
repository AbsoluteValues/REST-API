const express = require('express');
const router = express.Router();

const { TestResult } = require('../models');

const { check, validationResult } = require('express-validator');

router.get('/', (req, res, next) => {
  res.render('result');
});

router.post('/create',

  [check('Test_Data_Id').isByteLength({ min: 1, max: 500 })],
  [check('Test_Case_Id').isByteLength({ min: 1, max: 500 })],
  [check('Response_Ms').isByteLength({ min: 1, max: 500 })],
  [check('Http_Status_Code').isByteLength({ min: 1, max: 500 })],
  [check('Is_Success').isByteLength({ min: 1, max: 500 })],
  [check('Response_Data').isByteLength({ min: 1, max: 500 })],

  function (req, res, next) {
    let errs = validationResult(req);

    if (errs['errors'].length > 0) {
      res.render('result', { errs: errs['errors'] });
    }
    else {
      let param = JSON.parse(JSON.stringify(req.body));

      TestResult.create({
        Test_Data_Id: param['Test_Data_Id'],
        Test_Case_Id: param['Test_Case_Id'],
        Response_Ms: param['Response_Ms'],
        Http_Status_Code: param['Http_Status_Code'],
        Is_Success: param['Is_Success'],
        Response_Data: param['Response_Data'],
      });

      res.render('status', {status:["Created Test Result"]});
    }
  }
);

router.get('/read', (async (req, res, next) => {

  const status = await TestResult.findAll({});
    
  res.send(status);
}));

router.get('/read/:id', (async (req, res, next) => {
  const id = req.params.id - 1;

  const status = await TestResult.findAll({});
    
  res.send(status[id]);
}));

module.exports = router;
