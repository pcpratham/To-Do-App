const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    title:{
        type:String,
        Required:true,
    },
    desc:{
        type:String,
        Required:true,
    },

});

module.exports = mongoose.model("listSchema",listSchema);