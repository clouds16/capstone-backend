const express = require('express')
var router = express.Router()
const Workout = require("../models/workouts")


router.get("/profile/:id/workouthistory/:muscle", (req, res) => {	


	const stats = Workout.find({ user : req.params.id , musclegroup : req.params.muscle }).then(  (userstats) => {
		//userstats is a list of documents/objects
		
		console.log(userstats)
		let dates = [] 
		let sets = []
		let force = []

		userstats.map( (item ) => {
			dates.push(item.createdAt);
			sets.push(item.sets);
			force.push(item.force);
		})

		data = {
			
			"dates" : dates, 
			"sets" : sets, 
			"force" : force
		}
		res.send(data)

	}).catch( e => res.send(e))


})


module.exports = router;