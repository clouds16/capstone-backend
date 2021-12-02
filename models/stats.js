const User =  require('./users')
const mongoose = require('mongoose');
const validator = require('validator')

const Stats = mongoose.model('Stats', new mongoose.Schema({
    weight: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 50 ) {
                throw new Error("Weight cannot be that low")
            }
        }
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

