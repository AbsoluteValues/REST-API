var express = require('express');
var router = express.Router();

const { check, validationResult } = require('express-validator');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/execute',

  [check('TestDataId').isByteLength({ min: 1, max: 500 })],
  [check('TestDataName').isByteLength({ min: 1, max: 500 })],
  [check('TestDataServerName').isByteLength({ min: 1, max: 500 })],
  [check('Protocol').isByteLength({ min: 1, max: 500 })],
  [check('Host').isByteLength({ min: 1, max: 500 })],
  [check('HttpMethod').isByteLength({ min: 1, max: 500 })],
  [check('Header').isByteLength({ min: 1, max: 500 })],
  [check('Query').isByteLength({ min: 1, max: 500 })],
  [check('Parameter').isByteLength({ min: 1, max: 500 })],
  [check('Path').isByteLength({ min: 1, max: 500 })],
  [check('Body').isByteLength({ min: 1, max: 500 })],
  [check('Cookie').isByteLength({ min: 1, max: 500 })],
  [check('HttpStatusCode').isByteLength({ min: 1, max: 500 })],
  [check('Data').isByteLength({ min: 1, max: 500 })],

  function (req, res, next) {
    let errs = validationResult(req);

    if (errs['errors'].length > 0) {
      res.render('index', { errs: errs['errors'] });
    }
    else {
      let param = JSON.parse(JSON.stringify(req.body));

      res.render('result');
      /*
      transaction.sendTransactionsAPI(param['from'], param['to'], param['amount'], param['repeat'], (txLink) =>{
        res.render('done');
      });
      */
    }
  }
);

router.get('/create', function(req, res) {
  db.query('CREATE TABLE DEPARTMENT (DEPART_CODE INT(11) NOT NULL, NAME VARCHAR(200) NULL DEFAULT NULL COLLATE utf8mb4_general_ci, PRIMARY KEY (DEPART_CODE) USING BTREE)', function(err, rows, fields) {
    if(!err) {
      res.send(rows); // response send rows
    } else {
      console.log('err : ' + err);
      res.send(err); // response send err
    }
  });
});

module.exports = router;
