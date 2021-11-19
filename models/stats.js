const User =  require('./users')
const mongoose = require('mongoose');

const Stats = mongoose.model('Stats', new mongoose.Schema({
    weight: {
        type: Number,
        required: true,
        
    },
    units : {
        required :true, 
        type : String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }, 
   
} , { timestamps: true } ));


module.exports = Stats

