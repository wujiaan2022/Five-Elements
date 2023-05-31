var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["metal", "wood", "water", "fire", "earth"];

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = `assets/images/${choices[i]}.png`;        
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice () {
    you = this.id;
    document.getElementById("your-choice").src = `assets/images/${you}.png`;

     //random for oppponent
    opponent = choices[Math.floor(Math.random() * 5)]; 
    document.getElementById("opponent-choice").src = `assets/images/${opponent }.png`;

    //check for winner
    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
     }
     else {
        if (you == "metal") {
            if (opponent == "Wood") {
                yourScore += 1;
            }
            else 
            if (opponent == "Water") {
                opponentScore += 1;
            }
            else 
            if (opponent == "fire") {
                opponentScore += 1;
            }
            else 
            if (opponent == "earth") {
                yourScore += 1;
            }                
         } 
        else
        if (you == "wood") {
            if (opponent == "metal") {
                opponentScore += 1;
            }
            else 
            if (opponent == "water") {
                yourScore += 1;
            }
            else 
            if (opponent == "fire") {
                opponentScore += 1;
            }
            else 
            if (opponent == "earth") {
                yourScore += 1;
            }               
        }
        else
        if (you == "Water") {
            if (opponent == "metal") {
                yourScore += 1;
            }
            else 
            if (opponent == "Wood") {
                opponentScore += 1;
            }
            else 
            if (opponent == "fire") {
                yourScore += 1;
            }
            else 
            if (opponent == "earth") {
                opponentScore += 1;
            }                
        } 
        else
        if (you == "fire") {
            if (opponent == "metal") {
                yourScore += 1;
            }
            else 
            if (opponent == "Water") {
                opponentScore += 1;
            }
            else 
            if (opponent == "wood") {
                yourScore += 1;
            }
            else 
            if (opponent == "earth") {
                opponentScore += 1;
            }
        }
        else       
        if (you == "earth") {
            if (opponent == "metal") {
                opponentScore += 1;
            }
            else 
            if (opponent == "Water") {
                yourScore += 1;
            }
            else 
            if (opponent == "wood") {
                opponentScore += 1;
            }
            else 
            if (opponent == "fire") {
                yourScore += 1;
            }              
        }

    }

   


document.getElementById("your-score").innerText = yourScore;
document.getElementById("opponent-score").innerText = opponentScore;
 

}
