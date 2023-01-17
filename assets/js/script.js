var player;
var player_score = 0;
var computer;
var computer_score = 0;

var choices = ["Metal", "Wood", "Water", "Fire", "Earth"];

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";        
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice {
    player = this.id;
    document.getElementById("player-choice").src = player + ".png"
}
