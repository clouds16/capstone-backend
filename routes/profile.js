const express = require('express')
var router = express.Router()
const User = require("../models/users");


router.get("/profile/:id", (req, res) => {
	const user = req.params.id ; 
	const userData = User.find( { _id :  user }).then( (data) => {
		console.log(data[0])
		res.send(data[0])
	} )
})


module.exports = router;