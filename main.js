const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const computerDisplay = document.querySelector(".computerDisplay");
const resultDisplay = document.querySelector(".result");
const winsDisplay = document.querySelector(".wins");
const lossesDisplay = document.querySelector(".losses");
const drawsDisplay = document.querySelector(".draws");
const roundsDisplay = document.querySelector(".rounds");
let resetBtn = document.querySelector("#btn-reset");

let wins = 0,
  losses = 0,
  draws = 0,
  rounds = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "it's a tie!";
    draws += 1;
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissors" || computerChoice === "lizard"
            ? "you win!"
            : "you lose!";
        break;
      case "paper":
        result =
          computerChoice === "rock" || computerChoice === "spock"
            ? "you win!"
            : "you lose!";
        break;
      case "scissors":
        result =
          computerChoice === "paper" || computerChoice === "lizard"
            ? "you win!"
            : "you lose!";
        break;
      case "lizard":
        result =
          computerChoice === "paper" || computerChoice === "spock"
            ? "you win!"
            : "you lose!";
        break;
      case "spock":
        result =
          computerChoice === "rock" || computerChoice === "scissors"
            ? "you win!"
            : "you lose!";
        break;
    }

    result === "you win!" ? (wins += 1) : (losses += 1);
  }

  rounds += 1;

  computerDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
  drawsDisplay.textContent = draws;
  roundsDisplay.textContent = rounds;
}

resetBtn.addEventListener("click", () => {
  (wins = 0), (losses = 0), (draws = 0), (rounds = 0);
  computerDisplay.textContent = "waiting";
  resultDisplay.textContent = "you choose first";
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
  drawsDisplay.textContent = draws;
  roundsDisplay.textContent = rounds;
});
