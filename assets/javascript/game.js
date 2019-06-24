// get the cumputer to randomly choose a word
var gameNames = ["Galaga", "Tetris", "Frogger"]
var gameNames = gameNames[Math.floor(Math.random() * gameNames.length)];
console.log(gameNames)

// underscores match the guessed word
var underscores = []; {
    for (var i = 0; i < gameNames.length; i++) {
        console.log("The computer guessed " + gameNames[i]);
    }
}

// have the user guess the word
// Letters You've Chosen: track the keys chosen and show them on screen
// ^^^probably going to need the onkeydown
document.onkeydown = function () {
    var playerGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(playerGuess)
}
// Number of Guesses: when they guess wrong the counter should go down by increments of one."--"


//Wins: track wins should go up by increments of one "++" 
var playerGuess = function () {

    if (playerGuess === gameNames) {
        var playerGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
        Wins++;
        console.log("Wins: " + Wins)
    }