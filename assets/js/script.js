var you;
var yourscore = 0;
var opponent;
var opponentscore = 0;

var choices = []

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        // <img id="" src=".png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choices.src = choices[i] + ".png";
        document.getElementById("choices").append(choice);
    }
}
