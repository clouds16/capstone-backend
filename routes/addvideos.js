const express = require('express')
var router = express.Router()
const Videos = require('../models/videos')
const User = require("../models/users");
const Stats = require("../models/stats")
const Workouts = require("../models/workouts")


router.post('/dev/addvideo' , async (req, res) => {
	const newVideo  = new Videos(req.body)
	
	try {
		await newVideo.save() 
		console.log(newVideo)
		res.send( newVideo )

	} catch (e) {
		console.log(e)
		res.send(e) 
	
	}

})

module.exports = router;