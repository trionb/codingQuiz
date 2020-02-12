//Assign Code
let startBtn = document.getElementById("start");
//  let startQuiz=document.getElementById("start quiz");
let questionElement = document.getElementById("questions");

let choice0 = document.getElementById("choiceA");
let choice1 = document.getElementById("choiceB");
let choice2 = document.getElementById("choiceC");
let choice3 = document.getElementById("choiceD");

let timer = document.getElementById("countdown");

//startQuiz.addEventListener("click", start);


// startBtn.addEventListener("click", function(event){console.log(event)});
startBtn.addEventListener("click", startQuiz);
function startQuiz() {
    console.log("see if start works");
    startBtn.classList.add("hide")
}

// We start the game with a score of 0
let score = 0;
// question[0].questions
// question[0].choiceA
// question[0].choiceB
// question[0].choiceC
// question[0].choiceA 
// question[0].correct 

//console.log("started")
//array for all questions
let questions = [
    {
        question: " Who said, Ask any racer, any real racer,it doesn't matter if you win by an inch or a mile, winning is winning?",
        a:[3],
        choiceA: "Vince",
        choiceB: "Leon",
        choiceC: "Hector",
        choiceD: "Dom"
    },
    {
        question: "Who drove the orange lamborghini mercielago on the ice?",
        a:[3],
        choiceA: "The Rock",
        choiceB: "Jason Statham",
        choiceC: "VIn Disel",
        choiceD: "Tyrese"
    },
    {
        question: "What is the beer of choice in the movie?",
        a:[1],
        choiceA: "Budweiser",
        choiceB: "Corona",
        choiceC: "Blue Moon",
        choiceD: "Coors Light"
    },
    {
        question: "What was the car of choice for Dom",
        a:[0],
        choiceA: "Dodge Charger",
        choiceB: "Mustang gt350",
        choiceC: "Toyota Supra",
        choiceD: "Honda civi Si"
    },
    {
        question: "What is Brian's true profession?.",
        a:[2],
        choiceA: "chef",
        choiceB: "accountant",
        choiceC: "cop",
        choiceD: "mechanic"
    },

];
//display question on container
function showQuestion() {
    questionElement.innerText = question.question
}



// //loop each question
// for (let i = 0; i < questions.length; i++) {
//     let response = (questions[i].q);
//     if (response == questions[i].answer) { }
// }
// // Compare answers
// if ((response === true && questions[i].a === "t") ||
//     (response === false && questions[i].a === "t")) {
//     // Increase score
//     score++;
//     alert("Correct!");
// }
// else {
//     alert("Wrong!");
// }

let var1 = [];
let var2 = JSON.parse(localStorage.getItem("score"));
if (var2 !== null) {
    var1 = var2;
}
localStorage.setItem("questions", score);
console.log(localStorage);

