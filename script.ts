const rock: HTMLElement | null = document.getElementById("rock");
const paper: HTMLElement | null = document.getElementById("paper");
const scissors: HTMLElement | null = document.getElementById("scissors");
const computerChoiceResult: HTMLElement | null = document.getElementById("computerChoiceResult");
const gameResult: HTMLElement | null = document.getElementById("gameResult");

const buttons: HTMLElement[] = [rock, paper, scissors];
const gameOptions: string[] = ["rock", "paper", "scissors"];

const userChoiceEvent = (e: any) => {
	gameResult.innerText = "";
	computerChoiceResult.innerHTML =
		"<em style='font-size: 0.85rem;'>calculating...</em>";
	let computerChoice = gameOptions[Math.floor(Math.random() * 3)];

	buttons.forEach((button: HTMLElement) => {
		button.classList.remove("activeButton");
	});
	document.getElementById(`${e.target.id}`).classList.add("activeButton");

	setTimeout(() => {
		computerChoiceResult.innerText = computerChoice;

		if (computerChoice == e.target.id) {
			gameResult.innerText = `You both picked ${e.target.id} - draw`;
		} else {
			switch (computerChoice) {
				case "rock":
					if (e.target.id == "paper") {
						gameResult.innerText = "Paper beats rock - you win! 🏆";
					} else if (e.target.id == "scissors") {
						gameResult.innerText = "Rock beats scissors - you lose 😔";
					}
					break;
				case "paper":
					if (e.target.id == "rock") {
						gameResult.innerText = "Paper beats rock - you lose 😔";
					} else if (e.target.id == "scissors") {
						gameResult.innerText = "Scissors beats paper - you win! 🏆";
					}
					break;
				case "scissors":
					if (e.target.id == "paper") {
						gameResult.innerText = "Scissors beats paper - you lose 😔";
					} else if (e.target.id == "rock") {
						gameResult.innerText = "Rock beats scissors - you win! 🏆";
					}
			}
		}

		console.clear();
		console.log(`User choice: ${e.target.id}`);
		console.log(`Computer choice: ${computerChoice}`);
	}, 1000);
};

buttons.forEach((b) => b.addEventListener("click", userChoiceEvent));
