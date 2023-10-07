const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const status = document.getElementById("status");

const computer_score = document.getElementById("computer-score");
const your_score = document.getElementById("your-score");

const random_array = ["1", "2", "3"];

let which_clicked = "";

let computer_points = 0;
let your_points = 0;

function randomSequence () {
  let sequence = random_array[Math.floor(Math.random() * random_array.length)];

  if (sequence === "1") {
    if (which_clicked === "rock") {
      status.innerText = "Tie!";
    }

    else if (which_clicked === "paper") {
      status.innerText = "You won this round!";

      your_points = your_points + 1;
      your_score.innerText = "Your Score: " + your_points;
    }

    else if (which_clicked === "scissors") {
      status.innerText = "The computer won this round!";

      computer_points = computer_points + 1;
      computer_score.innerText = "Computer Score: " + computer_points;
    }
  }

  else if (sequence === "2") {
    if (which_clicked === "rock") {
      status.innerText = "The computer won this round!";

      computer_points = computer_points + 1;
      computer_score.innerText = "Computer Score: " + computer_points;
    }

    else if (which_clicked === "paper") {
      status.innerText = "Tie!";
    }

    else if (which_clicked === "scissors") {
      status.innerText = "You won this round!";

      your_points = your_points + 1;
      your_score.innerText = "Your Score: " + your_points;
    }
  }

  else if (sequence === "3") {
    if (which_clicked === "rock") {
      status.innerText = "You won this round!";

      your_points = your_points + 1;
      your_score.innerText = "Your Score: " + your_points;
    }

    else if (which_clicked === "paper") {
      status.innerText = "The computer won this round!";

      computer_points = computer_points + 1;
      computer_score.innerText = "Computer Score: " + computer_points;
    }

    else if (which_clicked === "scissors") {
      status.innerText = "Tie!";
    }
  }
}

$("#rock").click(function () {
  which_clicked = "rock";

  console.log("Rock selected");

  randomSequence();
});

$("#paper").click(function () {
  which_clicked = "paper";

  console.log("Paper selected");

  randomSequence();
});

$("#scissors").click(function () {
  which_clicked = "scissors";

  console.log("Scissors selected");

  randomSequence();
});