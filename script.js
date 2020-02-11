    //Assign Code
       var generateBtn = document.getElementById("start");
        var startQuiz=document.getElementById("start quiz");
        var questions = document.getElementById("questions");

        var choice0 = document.getElementById("A");
        var choice1 = document.getElementById("B");
        var choice2 = document.getElementById("C");
        var choice3 = document.getElementById("D");

        var timer = document.getElementById("countdown");
        

       document.getElementById("start").addEventListener("click", function() {
          //console.log("start");
      });
        // We start the game with a score of 0
        var score = 0;
        questions[0].question
        question[0].choiceA
        question[0].choiceB
        question[0].choiceC
        question[0].choiceA 
        question[0].correct 

        function start (){
          var questions =[
         {  question: " Who said, Ask any racer, any real racer,it doesn't matter if you win by an inch or a mile, winning is winning?", 
            a:"Dom" ,
            choiceA:"Vince",
            choiceB:"Leon",
            choiceC:"Hector",
            choiceD:"Dom"     
      },
        {    question: "Who drove the orange lamborghini mercielago on the ice?",
             a:"Tyrese",
             choiceA:"The Rock" ,
             choiceB:"Jason Statham",
             choiceC:"VIn Disel",
             choiceD:"Tyrese"
     },
        { question: "What is the beer of choice in the movie?",
             a: "corona" ,
             choiceA:"Budweiser",
             choiceB:"Corona",
             choiceC:"Blue Moon",
             choiceD:"Coors Light"
    },
        { question: "What was the car of choice for Dom", 
             a: "Dodge Charger",
             choiceA:"Dodge Charger",
             choiceB:"Mustang gt350",
             choiceC:"Toyota Supra",
             choiceD:"Honda civi Si" 
    },
        {  question: "What is Brian's true profession?.",
            a: "cop" ,
            choiceA:"chef",
            choiceB:"accountant",
            choiceC:"mechanic",
            choiceD:"cop" 
    },
    
];

 
    start()

    //loop each question
    for(var i = 0; i < questions.length; i++){
        var response = (questions[i].q);
      if(response == questions[i].answer ){}
    }
   // Compare answers
    if ((response === true && questions[i].a === "t") ||
     (response === false && questions[i].a === "t")) {
         // Increase score
      score++;
    alert("Correct!");
 }
    else {
     alert("Wrong!");
 }
     

}


       







