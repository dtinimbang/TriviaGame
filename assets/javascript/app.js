

//$(document).ready(function() {



    



//====================================
// attempt to put questions answerlist in array form.  May tackle this if
// I can complete project other way
//====================================
// var triviaQuestions = [{
// 	question: "This is a test 00?",
// 	answerList: ["1", "2", "3", "4"],
// 	answer: 0
// },{
// 	question: "This is a test 0?",
// 	answerList: ["1", "2", "3", "4"],
// 	answer: 0
// },{
// 	question: "This is a test 1?",
// 	answerList: ["1", "2", "3", "4"],
// 	answer: 0
// },{
// 	question: "This is a test 2?",
// 	answerList: ["1", "2", "3", "4"],
// 	answer: 0
// },{
// 	question: "This is a test 3?",
// 	answerList: ["1", "2", "3", "4"],
// 	answer: 0
// },{
// 	question: "This is a test 4?",
// 	answerList: ["1", "2", "3", "4"],
// 	answer: 0
// },{
// 	question: "This is a test 5?",
// 	answerList: ["1", "2", "3", "4"],
// 	answer: 0
// }];

// for(i=0; i<triviaQuestions.length; i++){
// $(#question).append(triviaQuestions.question[i])

// };







	// Intialize the game with hidden Divs
	$("#mid_game_container").hide();
	$("#end_container").hide();

    // var correctCount=0;
    // var wrongCount=0;
    // var unansweredCount=0;
	

	;




	$("#start_button").on("click", function(){

		// Hide the start Div from the user
		$("#start_container").hide();


		// Show the Game Div
		$("#mid_game_container").show();

		run();
		return;

	});



    var answers = ['a. clean and jerk', 'a. Multiply 2.2', 'd. hook grip','b. snatch','c. californina strength'];
    var score = 0;


$(document).ready(function(){

    
    //these variables are within the scope of the document ready
   
    var q1, q2, q3, q4, q5;
    $('#btnGetValue').click(function() {
      //instruction sets below display for your debugging of selected answer  
      var q1 = $('input[name=q1]:checked').val(); 
      var q2 = $('input[name=q2]:checked').val(); 
      var q3 = $('input[name=q3]:checked').val(); 
      var q4 = $('input[name=q4]:checked').val(); 
      var q5 = $('input[name=q5]:checked').val(); 
      $('#q1').append('<br/>Selected Radio Button Value for q1 is : <b>' + q1 + '</b>');
      $('#q2').append('<br/>Selected Radio Button Value for q2 is : <b>' + q2 + '</b>');
      $('#q3').append('<br/>Selected Radio Button Value for q3 is : <b>' + q3 + '</b>');
      $('#q4').append('<br/>Selected Radio Button Value for q4 is : <b>' + q4 + '</b>');
      $('#q5').append('<br/>Selected Radio Button Value for q5 is : <b>' + q5 + '</b>');
      
      //implementing logic for correct answers and score keeping
      if(answers[0] == q1) {
          alert("q1 working!");
        score++;
        console.log(score);
      }
      else {
        score--; 
      }
   
    if(answers[1] == q2) {
      alert("q2 working!");
        score++;
        console.log(score);
      }
      else {
        score--; 
      }
      if(answers[2] == q3) {
        alert("q3 working!");
        score++;
        console.log(score);
      }
      else {
        score--; 
      }
      if(answers[3] == q4) {
        alert("q4 working!");
        score++;
        console.log(score);
      }
      else {
        score--; 
      }
      if(answers[4] == q5) {
        alert("q5 working!");
        score++;
        console.log(score);
      }
      else {
        score--; 
      }
    }); 
   
  }); 
    



// going to try and redo this with answers in a array.
    // var triviaGame = [
    //      {
    //         q1: "Bringing the barbell from ground to shoulder, than shoulder to overhead is called?",
    //         a: "a:  Clean and Jerk",
    //         b: "b:  Snatch",
    //         c: "c:  The Dougie",
    //         d: "d:  The Tootsie Roll",
    //         correct: "a"
    //     },

    //     {
    //         q2: "To convert from Kilos to Pounds you must?",
    //         a: "Multiply 2.2",
    //         b: "Divide 2.2",
    //         c: "Add 2.2",
    //         d: "Subtract 2.2",
    //         correct: "a"
    //     },

    //     {
    //         q3: "What do you call 'hooking' your thumbs around the barbell and under your fingers",
    //         a: "Captain Hook",
    //         b: "Hook Grip",
    //         c: "Hookah",
    //         d: "Finger Hook",
    //         correct: "b"
    //     },

    //     {
    //         q4: "Which shoe does not produce an Olympic lifting shoe",
    //         a: "Nike",
    //         b: "Adidas",
    //         c: "Sketchers",
    //         d: "No Bull",
    //         correct: "c"
    //     },

    //     {
    //         q5: "A green plate is equal to how many pounds?",
    //         a: "10",
    //         b: "25",
    //         c: "45",
    //         d: "55",
    //         correct: "b"
    //     },
    // ]


// ==============================
// question answers and arrays
// ==============================

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



//     $('#done_button').click(function() {
//         var selValue = $('input[name=rbnNumber]:checked').val();
//         $('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
//     });


// //==============================
// //       LOGIC
// //==============================
// var q1 = triviaGame[0].q1
// var Q1 = $('input:radio[name="q1"]:checked').val();
// console.log(Q1);
// var q1a = triviaGame[0].a
// var q1b = triviaGame[0].b
// var q1c = triviaGame[0].c
// var q1d = triviaGame[0].d
// var q1Correct = triviaGame[0].correct

// var q2 = triviaGame[1].q2
// var q2a = triviaGame[1].a
// var q2b= triviaGame[1].b
// var q2c = triviaGame[1].c
// var q2d= triviaGame[1].d
// var q2Correct = triviaGame[1].correct
// //-----------------------------------------------
// var q3 = triviaGame[2].q3
// var q3a = triviaGame[2].a
// var q3b = triviaGame[2].b
// var q3c = triviaGame[2].c
// var q3d = triviaGame[2].d
// var q3Correct = triviaGame[2].correct
// //------------------------------------------------
// var q4 = triviaGame[0].q1
// var q4a = triviaGame[0].a
// var q4b = triviaGame[0].b
// var q4c = triviaGame[0].c
// var q4d = triviaGame[0].d
// var q4Correct = triviaGame[0].correct
// //------------------------------------------------
// var q5 = triviaGame[0].q1
// var q5a = triviaGame[0].a
// var q5b = triviaGame[0].b
// var q5c = triviaGame[0].c
// var q5d = triviaGame[0].d
// var q5Correct = triviaGame[0].correct


// console.log(q1);
// console.log(q1a);
// if(q1 === q1a){
//     correctCount++;
//     console.log(hello)
// }
// else{
//     wrongCount++;
// }



// User finishes before time is up and clicks done
// $("#done_button").on("click", function(){

//     // trying to get done function to work
//     $("#mid_game_container").hide();
//     $("#start_container").hide();
//     console.log(score);
//     return;
    

//     });



   


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
    var number = 60;

    
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
    
        
        

        // After answers are validated, display the score results
		// $('#correct_answers').text(score);
		// $('#wrong_answers').html(lose);
		


		// Show the completed Score Div
        $("#end_container").show();
        $("#scoreArea").html(score);
      
        






