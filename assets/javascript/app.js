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
            d: "simpsons"
        },

        {
            q2: "Question2: Dwight Shrute is best known for his role in?",
            a: "Office",
            b: "punky Brewster",
            c: "Stranger Things",
            d: "simpsons"
        },

        {
            q1: "Now this is a story....",
            a: "Fresh Prince",
            b: "punky Brewster",
            c: "smiley",
            d: "simpsons"
        },

        {
            q1: "Now this is a story....",
            a: "Fresh Prince",
            b: "punky Brewster",
            c: "smiley",
            d: "simpsons"
        },

        {
            q1: "Now this is a story....",
            a: "Fresh Prince",
            b: "punky Brewster",
            c: "smiley",
            d: "simpsons"
        },
    ]



$("#qOne").append(triviaGame[0].q1);
console.log(triviaGame[0].q1);
$("#qTwo").append(triviaGame[1].q2);
console.log(triviaGame[1].q2);
});

