const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({title : 'Hello, World!'});
});

router.use('/test-data', require('./data'));

router.use('/test-case', require('./case'));

router.use('/test-result', require('./result'));

module.exports = router;
