const express = require('express')
var router = express.Router()
const User = require("../models/users");


router.post("/login", async (req, res) => {
	console.log(req.body)
	
	try {
		await User.find({email : req.body.email , password : req.body.password}).then((response) => {			
			if (response[0]) {
				console.log("response is", response);
				res.send(response[0])
			}else {
				res.sendStatus(404)
			}
			
			})
		}catch (e) {
			console.log("failure")
			res.send(408)
		}
	
})


module.exports = router;