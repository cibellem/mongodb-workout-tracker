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


$btnCardio.on("click", function (event) {
    event.preventDefault()

    resistanceDiv.hide()
    cardioDiv.show()

})