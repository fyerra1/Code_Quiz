var score = 0;
var displayQuestion = document.querySelector("#question");
var op1Button = document.querySelector("#op1");
var op2Button = document.querySelector("#op2");
var op3Button = document.querySelector("#op3");
var op4Button = document.querySelector("#op4");
var init = document.querySelector("#begin");
var starter = document.querySelector(".starter-panel");
var main = document.querySelector(".main-panel");
var choice = document.querySelector(".option-container")
var message = document.querySelector(".message");
var userInitials = document.querySelector("#initials");
var submit = document.querySelector("#submit");

var j = 0;
var timeEl = document.querySelector(".time");
var secondsLeft = 30;
var userInitial = document.querySelector("#user-initial");
var userScore = document.querySelector("#user-score");
var user = document.querySelector(".input-group")
var scores = document.querySelector(".scores")

const Questions = [
  {
    q: "Which of the options below is NOT a window object method?",
    o: [
      { text: "prompt()"},
      { text: "alert()"},
      { text: "show()"},
      { text: "confirm()"},
    ],
    a: "show()"
  },
  {
    q: "Which of the options below is NOT a valid JSON data type?",
    o: [
      { text: "number"},
      { text: "null"},
      { text: "string"},
      { text: "undefined"},
    ],
    a: "undefined"
  },
  {
    q: "Complete this statement. 'window.localStorage...'",
    o: [
      { text: "does not store key/value pairs in a web browser"},
      { text: "stores the data for one session"},
      { text: "stores the data with no expiration date"},
      { text: "are for client(browser) appications"},
    ],
    a: "stores the data with no expiration date"
  },
  {
    q: "Which of the following is NOT a valid javscript method?",
    o: [
      { text: "getElementsByClassName"},
      { text: "getElementsByType"},
      { text: "querySelector"},
      { text: "querySelectorAll"},
    ],
    a: "getElementsByType"
  }
];

// click function to start quiz 
init.addEventListener("click", function() {
  starter.classList.add("hidden-panel");
  main.classList.remove("hidden-panel");
  startquiz();
  setTime();
});

function startquiz() {
 displayQuiz(j);
  }

// click function to transition between questions 
choice.addEventListener("click", onClickHandler)

// function to display questions & options
function displayQuiz(x) {
  displayQuestion.textContent = Questions[x].q;
  op1Button.textContent = Questions[x].o[0].text;
  op2Button.textContent = Questions[x].o[1].text;
  op3Button.textContent = Questions[x].o[2].text;
  op4Button.textContent = Questions[x].o[3].text; 
    }

// funciton to evaluate user answers
function onClickHandler (e) {
  if (e.target.type == "submit") {
    var input = e.target.innerHTML;
  if(input == Questions[x=j].a) {
    message.textContent = "correct!";
    }else{message.textContent = "wrong!";;
    // will decrease timer by 5 seconds if user selects wrong answer
    secondsLeft -= 5;}
  }
  j++;
  displayQuiz(j);
  score = secondsLeft;
// stores time left to local storage
  localStorage.setItem("score", score);
  render();
}

// function to start timer
function setTime() {
    // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time left " + secondsLeft + "s";
  if(secondsLeft <= 0 || j == Questions.length) {
    // Stops execution of action at set interval or all questions have been answered
    clearInterval(timerInterval);
    // Calls function to hide questions/options and display textbox to enter initials
    highScores();
    }
      }, 1000);
      function highScores() {
        main.classList.add("hidden-panel");
        user.classList.remove("hidden-panel");
      }
    }

submit.addEventListener("click", captureUser)

function captureUser(event) {
event.preventDefault();
// captures user initials
var initials = document.querySelector("#initials").value;
// stores user initials to local storage
localStorage.setItem("initials", initials);
render();

user.classList.add("hidden-panel");
scores.classList.remove("hidden-panel");
}

// function to render user initial and user score
function render() {
  var score = localStorage.getItem("score");
  var initials = localStorage.getItem("initials");
  userInitial.textContent = initials;
  userScore.textContent = score;
}

