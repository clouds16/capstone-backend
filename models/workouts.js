const mongoose = require('mongoose');

const Workout = mongoose.model('Workout', new mongoose.Schema({
    musclegroup : {
        type: String,
        required: true,
        
    },
    excercise: {
        type: String,
        required: true, 
        trim : true
    },
    force : {
        type: Number,
        required: true
    },
    units: {
        required: true,
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    }, {
    timestamps: true
}))


module.exports = Workout;