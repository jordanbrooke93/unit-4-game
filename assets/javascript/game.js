var playingNumber = 0;
var randomNumber = "";
var crystal1 = "";
var crystal2 = "";
var crystal3 = "";
var crystal4 = "";
var wins = 0;
var losses = 0;
var images = [
    "images/bluecrystal.jpg",
    "images/orangecrystal.jpg",
    "images/pinkcrystal.jpg",
    "images/purplecrystal.jpg"
];

function initializeGame() {
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(randomNumber);
    $(".randomNumber").text(Number(randomNumber));
    playingNumber = 0;
    $(".playingNumber").text(Number(playingNumber));
    $(".wins").text(Number(wins));
    $(".losses").text(Number(losses));
    crystal1 = Math.floor((Math.random() * 12) + 1);
    console.log(crystal1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    console.log(crystal2);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    console.log(crystal3);
    crystal4 = Math.floor((Math.random() * 12) + 1);
    console.log(crystal4);
};

initializeGame()

function game() {
    if (playingNumber === randomNumber) {
        wins++;
        initializeGame()
    }
    else if (playingNumber > randomNumber) {
        losses++;
        initializeGame();
    }
}

$("#crystal1").on("click", function () {
    playingNumber = Number(crystal1) + Number(playingNumber);
    $(".playingNumber").text(playingNumber);
    game ();
});
$("#crystal2").on("click", function () {
    playingNumber = Number(crystal2) + Number(playingNumber);
    $(".playingNumber").text(playingNumber);
    game();
});
$("#crystal3").on("click", function () {
    playingNumber = Number(crystal3) + Number(playingNumber);
    $(".playingNumber").text(playingNumber);
    game();
});
$("#crystal4").on("click", function () {
    playingNumber = Number(crystal4) + Number(playingNumber);
    $(".playingNumber").text(playingNumber);
    game();
});








