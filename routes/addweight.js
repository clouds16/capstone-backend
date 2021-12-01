const express = require('express')
var router = express.Router()
const Stats = require("../models/stats")



router.post("/profile/:id/updateweight" , async  (req, res) => {
	console.log(req.body)
	let weight = new Stats(req.body)
	
	try {
		await weight.save()
		console.log("success", weight)
		res.send(weight)

	} catch (e) {
		console.log("error")
		res.sendStatus(300)
	}
})



module.exports = router;