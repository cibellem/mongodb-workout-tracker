//Packages that I am going to need

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//connection to the models folder
const Workout = require("./models/workoutModel");

const PORT = process.env.PORT || 3000;
const app = express()

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wtracker", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`------- App running on port http://localhost:${PORT}`);
});

//creates a new Workout Object and saves in the db

app.post("/api/workouts", function (req, res) {
    var workout = new Workout(req.body)

    workout.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(workout);
    })
})

app.get("/api/workouts", function (req, res) {

    Workout.find({}).then(function (data, err) {
        if (err) throw err
        res.send(data)
    })
})

app.get("/api/workouts/:id", function (req, res) {

    Workout.findOne({


        _id: req.params.id
    })
        .then((doc) => {
            if (doc) {
                console.log(doc);
            } else {
                console.log("no data exist for this id");
            }



        }
        )
})




app.put("/api/workouts/", function (req, res) {
    var query = req.body
    Workout.update({}, { sort: { name: 1 } }).then(function (data, err) {

        console.log(data)// executes
        res.send(data)
        if (err) throw err

    })
})



module.exports = app