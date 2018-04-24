$(document).ready(function () {

    var userNum = 0;
    var wins = 0;
    var losses = 0;
    var running = true;
    var randNum = 0;
    var buttonOne = 0;
    var buttonTwo = 0;
    var buttonThree = 0;
    var buttonFour = 0;

    function randomNumbers() {
        randNum = (Math.floor(Math.random() * 120) + 19);
        buttonOne = (Math.floor(Math.random() * 12) + 1);
        buttonTwo = (Math.floor(Math.random() * 12) + 1);
        buttonThree = (Math.floor(Math.random() * 12) + 1);
        buttonFour = (Math.floor(Math.random() * 12) + 1);
        userNum = 0;
        $("#score").text(userNum);
        $("#ranNum").text(randNum);
    }

    randomNumbers();
    
    $("#wins").text(wins);
    $("#losses").text(losses);
    

    $(".allButtons").on("click", "#button1", function () {
        userNum = userNum + buttonOne;
    });
    $(".allButtons").on("click", "#button2", function () {
        userNum = userNum + buttonTwo;
    });
    $(".allButtons").on("click", "#button3", function () {
        userNum = userNum + buttonThree;
    });
    $(".allButtons").on("click", "#button4", function () {
        userNum = userNum + buttonFour;
    });
    $(".allButtons").on("click", function () {
        $("#score").text(userNum);
        if (userNum === randNum) {
            wins++;
            randomNumbers();
            $("#wins").text(wins);

        } else if (userNum > randNum) {
            losses++;
            randomNumbers();
            $("#losses").text(losses);
        }
    });

});