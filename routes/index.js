var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('stuff/index', { title: 'Express Talk!' });
});

module.exports = router;
