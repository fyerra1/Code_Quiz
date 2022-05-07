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

var j = 0;
var timeEl = document.querySelector(".time");
var secondsLeft = 30;

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
];


init.addEventListener("click", function() {
  starter.classList.add("hidden-panel");
  main.classList.remove("hidden-panel");
  startquiz();
  setTime();
});

function startquiz() {
 displayQuiz(j);
  }

choice.addEventListener("click", onClickHandler)

function displayQuiz(x) {
  displayQuestion.textContent = Questions[x].q;
  op1Button.textContent = Questions[x].o[0].text;
  op2Button.textContent = Questions[x].o[1].text;
  op3Button.textContent = Questions[x].o[2].text;
  op4Button.textContent = Questions[x].o[3].text; 

  op1Button.setAttribute("style", "color:black;");
  op2Button.setAttribute("style", "color:black;");
  op3Button.setAttribute("style", "color:black;");
  op4Button.setAttribute("style", "color:black;");
    }

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time left " + secondsLeft + "s";
  console.log(j);
      if(secondsLeft <= 0 || j < Questions.length) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        highScores();
      }
      }, 1000);
      function highScores() {
        main.classList.add("hidden-panel");
      }
    }
function onClickHandler (e) {
  console.log(e.target.type);
  if (e.target.type == "submit") {
    console.log("yes");
    console.log(e.target);

    var input = e.target.innerHTML;
    var userChoice = e.target;
    if(input == Questions[x=j].a) {
        userChoice.setAttribute("style", "color:green;")
      }else{userChoice.setAttribute("style", "color:red;");
    secondsLeft -= 5;}
    score = secondsLeft;
    console.log(score)
    console.log(Questions[x=j].a);
    console.log(input);
    console.log(userChoice);
  }
  j++;
  displayQuiz(j);
  console.log(score);
}









    

    // options.addEventListener("click", function() {
    //   j++;
    //   console.log(j);
    // }
    // )

// options.addEventListener("click", function() {
//   {displayQuestion.textContent = Questions[j].q;
//     op1Button.textContent = Questions[j].a[0].text;
//     op2Button.textContent = Questions[j].a[1].text;
//     op3Button.textContent = Questions[j].a[2].text;
//     op4Button.textContent = Questions[j].a[3].text;}
   
//     j++;
//     i++;
 
//   var input = event.target.innerHTML;
//   var userChoice = event.target
//   if(input == correctAnswers[i]) {
//       userChoice.setAttribute("style", "color:green;")
//     }else{userChoice.setAttribute("style", "color:red;")}
//     console.log(correctAnswers);
//       console.log(input);
// }
// );

// const highScores = [
//   {initials: "hf", score: 60},
//   {initials: "hf", score: 60},
//   {initials: "hf", score: 60},
//   {initials: "hf", score: 60},
// ]

// var for html question and options (var question = document.queryselector("#question"))
// variable array of questions (also with options or separately?)
// variable for scores

// click eventlister to start quiz here
// function to above eventlistner to append questions answers
// html variables = append question from array (textContent)

// click event listner for when user selects an option here
//function to above event lister to evaluate answer, count score, subtract time if wrong, and tell them if wrong or right

// for loop to transition to next set of questions/answers

// high score is concat of var score & user input/name var(prompt or text box queryselector.value)
// localStorage.setItem
//