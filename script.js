    //Assign Code
       var generateBtn = document.getElementById("start")
       
      

        // We start the game with a score of 0
      var score = 0;

         var questions = [
         {  q: " Who said, Ask any racer, any real racer,it doesn't matter if you win by an inch or a mile, winning is winning?", 
            a:"Dom" ,
            c1:"Vince",
            c2:"Leon",
            c3:"Hector",
            c4:"Dom"
            //console.log("answer");
      },
        { q: "Who drove the orange lamborghini mercielago on the ice?",
             a:"Tyrese",
             c1:"The Rock" ,
             c2:"Jason Statham",
             c3:"VIn Disel",
             c4:"Tyrese"
     },
        { q: "What is the beer of choice in the movie?",
             a: "corona" ,
             c1:"Budweiser",
             c2:"Corona",
             c3:"Blue Moon",
             c4:"Coors Light"
    },
        { q: "What was the car of choice for Dom", 
             a: "Dodge Charger",
             c1:"Dodge Charger",
             c2:"Mustang gt350",
             c3:"Toyota Supra",
             c4:"Honda civi Si" 
    },
        {  q: "What is Brian's true profession?.",
            a: "cop" ,
            c1:"chef",
            c2:"accountant",
            c3:"mechanic",
            c4:"cop" 
    },
    
];
    //loop each question
    for(var i = 0; i < questions.length; i++){
        //var response = prompt(questions[i].q);
      if(response == questions[i].answer ){}
    }
   // Compare answers
    if ((answer === true && questions[i].a === "t") ||
     (answer === false && questions[i].a === "f")) {
         // Increase score
      score++;
    alert("Correct!");
 }
    else {
     alert("Wrong!");
 }
     
      


       







