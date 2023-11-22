const express = require('express');
const router = express.Router();

const { TestData, TestCase, TestResult } = require('../models');

function validationProtocol(validationSubject, id) {
  return validationSubject[id].Protocol;
};

function validationHost(validationSubject, id) {
  return validationSubject[id].Host;
};

function validationHttpMethod(validationSubject, id) {
  return validationSubject[id].Http_Method;
};

function validationHeader(validationSubject, id) {
  return validationSubject[id].Header;
};

function validationQuery(validationSubject, id) {
  return validationSubject[id].Query;
};

function validationParameter(validationSubject, id) {
  return validationSubject[id].Parameter;
};

function validationPath(validationSubject, id) {
  return validationSubject[id].Path;
};

function validationBody(validationSubject, id) {
  return validationSubject[id].Body;
};

function validationCookie(validationSubject, id) {
  return validationSubject[id].Cookie;
};

function validationHttpStatusCode(validationSubject, id) {
  return validationSubject[id].Http_Status_Code;
};

function validationData(validationSubject, id) {
  return validationSubject[id].Data;
};

router.get('/', (async (req, res, next) => {

  const welcome = [
    ["/protocol/1"],
    ["/host/1"],
    ["/http-method/1"],
    ["/header/1"],
    ["/query/1"],
    ["/parameter/1"],
    ["/path/1"],
    ["/body/1"],
    ["/cookie/1"],
    ["/http-status-code/1"],
    ["/data/1"],
  ];

  res.render('status', { status: welcome });
}));

router.get('/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultProtocol = validationProtocol(validationSubject, id);
    const resultHost = validationHost(validationSubject, id);
    const resultHttpMethod = validationHttpMethod(validationSubject, id);
    const resultHeader = validationHeader(validationSubject, id);
    const resultQuery = validationQuery(validationSubject, id);
    const resultParameter = validationParameter(validationSubject, id);
    const resultPath = validationPath(validationSubject, id);
    const resultBody = validationBody(validationSubject, id);
    const resultCookie = validationCookie(validationSubject, id);
    const resultHttpStatusCode = validationHttpStatusCode(validationSubject, id);
    const resultData = validationData(validationSubject, id);

    const result = [
      [resultProtocol],
      [resultHost],
      [resultHttpMethod],
      [resultHeader],
      [resultQuery],
      [resultParameter],
      [resultPath],
      [resultBody],
      [resultCookie],
      [resultHttpStatusCode],
      [resultData]
    ];

    res.render('status', { status: result });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/protocol/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultProtocol = validationProtocol(validationSubject, id);

    res.render('status', { status: [resultProtocol] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/host/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultHost = validationHost(validationSubject, id);

    res.render('status', { status: [resultHost] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/http-method/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultHttpMethod = validationHttpMethod(validationSubject, id);

    res.render('status', { status: [resultHttpMethod] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/header/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultHeader = validationHeader(validationSubject, id);

    res.render('status', { status: [resultHeader] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/query/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultQuery = validationQuery(validationSubject, id);

    res.render('status', { status: [resultQuery] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/parameter/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultParameter = validationParameter(validationSubject, id);

    res.render('status', { status: [resultParameter] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/path/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultPath = validationPath(validationSubject, id);

    res.render('status', { status: [resultPath] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/body/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultBody = validationBody(validationSubject, id);

    res.render('status', { status: [resultBody] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/cookie/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultCookie = validationCookie(validationSubject, id);

    res.render('status', { status: [resultCookie] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/http-status-code/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultHttpStatusCode = validationHttpStatusCode(validationSubject, id);

    res.render('status', { status: [resultHttpStatusCode] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/data/:id', (async (req, res, next) => {
  const validationSubject = await TestData.findAll({});
  const id = req.params.id - 1;

  if (isNaN(id) == false && validationSubject[id] != null && typeof (id) == 'number') {
    const resultData = validationData(validationSubject, id);

    res.render('status', { status: [resultData] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

module.exports = router;
