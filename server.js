const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");



const Exercise = require("./exercisesModel.js");
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


app.get("/all/", function (err, res) {

    Exercise.find({}).then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log(err);
    })
})