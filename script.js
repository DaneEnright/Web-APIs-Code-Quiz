var startButton = document.querySelector("#startGame");
var answers1 = document.querySelector(".answers");
var questions1 = document.querySelector(".container");
var timer = document.querySelector("#timer");
var addToHighScores = document.querySelector("#Submit");
var questionDisplay = document.querySelector(".Question-Titles");
var testDisplay = document.querySelector("#test-display");
var buttonA = document.querySelector("#A");
var buttonB = document.querySelector("#B");
var buttonC = document.querySelector("#C");
var buttonD = document.querySelector("#D");
var answerElement = document.querySelector(".buttonAnswers");

var questions = [
  {
    questionTitle: "Commonly used data types do not include:",
    choices: ["strings", "boolean", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    questionTitle: "Arrays in Javascript can be used to store:",
    choices: [
      "numbers & strings",
      "other arrays",
      "boolean",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    questionTitle: "The condtion of an if/else statement is enclosed within:",
    choices: ["quotes", "curly brackets", "parantheses", "square brackets"],
    answer: "parantheses",
  },
  {
    questionTitle:
      "String values must be enclosed within _________ when being assigned variables:",
    choices: ["commas", "curly brackets", "quotes", "parantheses"],
    answer: "curly brackets",
  },
  {
    questionTitle:
      "A very useful tool used during development and debugging for printing content to debugger is:",
    choices: ["Javascript", "Terminal/Gitbash", "for loops", "console.log"],
    answer: "console.log",
  },
];

var secondsLeft = 45;
var timerId;

// var button = document.querySelector(".button");

startButton.addEventListener("click", function (event) {
  event.preventDefault();

  startQuiz();
  testDisplay.setAttribute("style", "display: block");
});

function setTime() {
  secondsLeft--;
  timer.innerHTML = secondsLeft + " Timer ";

  if (secondsLeft <= 0) {
    clearInterval(timerId);
  }
}

// button.addEventListener("click", answerQuestion)

function startQuiz() {
  timerId = setInterval(setTime, 1000);

  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
    questionDisplay.innerHTML = questions[i].questionTitle;
    buttonA.innerHTML = questions[i].choices[0];
    buttonB.innerHTML = questions[i].choices[1];
    buttonC.innerHTML = questions[i].choices[2];
    buttonD.innerHTML = questions[i].choices[3];
    buttonA.setAttribute("value", questions[i].choices[0]);
    buttonB.setAttribute("value", questions[i].choices[1]);
    buttonC.setAttribute("value", questions[i].choices[2]);
    buttonD.setAttribute("value", questions[i].choices[3]);
  }

  if (questions === true) {
    alert("correct");
  } else {
    alert("incorrect");
    secondsLeft -= 5;
  }
}

// startQuiz();
// addToHighScores.addEventListener("click", function () {
//   location.reload();
//   // add set item to local storage
// });
