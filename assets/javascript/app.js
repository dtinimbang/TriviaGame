
$(document).ready(function() {


var correctAnswers;
var wrongAnswers;
var intervalId;
var counter
    



//====================================
// question answers objects in arrays
//====================================
var triviaQuestions = [{
	question: "what is ?",
	answerList: ["Michael J. Sullivan", "James P. Sullivan", "Sully Sullivan", "Jeff"],
	answer: 1
},{
	question: "What kind of bug is Frances from 'A Bug's Life'?",
	answerList: ["Ladybug", "Ant", "Grasshopper", "Caterpillar"],
	answer: 0
},{
	question: "What's the name of Woody's boy?",
	answerList: ["Andy", "Danny", "Max", "Sid"],
	answer: 0
},{
	question: "Merida's mother changes into what after eating the enchanted cake?",
	answerList: ["Dragon", "Witch", "Bear", "Will-o'-the-Wisp"],
	answer: 2
},{
	question: "What precious cargo is Wall-E protecting?",
	answerList: ["trash", "photos", "gold", "a plant"],
	answer: 3
},{
	question: "Which of the following is not an emotion showed in 'Inside Out'?",
	answerList: ["Confusion", "Sadness", "Fear", "Disgust"],
	answer: 0
},{
	question: "What is the name of Mr. Incredible's nemesis?",
	answerList: ["Frozone", "Syndrome", "Mirage", "Elastigirl"],
	answer: 1
},{
	question: "What is Nemo's mom's name?",
	answerList: ["Pearl", "Deb", "Coral", "Dory"],
	answer: 2
},{
	question: "What is the big race called in 'Cars'?",
	answerList: ["Daytona 500", "Piston Cup", "Radiator Springs", "Route 66"],
	answer: 1
},{
	question: "In 'Up', what is Russell trying to earn a badge for?",
	answerList: ["Wild Wilderness Scouts", "Explorers of America", "Wilderness Explorer", "Boy Scouts"],
	answer: 2
},{
	question: "From 'The Good Dinosaur,' what does Arlo call his pet?",
	answerList: ["Spunky", "Spot", "Sparky", "Fido"],
	answer: 1
},{
	question: "What fraternity does Mike Wazowski end up joining in college?",
	answerList: ["Zeta Hiss Alpha", "Python Nu Kappa", "Roar Omega Roar", "Oozma Kappa"],
	answer: 3
},{
	question: "Which of the following ISN'T a phrase when you pull on Woody's drawstring?",
	answerList: ["Reach for the sky!", "Ride like the wind, Bullseye!", "There's a snake in my boot!", "Somebody's poisoned the water hole!"],
	answer: 1
},{
	question: "Who's your friend who like's to play...?",
	answerList: ["Bong Bong, Bong Bong", "Ding Dong, Ding Dong", "Bing Bong, Bing Bong", "Sing Song, Sing Song"],
	answer: 2
},{
	question: "Do you think it's odd that 'Ratatouille' takes place is Paris, but the two main characters don't have accents?",
	answerList: ["Yes! So weird!", "They don't have accents?", "Nope!", "What's a Ratatouille?"],
	answer: 0
}];




// going to try and redo this with answers in a array.
    // var triviaGame = [
    //      {
    //         q1: "Question1: This is from which show: Now this is a story....",
    //         a: "a:  Fresh Prince",
    //         b: "b:  punky Brewster",
    //         c: "c:  smiley",
    //         d: "d:  simpsons",
    //         correct1: "a"
    //     },

    //     {
    //         q2: "Question2: Dwight Shrute is best known for his role in?",
    //         a: "Office",
    //         b: "punky Brewster",
    //         c: "Stranger Things",
    //         d: "simpsons",
    //         correct2: "a"
    //     },

    //     {
    //         q3: "Question3: Lebron James Currently plays for which team",
    //         a: "Bulls",
    //         b: "Cavs",
    //         c: "Steamer",
    //         d: "Blakhawks",
    //         correct3: "b"
    //     },

    //     {
    //         q4: "Question4: Which Chicago Bull wore the #23",
    //         a: "Fresh Prince",
    //         b: "punky Brewster",
    //         c: "Michael Jordan",
    //         d: "Superman",
    //         correct4: "c"
    //     },

    //     {
    //         q5: "Question5: Harry Potter is a ",
    //         a: "Prince",
    //         b: "wizard",
    //         c: "soccer player",
    //         d: "model",
    //         correct5: "b"
    //     },
    // ]


//==============================
// question answers and arrays
//==============================

// $("#qOne").append(triviaGame[0].q1);
// //console.log(triviaGame[0].q1);
// //console.log(triviaGame[0].a);
// $("#q1a").append(triviaGame[0].a);
// $("#q1b").append(triviaGame[0].b);
// $("#q1c").append(triviaGame[0].c);
// $("#q1d").append(triviaGame[0].d);
// //-----------------------------------------------
// $("#qTwo").append(triviaGame[1].q2);
// //console.log(triviaGame[1].q2);
// $("#q2a").append(triviaGame[1].a);
// $("#q2b").append(triviaGame[1].b);
// $("#q2c").append(triviaGame[1].c);
// $("#q2d").append(triviaGame[1].d);
// //-----------------------------------------------
// $("#qThree").append(triviaGame[2].q3);
// //console.log(triviaGame[2].q3);
// $("#q3a").append(triviaGame[2].a);
// $("#q3b").append(triviaGame[2].b);
// $("#q3c").append(triviaGame[2].c);
// $("#q3d").append(triviaGame[2].d);
// //------------------------------------------------
// $("#qFour").append(triviaGame[3].q4);
// //console.log(triviaGame[3].q4);
// $("#q4a").append(triviaGame[3].a);
// $("#q4b").append(triviaGame[3].b);
// $("#q4c").append(triviaGame[3].c);
// $("#q4d").append(triviaGame[3].d);
// //------------------------------------------------
// $("#qFive").append(triviaGame[4].q5);
// //console.log(triviaGame[4].q5);
// $("#q5a").append(triviaGame[4].a);
// $("#q5b").append(triviaGame[4].b);
// $("#q5c").append(triviaGame[4].c);
// $("#q5d").append(triviaGame[4].d);




// //==============================
// //       LOGIC
// //==============================


// //==============================
// // THIS IS NOT WORKING !!!!!!!!!
// //==============================

// function submitAnswers(){
//     var total = 5;
//     var score = 0;


// var q1 = document.forms["quizForm"]["q1"].value;
// var q1 = document.forms["quizForm"]["q2"].value;
// var q1 = document.forms["quizForm"]["q3"].value;
// var q1 = document.forms["quizForm"]["q4"].value;
// var q1 = document.forms["quizForm"]["q5"].value;

// for(i=1; i<= total; i++){
//     if(eval("q" +i) == null || ("q" +i == ''))
//     alert('you missed question' +i);
//     return false;
// }
// }



//==============================
//          timer
//==============================


    //  Set our number counter to 31.
    var number = 31;
    
        //  Variable that will hold our interval ID when we execute
        //  the "run" function
        var intervalId;
    

        //  The run function sets an interval
        //  that runs the decrement function once a second.
        //  *****BUG FIX******** 
        //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
        function run() {
          clearInterval(intervalId);
          intervalId = setInterval(decrement, 1000);
        }
    
        //  The decrement function.
        function decrement() {
    
          //  Decrease number by one.
          number--;
    
          //  Show the number in the #show-number tag.
          $("#show-number").html("<h2>" + number + "</h2>");
    
    
          //  Once number hits zero...
          if (number === 0) {
    
            //  ...run the stop function.
            stop();
    
            //  Alert the user that time is up.
            alert("Time Up!");
          }
        }
    
        //  The stop function
        function stop() {
    
          //  Clears our intervalId
          //  We just pass the name of the interval
          //  to the clearInterval function.
          clearInterval(intervalId);
        }
    
        //  Execute the run function.
        run();


});

