const express = require('express')
var router = express.Router()
const Videos = require('../models/videos')
const User = require("../models/users");
const Stats = require("../models/stats")
const Workouts = require("../models/workouts")

router.get('/videos/suggestworkout' , async (req, res) => {
	
    

	try {
		Videos.find({}).then( (videos) => {
			console.log(videos)
            const length =  videos.length
            const randint =  Math.floor(Math.random() * length)
			res.send(videos[randint])
		}).catch( e => res.send(e))
	} catch (e) {
		console.log(e)
		res.send(e)
	}
})



module.exports = router;