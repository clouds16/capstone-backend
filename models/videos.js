const validator = require('validator')
const mongoose = require('mongoose');

const Videos = mongoose.model('Videos', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
        
    },
    uri : {
        required :true, 
        type : String,
        trim : true,
        unique : true
    },
    muscle: {
        required :true, 
        type : String,
        lowercase: true,
        trim : true

    }, 
    description: {
        required : false, 
        type : String,
        lowercase: true,
        trim : true
    }, 
    type: {
        required: true, 
        type: String,
        lowercase: true,
        trim: true

    }
    
}));


module.exports = Videos

