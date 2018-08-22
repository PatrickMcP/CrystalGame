//global variables
var wins = 0;
var losses = 0;
//crystal variables
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    }
}
var currentScore = 0;
var targetScore = 0;
//functions
var startGame = function () {
    currentScore = 0;
    targetScore = getRandom(19,120);
    crystal.blue.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);
    crystal.red.value = getRandom(1,12);
    crystal.yellow.value = getRandom(1,12);
    
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    
}
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
};
var addValues = function(crystal) {
    currentScore = currentScore + crystal.value;
    $("#yourScore").html(currentScore);
    checkWin();

};
var checkWin = function () {
    if(currentScore > targetScore) {
        alert("You Lost!");
        losses++;
        $("#losses").html(losses);
        startGame();
    }
    else if (currentScore == targetScore) {
        alert("You Win!");
        wins++;
        $("#wins").html(wins);
        startGame();
    }
}
//main process
$('#blue').click(function() {
    addValues(crystal.blue);
});

$('#green').click(function() {
    addValues(crystal.green);
});

$('#red').click(function() {
    addValues(crystal.red);
});

$('#yellow').click(function() {
    addValues(crystal.yellow);
});
startGame ();
checkWin ();