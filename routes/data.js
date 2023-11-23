const express = require('express');
const router = express.Router();

const { TestData } = require('../models');

const { check, validationResult } = require('express-validator');

router.get('/', (req, res, next) => {
  res.render('data');
});

router.post('/create',

  [check('Test_Data_Id').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Test_Data_Name').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Test_Data_Server_Name').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Protocol').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Host').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Http_Method').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Header').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Query').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Parameter').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Path').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Body').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Cookie').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Http_Status_Code').trim().not().isEmpty().withMessage("Not Null").isInt().withMessage("Int")],
  [check('Data').trim().not().isEmpty().withMessage("Not Null")],

  function (req, res, next) {
    let errs = validationResult(req);

    if (errs['errors'].length > 0) {
      res.render('data', { errs: errs['errors'] });
    }
    else {
      let param = JSON.parse(JSON.stringify(req.body));

      TestData.create({
        Test_Data_Id: param['Test_Data_Id'].trim(),
        Test_Data_Name: param['Test_Data_Name'].trim(),
        Test_Data_Server_Name: param['Test_Data_Server_Name'].trim(),
        Protocol: param['Protocol'].trim(),
        Host: param['Host'].trim(),
        Http_Method: param['Http_Method'].trim(),
        Header: param['Header'].trim(),
        Query: param['Query'].trim(),
        Parameter: param['Parameter'].trim(),
        Path: param['Path'].trim(),
        Body: param['Body'].trim(),
        Cookie: param['Cookie'].trim(),
        Http_Status_Code: param['Http_Status_Code'].trim(),
        Data: param['Data'].trim(),
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
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    res.send(subject[0]);
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/update/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    res.render('update_data', { id: subject[0] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.post('/update',

  [check('Test_Data_Id').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Test_Data_Name').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Test_Data_Server_Name').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Protocol').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Host').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Http_Method').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Header').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Query').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Parameter').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Path').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Body').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Cookie').trim().not().isEmpty().withMessage("Not Null").isLength({ max: 255 }).withMessage("Reached max(255)")],
  [check('Http_Status_Code').trim().not().isEmpty().withMessage("Not Null").isInt().withMessage("Int")],
  [check('Data').trim().not().isEmpty().withMessage("Not Null")],

  async function (req, res, next) {
    let errs = validationResult(req);
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param['id'];

    if (errs['errors'].length > 0) {
      const subject = await TestData.findAll({});

      res.render('update_data', { id: subject[id - 1], errs: errs['errors'] });
    }
    else {
      TestData.update({
        Test_Data_Id: param['Test_Data_Id'].trim(),
        Test_Data_Name: param['Test_Data_Name'].trim(),
        Test_Data_Server_Name: param['Test_Data_Server_Name'].trim(),
        Protocol: param['Protocol'].trim(),
        Host: param['Host'].trim(),
        Http_Method: param['Http_Method'].trim(),
        Header: param['Header'].trim(),
        Query: param['Query'].trim(),
        Parameter: param['Parameter'].trim(),
        Path: param['Path'].trim(),
        Body: param['Body'].trim(),
        Cookie: param['Cookie'].trim(),
        Http_Status_Code: param['Http_Status_Code'].trim(),
        Data: param['Data'].trim(),
      }, {
        where: { id: id }
      });

      res.render('status', { status: ["Updated Test Data"] });
    }
  }
);

router.get('/delete', (async (req, res, next) => {
  await TestData.destroy({
    where: {}
  });

  res.render('status', { status: ["Deleted Test Data"] });
}));

router.get('/delete/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    await TestData.destroy({
      where: { id: id }
    });

    res.render('status', { status: ["Deleted Test Data"] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

module.exports = router;
