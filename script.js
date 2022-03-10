var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var computerChoiceResult = document.getElementById("computerChoiceResult");
var gameResult = document.getElementById("gameResult");
var buttons = [rock, paper, scissors];
var gameOptions = ["rock", "paper", "scissors"];
var userChoiceEvent = function (e) {
    gameResult.innerText = "";
    computerChoiceResult.innerHTML =
        "<em style='font-size: 0.85rem;'>calculating...</em>";
    var computerChoice = gameOptions[Math.floor(Math.random() * 3)];
    buttons.forEach(function (button) {
        button.classList.remove("activeButton");
    });
    document.getElementById("".concat(e.target.id)).classList.add("activeButton");
    setTimeout(function () {
        computerChoiceResult.innerText = computerChoice;
        if (computerChoice == e.target.id) {
            gameResult.innerText = "You both picked ".concat(e.target.id, " - draw");
        }
        else {
            switch (computerChoice) {
                case "rock":
                    if (e.target.id == "paper") {
                        gameResult.innerText = "Paper beats rock - you win! 🏆";
                    }
                    else if (e.target.id == "scissors") {
                        gameResult.innerText = "Rock beats scissors - you lose 😔";
                    }
                    break;
                case "paper":
                    if (e.target.id == "rock") {
                        gameResult.innerText = "Paper beats rock - you lose 😔";
                    }
                    else if (e.target.id == "scissors") {
                        gameResult.innerText = "Scissors beats paper - you win! 🏆";
                    }
                    break;
                case "scissors":
                    if (e.target.id == "paper") {
                        gameResult.innerText = "Scissors beats paper - you lose 😔";
                    }
                    else if (e.target.id == "rock") {
                        gameResult.innerText = "Rock beats scissors - you win! 🏆";
                    }
            }
        }
        console.clear();
        console.log("User choice: ".concat(e.target.id));
        console.log("Computer choice: ".concat(computerChoice));
    }, 1000);
};
buttons.forEach(function (b) { return b.addEventListener("click", userChoiceEvent); });
