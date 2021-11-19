const mongoose = require('mongoose');

const mongo_atlas = "mongodb+srv://cloud16:Cloudgrey16@cluster0.64pln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

try {
    mongoose.connect(mongo_atlas, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("connected to mongo cloud successfully")

}
catch (e) {
    console.log("could not connect")
    console.log(e)
}   
