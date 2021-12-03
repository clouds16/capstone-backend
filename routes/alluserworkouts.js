const express = require('express')
var router = express.Router()
const Workout = require("../models/workouts")


router.get("/profile/:id/workouthistory", (req, res) => {	


	const stats = Workout.find({ user : req.params.id  }).then(  (userstats) => {
		//userstats is a list of documents/objects
		
        res.send(userstats)

	}).catch( e => res.send(e))


})


module.exports = router;