const express = require('express');
const router = express.Router();

const { TestResult } = require('../models');

router.get('/', (req, res, next) => {
  res.render('result');
});

router.get('/protocol',

  function (req, res, next) {

    res.render('status', { status: ["Created Test Result"] });
  }
);

module.exports = router;
