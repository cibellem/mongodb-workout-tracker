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

// require("./routes/apiRoutes.js")(app);
// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wtracker", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`------- App running on port http://localhost:${PORT}`);
});


app.post("/api/workouts", function (req, res) {

    var workout = new Workout(req.body)

    workout.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(workout);
    })
})

module.exports = app