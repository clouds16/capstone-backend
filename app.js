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
const addvideo =  require('./routes/addvideos')
const login = require('./routes/login')
const getusers = require('./routes/devusers')
const updateweight = require('./routes/addweight')
const profile = require('./routes/profile')
const weighthistory =  require('./routes/weighthistory')
const allvideos = require('./routes/devvideos')
const findvideobyID = require('./routes/findvideo')
const addworkout = require('./routes/addworkout')
const workouthistory = require('./routes/workouthistory')
const alluserworkouts =  require('./routes/alluserworkouts')

app.use(signup)
app.use(login)
app.use(profile)
app.use(updateweight)
app.use(getusers)
app.use(addvideo)
app.use(weighthistory)
app.use(allvideos)
app.use(findvideobyID)
app.use(addworkout)
app.use(workouthistory)
app.use(alluserworkouts)




app.listen(port, () => {
	console.log("Server up on port: " + port);
});