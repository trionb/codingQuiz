//Assign Code
let startBtn = document.getElementById("start");

let startText = document.getElementById("note");
//  let startQuiz=document.getElementById("start quiz");

// let choice0 = document.getElementById("choiceA");
// let choice1 = document.getElementById("choiceB");
// let choice2 = document.getElementById("choiceC");
// let choice3 = document.getElementById("choiceD");


//startQuiz.addEventListener("click", start);

// startBtn.addEventListener("click", function(event){console.log(event)});
startBtn.addEventListener("click", startQuiz);
function startQuiz() {
    //console.log("see if start works");
    startBtn.classList.add("hide")
    var x = document.getElementById("note");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
     

}
let questionElement = document.getElementById("questions");
//console.log(questionElement);

startBtn.addEventListener("click", startClickHandler);

function startClickHandler(event) {
    //console.log(event.target);
    //displayNextQuestions();


//make a function for questions to be shown

let questions = [
    {
        question: " Who said, Ask any racer, any real racer,it doesn't matter if you win by an inch or a mile, winning is winning?",
        choiceA: "Vince",
        choiceB: "Leon",
        choiceC: "Hector",
        choiceD: "Dom",
        answer: 3
    },
    {
        question: "Who drove the orange lamborghini mercielago on the ice?",

        choiceA: "The Rock",
        choiceB: "Jason Statham",
        choiceC: "VIn Disel",
        choiceD: "Tyrese",
        answer: 3
    },
    {
        question: "What is the beer of choice in the movie?",
        choiceA: "Budweiser",
        choiceB: "Corona",
        choiceC: "Blue Moon",
        choiceD: "Coors Light",
        answer: 1
    },
    {
        question: "What was the car of choice for Dom",
        choiceA: "Dodge Charger",
        choiceB: "Mustang gt350",
        choiceC: "Toyota Supra",
        choiceD: "Honda civi Si",
        answer: 0
    },
    {
        question: "What is Brian's true profession?.",
        choiceA: "chef",
        choiceB: "accountant",
        choiceC: "cop",
        choiceD: "mechanic",
        answer: 2
    },
];
let questionIndex = 0;

function displayNextQuestions() {
}
let currentQuestion = questions[questionIndex];

let questionDiv = document.createElement('div');
questionDiv.textContent = currentQuestion.question;

let choiceADiv = document.createElement('div');
choiceADiv.textContent = currentQuestion.choiceA;

let choiceBDiv = document.createElement('div');
choiceBDiv.textContent = currentQuestion.choiceB;

let choiceCDiv = document.createElement('div');
choiceCDiv.textContent = currentQuestion.choiceC;

let choiceDDiv = document.createElement('div');
choiceDDiv.textContent = currentQuestion.choiceD;

let answerDiv = document.createElement('div');
answerDiv.textContent = currentQuestion.answer;

}
//set timer to countdown when quiz is started
let timer = document.getElementById("time");
    function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};





















// // We start the game with a score of 0
// let score = 0;
// // question[0].questions
// // question[0].choiceA
// // question[0].choiceB
// // question[0].choiceC
// // question[0].choiceA 
// // question[0].correct 

// //console.log("started")
// //array for all questions

// //display question on container
// function showQuestion() {
//     questionElement.innerText = question.question
// }



// // //loop each question
// // for (let i = 0; i < questions.length; i++) {
// //     let response = (questions[i].q);
// //     if (response == questions[i].answer) { }
// // }
// // // Compare answers
// // if ((response === true && questions[i].a === "t") ||
// //     (response === false && questions[i].a === "t")) {
// //     // Increase score
// //     score++;
// //     alert("Correct!");
// // }
// // else {
// //     alert("Wrong!");
// // }

// let var1 = [];
// let var2 = JSON.parse(localStorage.getItem("score"));
// if (var2 !== null) {
//     var1 = var2;
// }
// localStorage.setItem("questions", score);
// console.log(localStorage);

