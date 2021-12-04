const express = require('express')
var router = express.Router()
const Workouts = require("../models/workouts")

router.post("/profile/:id/addworkout" , async  (req, res) => {
	console.log(req.body)

	if (req.body.sets != null && req.body.force != null) {
		let workout = new Workouts(req.body)
		
		try {
			await workout.save()
			console.log("success", workout)
			res.send(workout)
	
		} catch (e) {
			console.log("error")
			res.sendStatus(300)
		}
	}
	
	
	
})


module.exports = router;