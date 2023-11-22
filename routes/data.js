const express = require('express');
const router = express.Router();

const { TestData } = require('../models');

const { check, validationResult } = require('express-validator');

router.get('/', (req, res, next) => {
  res.render('data');
});

router.post('/create',

  [check('Test_Data_Id').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Test_Data_Name').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Test_Data_Server_Name').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Protocol').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Host').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Http_Method').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Header').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Query').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Parameter').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Path').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Body').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Cookie').isByteLength({ min: 1, max: 255 }).withMessage("Not Null")],
  [check('Http_Status_Code').isByteLength({ min: 1, max: 255 }).withMessage("Not Null").isInt({ min: 1, max: 255 }).withMessage("Integer")],
  [check('Data').isByteLength({ min: 1, max: 65535 }).withMessage("Not Null")],

  function (req, res, next) {
    let errs = validationResult(req);

    if (errs['errors'].length > 0) {
      res.render('data', { errs: errs['errors'] });
    }
    else {
      let param = JSON.parse(JSON.stringify(req.body));

      TestData.create({
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

      res.render('status', { status: ["Created Test Data"] });
    }
  }
);

router.get('/read', (async (req, res, next) => {
  const subject = await TestData.findAll({});

  res.send(subject);
}));

router.get('/read/:id', (async (req, res, next) => {
  const id = req.params.id - 1;

  const subject = await TestData.findAll({});

  if (isNaN(id) == false && subject[id] != null && typeof (id) == 'number') {
    res.send(subject[id]);
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/update/:id', (async (req, res, next) => {
  const id = req.params.id - 1;

  const subject = await TestData.findAll({});

  if (isNaN(id) == false && subject[id] != null && typeof (id) == 'number') {
    res.render('update_data', { id: subject[id] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/delete', (async (req, res, next) => {
  await TestData.destroy({
    where: {}
  });

  const subject = await TestData.findAll({});

  res.send(subject);
}));

router.get('/delete/:id', (async (req, res, next) => {
  let id = req.params.id - 1;

  let subject = await TestData.findAll({});

  if (isNaN(id) == false && subject[id] != null && typeof (id) == 'number') {
    id = req.params.id;

    await TestData.destroy({
      where: { id: id }
    });

    subject = await TestData.findAll({});

    res.send(subject);
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

module.exports = router;
