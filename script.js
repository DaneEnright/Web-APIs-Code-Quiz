var startButton = document.querySelector("#button");
var answers1 =document.querySelector(".answers");
var questions = document.querySelector(".container");
var timer = document.querySelector("#timer");
var secondsLeft = 45;

var commonData = ["strings", "boolean", "alerts", "numbers"];
var arrayJavaScript = [
  "numbers & strings",
  "other arrays",
  "booleans",
  "all of the above"
];
var ifElseStatement = [
  "quotes",
  "curly brackets",
  "parantheses",
  "square brackets"
];
var stringValues = ["commas", "curly brackets", "quotes", "parantheses"];
var deBugger = ["Javascript", "Terminal/Gitbash", "for loops", "console.log"];


var button = document.querySelector(".button");

startButton.addEventListener("click", function(event) {
    event.preventDefault();
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left ";

        if(secondsLeft === 0) {
            clearInterval(timerInvetal);
        }

    }, 1000);

}

setTime();

function startQuiz() {
var question1 = "Commonly used data types do not include: ";
var question2 = "Arrays in Javascript can be used to store: ";
var question3 = "The condtion of an if/else statement is enclosed within:";
var question4= "String values must be enclosed within _________ when being assigned variables ";
var question5= "A very useful tool used during development and debugging for printing content to debugger is ";

for question1("quest1") {
    question1.textcontent = ;
    commonData.textcontent = [i];
}
for question2("quest2") {
    question2.textcontent = ;
    arrayJavaScript.textcontent = [i];
}
for question3("quest3") {
    question3.textcontent = ;
    ifElseStatement.textcontent = [i];
}
for question4("quest4") {
    question4.textcontent = ;
    stringValues.textcontent = [i];
}
for question5("quest5") {
    question5.textcontent = ;
    deBugger.textcontent = [i];
}


}


function addHighScores() {


}








    button.addEventListener("click", answerQuestion);

















