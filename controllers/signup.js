////////////////////////////////////////////////////////////////
///////////////**** Controller for Signup ************//////////
////////////////////////////////////////////////////////////////

var patientModel = require('../models/patient');

var UserSignup = function (req , res) {
    console.log(req.body);
    var newPatient = new patientModel(req.body);
    newPatient.save(newPatient, function (err, doc) {
        if (err) throw err;
        console.log(doc);
        res.json({ "msg": 'Successfully Registered!' });
    });
};

module.exports = { "UserSignup": UserSignup };