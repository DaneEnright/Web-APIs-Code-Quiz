var startButton = document.querySelector("#button");
var answers1 =document.querySelector(".answers");
var questions = document.querySelector(".container");
var timer = document.querySelector("#timer");
var addToHighScores = document.querySelector("Submit");

var questions =[
    {
        questionTitle:"how many states in US?",
        choices:["52","50","56","58"],
        answer: "52"
    },
    {
        questionTitle:"how many states in US?",
        choices:["52","50","56","58"],
        answer: "52"
    },
    {
        questionTitle:"how many states in US?",
        choices:["52","50","56","58"],
        answer: "52"
    },
    {
        questionTitle:"how many states in US?",
        choices:["52","50","56","58"],
        answer: "52"
    },
    {
        questionTitle:"how many states in US?",
        choices:["52","50","56","58"],
        answer: "52"
    },
]


// var commonData = ["strings", "boolean", "alerts", "numbers"];
// var arrayJavaScript = [
//   "numbers & strings",
//   "other arrays",
//   "booleans",
//   "all of the above"
// ];
// var ifElseStatement = [
//   "quotes",
//   "curly brackets",
//   "parantheses",
//   "square brackets"
// ];
// var stringValues = ["commas", "curly brackets", "quotes", "parantheses"];
// var deBugger = ["Javascript", "Terminal/Gitbash", "for loops", "console.log"];

var secondsLeft = 45;
var timerId;

var button = document.querySelector(".button");

startButton.addEventListener("click", function(event) {
    event.preventDefault();
};

function setTime() {
   
        secondsLeft--;
        timer.textContent = secondsLeft + " Timer ";

        if(secondsLeft <= 0) {
            clearInterval(timerId);
        }

  

};



// button.addEventListener("click", answerQuestion)

function startQuiz() {
timerId = setInterval(setTime, 1000)
// var question1 = "Commonly used data types do not include: ";
// var question2 = "Arrays in Javascript can be used to store: ";
// var question3 = "The condtion of an if/else statement is enclosed within:";
// var question4 = "String values must be enclosed within _________ when being assigned variables ";
// var question5 = "A very useful tool used during development and debugging for printing content to debugger is ";

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
for question1("quest1") {
    question1.textcontent = question1;
    commonData.textcontent = [i];
    if ([2] === true) {
        alert("correct")
    } else {
        alert("incorrect")
        timeLeft-=5;




}






addToHighScores.addEventListener("click", function () {
    location.reload();
    // add set item to local storage
  });


