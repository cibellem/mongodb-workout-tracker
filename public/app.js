//variables 

const resistanceDiv = $(".resistenceContainer");
const cardioDiv = $(".cardioContainer");
const $btnCardio = $(".btnCardio");
const $btnResistence = $(".btnResistence")


//appends time and day to greeting page

const today = moment().format('LL')
const timeNow = moment().format('LT');
const $timeNow = $(".timeNow");
$timeNow.append(today + " " + timeNow);

//when resistance button it's clicked

$btnResistence.on("click", function (event) {
    event.preventDefault()
    cardioDiv.hide()
    resistanceDiv.show()

})
//when cardio button it's clicked
$btnCardio.on("click", function (event) {
    event.preventDefault()
    resistanceDiv.hide()
    cardioDiv.show()
})

//when form it's submitted a post request it's sent to the server

$("#resistanceComplete").on("click", function (event) {
    console.log(event.target)
    event.preventDefault();
    var newRecord = {
        exName: $("#exName").val().trim(),
        weight: $("#weights").val().trim(),
        sets: $("#sets").val().trim(),
        rep: $("#reps").val().trim(),
        duration: $("#duration").val().trim(),
    };

    console.log(newRecord)
    $.ajax({
        url: "/api/workouts",
        type: "POST",
        data: newRecord


        // headers: {
        //     Accept: "application/json, text/plain, */*",
        //     "Content-Type": "application/json"
        // },
        // body: JSON.stringify(newRecord)
    }).then(function () {
        console.log("worked")
        location.reload();

    })


})


$("#resistanceUpdate").on("click", function (event) {

    event.preventDefault();
    var newRecord = {
        exName: $("#exName").val().trim(),
        weight: $("#weights").val().trim(),
        sets: $("#sets").val().trim(),
        rep: $("#reps").val().trim(),
        duration: $("#duration").val().trim(),
    };
    var id = $(this).data("id");

    console.log(newRecord)
    $.ajax({
        url: "/api/workouts" + id,
        type: "PUT",
        data: newRecord


        // headers: {
        //     Accept: "application/json, text/plain, */*",
        //     "Content-Type": "application/json"
        // },
        // body: JSON.stringify(newRecord)
    }).then(function () {


        console.log("worked")
        location.reload();
    })


})

$("#cardioComplete").on("click", function (event) {

    event.preventDefault();
    var newRecord = {
        exName: $("#CardioName").val().trim(),
        distance: $("#distance").val().trim(),
        duration: $("#durationCardio").val().trim(),

    };

    console.log(newRecord)

    $.ajax({
        url: "/api/workouts",
        type: "POST",
        data: newRecord


        // headers: {
        //     Accept: "application/json, text/plain, */*",
        //     "Content-Type": "application/json"
        // },
        // body: JSON.stringify(newRecord)
    }).then(function () {
        console.log("worked")
        location.reload();

    })
})



$("#cardioUpdate").on("click", function (event) {

    event.preventDefault();
    var newRecord = {
        exName: $("#CardioName").val().trim(),
        distance: $("#distance").val().trim(),
        duration: $("#durationCardio").val().trim(),

    };

    var id = $(this).data("id");

    console.log(newRecord)

    $.ajax({
        url: "/api/workouts/" + id,
        type: "PUT",
        data: newRecord


        // headers: {
        //     Accept: "application/json, text/plain, */*",
        //     "Content-Type": "application/json"
        // },
        // body: JSON.stringify(newRecord)
    }).then(function () {
        console.log("worked")
        location.reload();

    })
})






// $("#showAll").on("click", function () {

//     console.log("working")

//     $.ajax({
//         url: "/api/workouts",
//         type: "GET",
//     }).then(function (data) {

//         console.log(data)
//         let recentWorkoutDiv = $("<div>");
//         let recent = $("<button>");
//         recent.innerHtml = data.exName
//         recentWorkoutDiv.append(recent);
//         $(".container").append(recentWorkoutDiv);


//     })
// })