//routes 

const workout = require("models/workoutModel.js")

app.post("/api/workouts", function (req, res) {
    let newSubmit = req.body
    console.log(newSubmit)
    workout.insert({
        exName: newSubmit,
        rep: newSubmit,
        weight: newSubmit,
        sets: newSubmit,
        duration: newSubmit

    }).then(function (data) {
        console.log(data)
    })
})

module.exports = app