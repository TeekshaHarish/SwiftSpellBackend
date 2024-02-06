const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const speechSchema = new Schema({
   
    content: String,
    audioFile:Buffer
    
});

const Speech = mongoose.model("Speech", speechSchema);
module.exports = Speech;
