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


// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wtracker", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`------- App running on port http://localhost:${PORT}`);
});


app.get("/resistance", function (err, res) {
    Workout.find({}).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    })
})
module.exports = app;