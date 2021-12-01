const express = require('express')
var router = express.Router()
const Stats = require("../models/stats")


router.get("/profile/:id/weighthistory", (req, res) => {	
	
	let dates = []
	let weight =  []

	const stats = Stats.find({ user : req.params.id }).then(  (userstats) => {
		console.log(userstats)

		userstats.forEach( (item) => {
			
			dates.push(item.createdAt);
			weight.push(item.weight);
		});

		console.log("data" , dates, weight)

		res.send( {
			"dates" : dates,
			"weight" : weight
		});
	}).catch( e => res.send(e))



})


module.exports = router;