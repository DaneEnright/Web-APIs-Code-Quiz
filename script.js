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




}











    button.addEventListener("click", answerQuestion);
















// var carousel = document.querySelector(".carouselbox");
// // TODO: Which element is the following line of code selecting?
// var next = carousel.querySelector(".next"); // This line is selecting class=next as the element
// var prev = carousel.querySelector(".prev"); // This line is selecting class=prev as the element
// var index = 0; //Set invitial value in the array to the first element
// var currentImage;
