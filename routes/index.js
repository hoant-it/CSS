var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('float', { title: 'Express' });
});

router.get('/absolute', function(req, res, next) {
  res.render('absolute', { title: 'Express' });
});


router.get('/dropdown', function(req, res, next) {
  res.render('dropdown', { title: 'Express' });
});

module.exports = router;
