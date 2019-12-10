//routes 

const workout = require("models/workoutModel.js")

app.get("/resistance", function (res, req) {
    db.workout.find({

    }).then(function (data) {
        console.log(data)

    })
})
