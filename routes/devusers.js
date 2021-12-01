const express = require('express')
var router = express.Router()
const Videos = require('../models/videos')
const User = require("../models/users");
const Stats = require("../models/stats")
const Workouts = require("../models/workouts")


router.get("/dev/users" , (req, res) => {
	console.log("request working")
	User.find({}, function (err, users) {
	  res.send(users);
  	});
});

module.exports = router;