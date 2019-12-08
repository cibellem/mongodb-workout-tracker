const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//creates a new schema to my wtracker database which behaves like a table in MySQL in mongoDB it's a collection
// Im declaring the properties and type of data my documents will hold
const exerciseSchema = new Schema({

    name: {
        type: String,
        trim: true
    },

    rep: {
        type: Number,
        trim: true
    },

    weight: {
        type: Number,
        trim: true
    }
})

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;