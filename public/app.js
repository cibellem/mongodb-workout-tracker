//variables 

const resistanceDiv = $(".resistenceContainer");
const cardioDiv = $(".cardioContainer");
const $btnCardio = $(".btnCardio");
const $btnResistence = $(".btnResistence")


//appends time and day to greeting page

const today = moment().format('dddd');
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


$(".create-form").on("submit", function (event) {

    event.preventDefault();


    var newRecord = {
        exName: $("#exName").val().trim(),
        // weight: $("#weights").val().trim(),
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
    })
})