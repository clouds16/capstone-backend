const express = require('express')
var router = express.Router()
const Stats = require("../models/stats")


router.get("/profile/:id/workouthistory", (req, res) => {	
	

	const stats = Stats.find({ user : req.params.id }).then(  (userstats) => {
		res.send(userstats)
	}).catch( e => res.send(e))



})


module.exports = router;