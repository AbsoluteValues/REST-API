const express = require('express');
const router = express.Router();

const { TestCase, TestData } = require('../models');

const { check, validationResult } = require('express-validator');

router.get('/', (req, res, next) => {
  res.render('case');
});

router.post('/create',

  [check('Test_Case_Id').isByteLength({ min: 1, max: 500 })],
  [check('Test_Name').isByteLength({ min: 1, max: 500 })],
  [check('Test_Interval').isByteLength({ min: 1, max: 500 })],
  [check('Test_Creation_Date').isByteLength({ min: 1, max: 500 })],
  [check('Test_Data_List').isByteLength({ min: 1, max: 500 })],
  [check('Test_Start_Date').isByteLength({ min: 1, max: 500 })],
  [check('Test_End_Date').isByteLength({ min: 1, max: 500 })],
  [check('Test_Success_Ratio').isByteLength({ min: 1, max: 500 })],
  [check('Test_Error_Ratio').isByteLength({ min: 1, max: 500 })],

  function (req, res, next) {
    let errs = validationResult(req);

    if (errs['errors'].length > 0) {
      res.render('case', { errs: errs['errors'] });
    }
    else {
      let param = JSON.parse(JSON.stringify(req.body));

      TestCase.create({
        Test_Case_Id: param['Test_Case_Id'],
        Test_Name: param['Test_Name'],
        Test_Interval: param['Test_Interval'],
        Test_Creation_Date: param['Test_Creation_Date'],
        Test_Data_List: param['Test_Data_List'],
        Test_Start_Date: param['Test_Start_Date'],
        Test_End_Date: param['Test_End_Date'],
        Test_Success_Ratio: param['Test_Success_Ratio'],
        Test_Error_Ratio: param['Test_Error_Ratio'],
      });

      res.render('status', {status:["Created Test Case"]});
    }
  }
);

router.get('/read', (async (req, res, next) => {

  const status = await TestCase.findAll({});
    
  res.send(status);
}));

router.get('/read/:id', (async (req, res, next) => {
  const id = req.params.id - 1;

  const status = await TestCase.findAll({});
    
  res.send(status[id]);
}));

router.get('/delete', (async (req, res, next) => {
  await TestCase.destroy({
    where: {}
  });
  
  const status = await TestCase.findAll({});

  res.send(status);
}));

router.get('/delete/:id', (async (req, res, next) => {
  const id = req.params.id;

  await TestCase.destroy({
    where: { id: id }
  });

  const status = await TestCase.findAll({});

  res.send(status);
}));

module.exports = router;
