const express = require('express')
var router = express.Router()
const Videos = require('../models/videos')


router.get('/dev/allvideos' , async (req, res) => {
	try {
		Videos.find({}).then( (videos) => {
			console.log(videos)
			res.send(videos)
		}).catch( e => res.send(e))
	} catch (e) {
		console.log(e)
		res.send(e)
	}
})


module.exports = router;