const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//creates a new schema to my wtracker database which behaves like a table in MySQL in mongoDB it's a collection
// Im declaring the properties and type of data my documents will hold
const workoutSchema = new Schema({

    exName: {

        type: String
    }
    ,

    rep: {
        type: Number,

    },

    weight: {
        type: Number,

    },

    sets: {
        type: Number,

    },


    duration: {
        type: Number,

    },

    created: {
        type: Date,
        default: Date.now
    }

})



const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;