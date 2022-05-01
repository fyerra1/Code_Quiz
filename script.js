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

const Questions = [
  {
    // id: 0,
    q: "Which of the options below is NOT a window object method?",
    a: [
      { text: "prompt()", isCorrect: false },
      { text: "alert()", isCorrect: false },
      { text: "show()", isCorrect: true },
      { text: "confirm()", isCorrect: false },
    ],
  },
  {
    // id: 1,
    q: "Which of the options below is NOT a valid JSON data type?",
    a: [
      { text: "number", isCorrect: false },
      { text: "null", isCorrect: false },
      { text: "string", isCorrect: false },
      { text: "undefined", isCorrect: true },
    ],
  },
  {
    // id: 2,
    q: "Complete this statement. /'window.localStorage.../'",
    a: [
      { text: "does not store key/value pairs in a web browser", isCorrect: false },
      { text: "stores the data for one session", isCorrect: false },
      { text: "stores the data with no expiration date", isCorrect: true },
      { text: "are for client(browser) appications", isCorrect: false },
    ],
  },
];

var score = 0;
var displayQuestion = document.querySelector("#question");
var options = document.querySelector(".option-container");
var op1Button = document.querySelector("#op1");
var op2Button = document.querySelector("#op2");
var op3Button = document.querySelector("#op3");
var op4Button = document.querySelector("#op4");

var correctAnswers = ["show()", "undefined", "stores the data with no expiration date"];

var j = 0;
var i = 0;



options.addEventListener("click", function(event) {
{
  displayQuestion.textContent = Questions[j].q;
  op1Button.textContent = Questions[j].a[0].text;
  op2Button.textContent = Questions[j].a[1].text;
  op3Button.textContent = Questions[j].a[2].text;
  op4Button.textContent = Questions[j].a[3].text;
}  

{j++;}

{
var input = event.target.innerHTML;
var userChoice = event.target
i++
if(input == correctAnswers[i]) {
  userChoice.setAttribute("style", "color:green;")
}else{userChoice.setAttribute("style", "color:red;")}
console.log(correctAnswers[i]);
  console.log(input);
}  
});


// var j = 0;
// options.addEventListener("click", function () {
//   console.log(Questions[j])
//   j++
// })



// .textContent


// op4Button.textContent = "yo what up"

// for (var i = 0; i < animals.length; i++) {
//   console.log(animals[i])
// }

// var j = 0;
// op4Button.addEventListener("click", function() {
//   console.log(Questions[j])
//   j++
// });

const highScores = [
  {initials: "hf", score: 60},
  {initials: "hf", score: 60},
  {initials: "hf", score: 60},
  {initials: "hf", score: 60},
]