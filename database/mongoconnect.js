const mongoose = require('mongoose');

const mongo_atlas = process.env.MONGOOSEKEY  ;

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
