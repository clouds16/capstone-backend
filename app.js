require('dotenv').config();
const express = require("express");
const cors = require('cors');
require("./database/mongoconnect.js");
const mailjet = require ('node-mailjet');

mailjet.connect('34e259d28c17b5aae05273fa38e81879', '7571d6748fb3a63db2c6425d8454d709')

//email
const nodemailer = require("nodemailer");


// Mongo DB schemas
const User = require("./models/users");
const Stats = require("./models/stats")
const Workouts = require("./models/workouts")
const Videos = require('./models/videos')

// App engine 
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

//Start of Routes


app.get("/", (req, res) => {
	res.send({ message : "hello"})
});


const signup = require('./routes/signup')
app.use(signup)

var addvideo =  require('./routes/addvideos')
app.use(addvideo)

const login = require('./routes/login')
app.use(login)

const getusers = require('./routes/devusers')
app.use(getusers)

const updateweight = require('./routes/addweight')
app.use(updateweight)

app.post("/profile/:id/addworkout", (req, res) => {

})

const profile = require('./routes/profile')
app.use(profile)

const weighthistory =  require('./routes/weighthistory')
app.use(weighthistory)

const allvideos = require('./routes/devvideos')
app.use(allvideos)


const findvideobyID = require('./routes/findvideo')
app.use(findvideobyID)



app.listen(port, () => {
	console.log("Server up on port: " + port);
});