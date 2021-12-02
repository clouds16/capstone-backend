const express = require('express')
var router = express.Router()
const User = require("../models/users");
const nodemailer = require("nodemailer");

const mailjet = require ('node-mailjet');
mailjet.connect('34e259d28c17b5aae05273fa38e81879', '7571d6748fb3a63db2c6425d8454d709')

router.post('/signup', async function(req, res ) {
	const accountSid = process.env.TWILIO_ACCOUNTSID; 
	const authToken = process.env.TWILIO_APIKEY; 
	const client = require('twilio')(accountSid, authToken); 
	

	const user = User(req.body);

	try {
	  await user.save() ;
	//   client.messages 
    //   .create({ 
    //      body: 'Thank you '+ req.body.fname + ' ,' + req.body.lname  + ' for signing up for Motivatr!',  
    //      messagingServiceSid: 'MG51d38ea974422fa5e7735f65133f87c6',      
    //      to: req.body.phone
    //    }) 
    //   .then(message => console.log(message.sid)) 
    //   .done();

	  //send back status
	  res.status(200).send(user)

	} catch (e) {
	  res.status(400).send();
	  console.log("no response sent back")
	}
  });


module.exports = router;