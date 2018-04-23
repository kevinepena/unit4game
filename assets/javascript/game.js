$(document).ready(function () {


    var randNum = (Math.floor(Math.random() * 120) + 19);
    var userNum = 0;
    var wins = 0;
    var losses = 0;
    var buttonOne = (Math.floor(Math.random() * 12) + 1);
    var buttonTwo = (Math.floor(Math.random() * 12) + 1);
    var buttonThree = (Math.floor(Math.random() * 12) + 1);
    var buttonFour = (Math.floor(Math.random() * 12) + 1);
    

    $("#ranNum").text(randNum);
    $("#wins").text(wins);
    $("#losses").text(losses);

    $("body").on("click", "#button1", function () {
        userNum = userNum + buttonOne;
        console.log(userNum);
    });
    $("body").on("click", "#button2", function () {
        userNum = userNum + buttonTwo;
        console.log(userNum);
    });
    $("body").on("click", "#button3", function () {
        userNum = userNum + buttonThree;
        console.log(userNum);
    });
    $("body").on("click", "#button4", function () {
        userNum = userNum + buttonFour;
        console.log(userNum);
    });

    if (userNum === randNum) {
        wins++;
        console.log(wins);
    } else if (userNum > randNum) {
        losses++;
        console.log(losses)
    }
});