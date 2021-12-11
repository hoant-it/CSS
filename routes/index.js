var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('youtubeclone', { title: 'Express' });
});

router.get('/checklist', function(req, res, next) {
  res.render('checklist', { title: 'Express' });
});

router.get('/dropdown', function(req, res, next) {
  res.render('dropdown', { title: 'Express' });
});

router.get('/userdropdown', function(req, res, next) {
  res.render('userdropdown', { title: 'Express' });
});



module.exports = router;
