const express = require('express')
var router = express.Router()
const User = require("../models/users");

const mailjet = require ('node-mailjet');
mailjet.connect('34e259d28c17b5aae05273fa38e81879', '7571d6748fb3a63db2c6425d8454d709')

router.post('/signup', async function(req, res ) {
	const accountSid = process.env.TWILIO_ACCOUNTSID; 
	const authToken = process.env.TWILIO_APIKEY; 
	const client = require('twilio')(accountSid, authToken); 
	
	const request = mailjet.post("send", {'version': 'v3.1'}).request({
  "Messages":[
    {
      "From": {
        "Email": "hect16@gmail.com",
        "Name": "Hector"
      },
      "To": [
        {
          "Email": "hect16@gmail.com",
          "Name": "Hector"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})

	request.then((result) => {
  			console.log(result.body)
			})
			.catch((err) => {
  					console.log(err.statusCode)
			})


	const user = User(req.body);
	try {
	  await user.save();
	
	  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  	let transporter = nodemailer.createTransport({
    	host: "smtp.ethereal.email",
    	port: 587,
    	secure: false, // true for 465, false for other ports
    	auth: {
      	user: testAccount.user, // generated ethereal user
      	pass: testAccount.pass, // generated ethereal password
    	},
  });

  	let info = await transporter.sendMail({
    	from: '"Fred Foo 👻" <foo@example.com>', // sender address
    	to: "hect16@gmail.com", // list of receivers
    	subject: "Hello ✔", // Subject line
    	text: "Hello world?", // plain text body
    	html: "<b>Hello world?</b>", // html body
  	});


	  client.messages 
      .create({ 
         body: 'Thank you '+ req.body.fname + ' ,' + req.body.lname  + ' for signing up for Motivatr!',  
         messagingServiceSid: 'MG51d38ea974422fa5e7735f65133f87c6',      
         to: req.body.phone
       }) 
      .then(message => console.log(message.sid)) 
      .done();

	  res.status(200).send(user)
	} catch (e) {
	  res.status(400).send();
	  console.log("no response sent back")
	}
  });


module.exports = router;