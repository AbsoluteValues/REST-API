const express = require('express');
const router = express.Router();

const { TestData, TestCase, TestResult } = require('../models');
const { DATE } = require('sequelize');

let ratio = {
  success: 0,
  error: 0,
};

function validationProtocol(validationSubject) {
  const Protocol = validationSubject.Protocol;

  if (Protocol == 'http' || Protocol == 'https') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

function validationHost(validationSubject, id) {
  const Host = validationSubject.Host;

  if (Host == 'localhost') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

function validationHttpMethod(validationSubject) {
  const HttpMethod = validationSubject.HttpMethod;

  if (HttpMethod == 'get' || HttpMethod == 'GET' || HttpMethod == 'post' || HttpMethod == 'POST') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

function validationHeader(validationSubject) {
  const Header = validationSubject.Header;

  if (Header == '') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

function validationQuery(validationSubject) {
  const Query = validationSubject.Query;

  if (Query == '') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

function validationParameter(validationSubject) {
  const Parameter = validationSubject.Parameter;

  if (Parameter == '') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

function validationPath(validationSubject) {
  const Path = validationSubject.Path;

  if (Path == '') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

function validationBody(validationSubject) {
  const Body = validationSubject.Body;

  if (Body == '') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

function validationCookie(validationSubject) {
  const Cookie = validationSubject.Cookie;

  if (Cookie == '') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

function validationHttpStatusCode(validationSubject) {
  const HttpStatusCode = validationSubject.HttpStatusCode;

  if (HttpStatusCode == '') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

function validationData(validationSubject) {
  const Data = validationSubject.Data;

  if (Data == '') {
    ratio.success += 1;
    return true;
  }
  else {
    ratio.error += 1;
    return false;
  }
};

router.get('/', (async (req, res, next) => {

  const welcome = [
    ["/case/id/boolean"]
    ["/protocol/id"],
    ["/host/id"],
    ["/http-method/id"],
    ["/header/id"],
    ["/query/id"],
    ["/parameter/id"],
    ["/path/id"],
    ["/body/id"],
    ["/cookie/id"],
    ["/http-status-code/id"],
    ["/data/id"],
  ];

  res.render('status', { status: welcome });
}));

router.get('/case/:id/:tf', (async (req, res, next) => {
  const id = req.params.id;
  const tf = req.params.tf;

  const data = await TestCase.findAll({
    where: {
      id: id
    }
  });

  if (data[0] != null) {
    const test = await TestData.findAll({});

    let temp = [];

    while (tf == 'true') {
      const startDate = new Date()
      console.log(startDate);

      for (i = 0; i < test.length; i++) {
        const resultProtocol = validationProtocol(test[i]);
        const resultHost = validationHost(test[i]);
        const resultHttpMethod = validationHttpMethod(test[i]);
        const resultHeader = validationHeader(test[i]);
        const resultQuery = validationQuery(test[i]);
        const resultParameter = validationParameter(test[i]);
        const resultPath = validationPath(test[i]);
        const resultBody = validationBody(test[i]);
        const resultCookie = validationCookie(test[i]);
        const resultHttpStatusCode = validationHttpStatusCode(test[i]);
        const resultData = validationData(test[i]);

        const result = [
          ["Protocol = " + resultProtocol],
          ["Host = " + resultHost],
          ["HttpMethod = " + resultHttpMethod],
          ["Header = " + resultHeader],
          ["Query = " + resultQuery],
          ["Parameter = " + resultParameter],
          ["Path = " + resultPath],
          ["Body = " + resultBody],
          ["Cookie = " + resultCookie],
          ["HttpStatusCode = " + resultHttpStatusCode],
          ["Data = " + resultData]
        ];

        console.log(result);
        temp.push(result);
      }

      const endDate = new Date()
      console.log(endDate);

      await wait(data[0].Test_Interval);
    }
  }

  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

const wait = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

router.get('/:id', (async (req, res, next) => {
  ratio.success = 0, ratio.error = 0;

  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultProtocol = validationProtocol(subject[0]);
    const resultHost = validationHost(subject[0]);
    const resultHttpMethod = validationHttpMethod(subject[0]);
    const resultHeader = validationHeader(subject[0]);
    const resultQuery = validationQuery(subject[0]);
    const resultParameter = validationParameter(subject[0]);
    const resultPath = validationPath(subject[0]);
    const resultBody = validationBody(subject[0]);
    const resultCookie = validationCookie(subject[0]);
    const resultHttpStatusCode = validationHttpStatusCode(subject[0]);
    const resultData = validationData(subject[0]);

    const result = [
      ["Protocol = " + resultProtocol],
      ["Host = " + resultHost],
      ["HttpMethod = " + resultHttpMethod],
      ["Header = " + resultHeader],
      ["Query = " + resultQuery],
      ["Parameter = " + resultParameter],
      ["Path = " + resultPath],
      ["Body = " + resultBody],
      ["Cookie = " + resultCookie],
      ["HttpStatusCode = " + resultHttpStatusCode],
      ["Data = " + resultData]
    ];

    console.log(ratio.success);
    console.log(ratio.error);

    console.log(subject.Test_Data_Id);
    console.log(subject.HttpStatusCode);

    res.render('status', { status: result });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/protocol/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultProtocol = validationProtocol(subject[0]);

    res.render('status', { status: [resultProtocol] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/host/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultHost = validationHost(subject[0]);

    res.render('status', { status: [resultHost] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/http-method/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultHttpMethod = validationHttpMethod(subject[0]);

    res.render('status', { status: [resultHttpMethod] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/header/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultHeader = validationHeader(subject[0]);

    res.render('status', { status: [resultHeader] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/query/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultQuery = validationQuery(subject[0]);

    res.render('status', { status: [resultQuery] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/parameter/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultParameter = validationParameter(subject[0]);

    res.render('status', { status: [resultParameter] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/path/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultPath = validationPath(subject[0]);

    res.render('status', { status: [resultPath] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/body/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultBody = validationBody(subject[0]);

    res.render('status', { status: [resultBody] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/cookie/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultCookie = validationCookie(subject[0]);

    res.render('status', { status: [resultCookie] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/http-status-code/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultHttpStatusCode = validationHttpStatusCode(subject[0]);

    res.render('status', { status: [resultHttpStatusCode] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

router.get('/data/:id', (async (req, res, next) => {
  const id = req.params.id;

  const subject = await TestData.findAll({
    where: {
      id: id
    }
  });

  if (subject[0] != null) {
    const resultData = validationData(subject[0]);

    res.render('status', { status: [resultData] });
  }
  else {
    res.render('status', { status: ["id is invalid"] });
  }
}));

module.exports = router;
