var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('youtubeclone', { title: 'Express' });
});

router.get('/checklist', function(req, res, next) {
  res.render('checklist', { title: 'Express' });
});


module.exports = router;
