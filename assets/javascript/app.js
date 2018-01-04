$(document).ready(function() {
// this will be the initial start screen.  
    // function initialScreen() {
    //     startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
    //     $(".mainArea").html(startScreen);
    // }
    
    // initialScreen();
//
//trying to creat an object with array.
    var triviaGame = [
         {
            q1: "Question1: This is from which show: Now this is a story....",
            a: "Fresh Prince",
            b: "punky Brewster",
            c: "smiley",
            d: "simpsons",
            correct1: "a"
        },

        {
            q2: "Question2: Dwight Shrute is best known for his role in?",
            a: "Office",
            b: "punky Brewster",
            c: "Stranger Things",
            d: "simpsons"
        },

        {
            q3: "Question3: Lebron James Currently plays for which team",
            a: "Bulls",
            b: "Cavs",
            c: "Steamer",
            d: "Blakhawks"
        },

        {
            q4: "Question4: Which Chicago Bull wore the #23",
            a: "Fresh Prince",
            b: "punky Brewster",
            c: "Michael Jordan",
            d: "Superman"
        },

        {
            q5: "Question5: Harry Potter is a ",
            a: "Prince",
            b: "wizard",
            c: "soccer player",
            d: "model"
        },
    ]



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


});

