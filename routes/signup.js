const express = require('express')
var router = express.Router()
const User = require("../models/users");
const nodemailer = require("nodemailer");

const mailjet = require ('node-mailjet');
mailjet.connect('34e259d28c17b5aae05273fa38e81879', '7571d6748fb3a63db2c6425d8454d709')
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: process.env.VONAEAPIKEY,
  apiSecret: process.env.VONAGEAPISECRET
})



router.post('/signup', async function(req, res ) {


	const from = "18664851562"
	const to = req.body.phone	
	const text = 'Thank you for signing up to Motivatr!'



	const user = User(req.body);
	console.log(req.body)
	try {
	  await user.save() ;
	  
	  vonage.message.sendSms(from, to, text, (err, responseData) => {
		if (err) {
			console.log(err);
		} else {
			if(responseData.messages[0]['status'] === "0") {
				console.log("Message sent successfully.");
			} else {
				console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
			}
		}
	})
	  res.status(200).send(user)

	} catch (e) {
	  res.status(400).send();
	  console.log("no response sent back")
	}
  });


module.exports = router;