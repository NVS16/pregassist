////////////////////////////////////////////////////////////////
///**** Schema definition for an ASHA worker ************///////
////////////////////////////////////////////////////////////////

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
    name: { type: String },
    date: { type: String },
    contact: { type: String , unique : true },
    address: { type: String },
    conceive : { type: Boolean },
    dob: { type: String },
    complications : [{ type: String }],
    expectedDate : { type: String },
    workerID : {
        type: Schema.Types.ObjectId,
        ref: 'worker'
    }, 
    remarks : { type: String },
    education : { type: String },
    bloodGrp : { type: String },
    occupation : { type : String },
    height : { type: String },
    weight: { type: String },
    allergy : { type: String },
    delivery_count : { type : String },
    password : { type : String }
});

var patientModel = mongoose.model('patient', patientSchema);

module.exports = patientModel;