var express = require('express');
var router = express.Router();
var vd = require('../dappresources');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Jint-Intj\047s Dapp', success: req.session.success, errors: req.session.errors, dappresources: vd, });
  req.session.errors = null;
});

router.post('/submit', function (req, res, next) {
  req.check('v_resources', 'Invalid value for the Version field').equals('v1.00');
  req.check('h_resources', 'Invalid value for the html field').equals(vd.emblemhtml);

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }

  res.redirect('/');
});

module.exports = router;
