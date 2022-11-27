const mongoose = require("mongoose");
const PatientSchema = new mongoose.Schema({
  id:Number,
  name: String,
  consulting_doc: String,
  desc: String,
  medicine:String,
  morning:Boolean,
  afternoon:Boolean,
  night:Boolean} 
);

module.exports = mongoose.model('patient', PatientSchema);
