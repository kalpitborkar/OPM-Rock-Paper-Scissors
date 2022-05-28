let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const saitama_result_icon_div = document.getElementById("result-icon-saitama");
const bang_result_icon_div = document.getElementById("result-icon-bang");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
    computerChoice
  )}. Saitama wins!`;

  saitama_result_icon_div.classList.add("green-glow");
  bang_result_icon_div.classList.add("red-glow");
  setTimeout(function () {
    saitama_result_icon_div.classList.remove("green-glow");
    bang_result_icon_div.classList.remove("red-glow");
  }, 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(
    computerChoice
  )}. Bang wins!`;

  saitama_result_icon_div.classList.add("red-glow");
  bang_result_icon_div.classList.add("green-glow");
  setTimeout(function () {
    saitama_result_icon_div.classList.remove("red-glow");
    bang_result_icon_div.classList.remove("green-glow");
  }, 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(userChoice)} ties ${convertToWord(
    computerChoice
  )}. It's a draw.`;

  saitama_result_icon_div.classList.add("gray-glow");
  bang_result_icon_div.classList.add("gray-glow");
  setTimeout(function () {
    saitama_result_icon_div.classList.remove("gray-glow");
    bang_result_icon_div.classList.remove("gray-glow");
  }, 300);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
