const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{console.log("Mongoose connection made!!")}).catch((err)=>{console.log("error in DB connection",err)});
};

module.exports = dbConnect;