const express = require('express')
var router = express.Router()
const Workouts = require("../models/workouts")

router.post("/profile/:id/addworkout" , async  (req, res) => {
	console.log(req.body)
	let workout = new Workouts(req.body)
	
	try {
		await workout.save()
		console.log("success", workout)
		res.send(workout)

	} catch (e) {
		console.log("error")
		res.sendStatus(300).send(e) 
	}
})


module.exports = router;