////////////////////////////////////////////////////////////////
///////////**** Routes for all the EJS Views/Pages ******///////
////////////////////////////////////////////////////////////////

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get("/training", function(req, res, next) {
    res.render('training.ejs');
});

router.get("/vaccinations", function(req, res, next) {
    res.render('vaccinations.ejs');
});

module.exports = router;