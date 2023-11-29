const express = require('express');
const router = express.Router();

const { TestCase } = require('../models');

const { validationResult } = require('express-validator');
const { caseValidation } = require('../validation');

router.get('/', (req, res, next) => {
  res.render('case');
});

router.post('/create', caseValidation, function (req, res, next) {
  let errs = validationResult(req);

  if (errs['errors'].length > 0) {
    res.render('case', { errs: errs['errors'] });
  }
  else {
    let param = JSON.parse(JSON.stringify(req.body));

    TestCase.create({
      Test_Case_Id: param['Test_Case_Id'].trim(),
      Test_Name: param['Test_Name'].trim(),
      Test_Interval: param['Test_Interval'].trim(),
      Test_Creation_Date: param['Test_Creation_Date'].trim(),
      Test_Data_List: param['Test_Data_List'].trim(),
      Test_Start_Date: param['Test_Start_Date'].trim(),
      Test_End_Date: param['Test_End_Date'].trim(),
      Test_Success_Ratio: param['Test_Success_Ratio'].trim(),
      Test_Error_Ratio: param['Test_Error_Ratio'].trim(),
    });

    res.render('status', { status: ["Created Test Case"] });
  }
});

router.get('/read', (async (req, res, next) => {

  const status = await TestCase.findAll({});

  res.send(status);
}));

router.get('/read/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestCase.findAll({
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

  const subject = await TestCase.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    res.render('update_case', { id: subject[0] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.post('/update', caseValidation, async function (req, res, next) {
  let errs = validationResult(req);
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];

  if (errs['errors'].length > 0) {
    const subject = await TestCase.findAll({
      where: {
        id: id
      }
    });

    res.render('update_case', { id: subject[0], errs: errs['errors'] });
  }
  else {
    TestCase.update({
      Test_Case_Id: param['Test_Case_Id'].trim(),
      Test_Name: param['Test_Name'].trim(),
      Test_Interval: param['Test_Interval'].trim(),
      Test_Creation_Date: param['Test_Creation_Date'].trim(),
      Test_Data_List: param['Test_Data_List'].trim(),
      Test_Start_Date: param['Test_Start_Date'].trim(),
      Test_End_Date: param['Test_End_Date'].trim(),
      Test_Success_Ratio: param['Test_Success_Ratio'].trim(),
      Test_Error_Ratio: param['Test_Error_Ratio'].trim(),
    }, {
      where: { id: id }
    });

    res.render('status', { status: ["Updated Test Data"] });
  }
});

router.get('/delete', (async (req, res, next) => {
  await TestCase.destroy({
    where: {}
  });

  res.render('status', { status: ["Deleted Test Case"] });
}));

router.get('/delete/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestCase.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    await TestCase.destroy({
      where: { id: id }
    });

    res.render('status', { status: ["Deleted Test Case"] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

module.exports = router;
