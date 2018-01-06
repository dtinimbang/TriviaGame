
$(document).ready(function() {

var time = 20
var correctAnswers;
var wrongAnswers;
var intervalId;
var counter
    



//trying to creat an object with array.
    var triviaGame = [
         {
            q1: "Question1: This is from which show: Now this is a story....",
            a: "a:  Fresh Prince",
            b: "b:  punky Brewster",
            c: "c:  smiley",
            d: "d:  simpsons",
            correct1: "a"
        },

        {
            q2: "Question2: Dwight Shrute is best known for his role in?",
            a: "Office",
            b: "punky Brewster",
            c: "Stranger Things",
            d: "simpsons",
            correct2: "a"
        },

        {
            q3: "Question3: Lebron James Currently plays for which team",
            a: "Bulls",
            b: "Cavs",
            c: "Steamer",
            d: "Blakhawks",
            correct3: "b"
        },

        {
            q4: "Question4: Which Chicago Bull wore the #23",
            a: "Fresh Prince",
            b: "punky Brewster",
            c: "Michael Jordan",
            d: "Superman",
            correct4: "c"
        },

        {
            q5: "Question5: Harry Potter is a ",
            a: "Prince",
            b: "wizard",
            c: "soccer player",
            d: "model",
            correct5: "b"
        },
    ]


// questions and ansewrs
$("#qOne").append(triviaGame[0].q1);
//console.log(triviaGame[0].q1);
//console.log(triviaGame[0].a);
$("#q1a").append(triviaGame[0].a);
$("#q1b").append(triviaGame[0].b);
$("#q1c").append(triviaGame[0].c);
$("#q1d").append(triviaGame[0].d);
//-----------------------------------------------
$("#qTwo").append(triviaGame[1].q2);
//console.log(triviaGame[1].q2);
$("#q2a").append(triviaGame[1].a);
$("#q2b").append(triviaGame[1].b);
$("#q2c").append(triviaGame[1].c);
$("#q2d").append(triviaGame[1].d);
//-----------------------------------------------
$("#qThree").append(triviaGame[2].q3);
//console.log(triviaGame[2].q3);
$("#q3a").append(triviaGame[2].a);
$("#q3b").append(triviaGame[2].b);
$("#q3c").append(triviaGame[2].c);
$("#q3d").append(triviaGame[2].d);
//------------------------------------------------
$("#qFour").append(triviaGame[3].q4);
//console.log(triviaGame[3].q4);
$("#q4a").append(triviaGame[3].a);
$("#q4b").append(triviaGame[3].b);
$("#q4c").append(triviaGame[3].c);
$("#q4d").append(triviaGame[3].d);
//------------------------------------------------
$("#qFive").append(triviaGame[4].q5);
//console.log(triviaGame[4].q5);
$("#q5a").append(triviaGame[4].a);
$("#q5b").append(triviaGame[4].b);
$("#q5c").append(triviaGame[4].c);
$("#q5d").append(triviaGame[4].d);




//use this to hide start button on click


//test

function submitAnswers(){
    var total = 5;
    var score = 0;

    //get user input  ***NOT WORKING
var q1 = document.forms["quizForm"]["q1"].value;
var q1 = document.forms["quizForm"]["q2"].value;
var q1 = document.forms["quizForm"]["q3"].value;
var q1 = document.forms["quizForm"]["q4"].value;
var q1 = document.forms["quizForm"]["q5"].value;

for(i=1; i<= total; i++){
    if(eval("q" +i) == null || ("q" +i == ''))
    alert('you missed question' +i);
    return false;
}
}






    //  Set our number counter to 100.
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

