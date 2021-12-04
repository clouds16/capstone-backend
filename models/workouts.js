const mongoose = require('mongoose');

const Workout = mongoose.model('Workout', new mongoose.Schema({
    musclegroup : {
        type: String,
        required: true,
        
    },
    sets : {
        type: Number,
        required: true, 
        validate(value) {
            if (value <= 0) {
                throw new Error("Sets Cannot be 0 or Less")
            }
        }
    
    },
    force : {
        type: Number,
        required: true,
        validate(value) {
            if (value <= 0 ){
                throw new Error("Force Cannot be 0 or Less")
            }
        }
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