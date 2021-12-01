const express = require('express')
var router = express.Router()
const Videos = require('../models/videos')
const User = require("../models/users");
const Stats = require("../models/stats")
const Workouts = require("../models/workouts")

router.get('/dev/videos/:id' , async (req, res) => {
	
	const musclegroup = req.params.id ; 
	
	try {
		Videos.find({ muscle : musclegroup}).then( (videos) => {
			console.log(videos)
			res.send(videos)
		})
	} catch (e) {
		console.log(e)
		res.send(e)
	}
})



module.exports = router;