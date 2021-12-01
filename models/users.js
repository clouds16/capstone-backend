const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
	fname: {
		type: String,
		required: true,
		trim: true,
	},

	lname: {
		type: String,
		required: true,
		trim: true,
	},
    age: {
        required: false,
        type: Number,
    },

	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Email is invalid");
			}
		},
	},
	phone: {
		required: true, 
		trim:true ,
		type: String
	},
	
	password: {
		type: String,
		required: true,
		minLength: 8,
		trim: true,
		validate(value) {
			if (value.toLowerCase().includes("password")) {
				throw new Error('Password cannot contain word "password" ');
			}
		},
	},

});

module.exports = User;