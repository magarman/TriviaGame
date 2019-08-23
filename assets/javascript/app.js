//This will make the start button disapear 
$('#start-button').on('click',function(){
    $('#start-button').remove();
    //This will laod the first question
    game.loadQuestion();
    
    
})
//This will let me know if the answer the user clicked on is correct/incorrect
$(document).on('click', '.answer-button', function(e){
    //With 'e' we are passing through the event of being clicked
    game.clicked(e);
})

//The questions will be stored in this array/object
const questions = [{
        question: "What data type is NULL in Javascript?",
        answers: ["A value", "An object", "The absence of value", "An empty integer"],
        correctAnswer: "An object",
        image: "assets/images/perplexed.gif"
    },{
        question: "What data type is NaN in Javascript?",
        answers: ["A number", "Absence of a number", "A string", "An object"],
        correctAnswer: "A number",
        image: "assets/images/Nan.gif"
    },{
        question: "What will an array with no keys == to (truthy & falsy)?",
        answers: ["Null", "True", "False", "Undefined"],
        correctAnswer: "False",
        image: "assets/images/false2.gif"
    },{
        question: "Can you guess how many div's does the average web page can have?",
        answers: ["2", "71", "83", "95"],
        correctAnswer: "71",
        image: "assets/images/ihavenoidea.gif"
    },{
        question: "What is Bootstrap?",
        answers: ["A framework", "A language", "A stylesheet", "A book"],
        correctAnswer: "A framework",
        image: "assets/images/boot.jpg"
    },{
        question: "What is the Viewport tag for?",
        answers: ["To set up the language", "To link Bootstrap", "To center the contents", "Responsiveness"],
        correctAnswer: "Responsiveness",
        image: "assets/images/vp.jpg"    
    },{
        question: "What is the most recent HTML version?",
        answers: ["HTML3", "HTML5", "HTML4.2", "JQuery"],
        correctAnswer: "HTML5",
        image: "assets/images/ml5.gif"
    },{
        question: "What property can be used (other than JQuery) to populate elements on a page?",
        answers: [".innerHTML()", ".HTML", "innerHTML", ".text()"],
        correctAnswer: "innerHTML",
        image: "assets/images/query.gif"
    },{
        question: "What does CSS stand for?",
        answers: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
        image: "assets/images/css.gif"
    },{
        question: "Which class provides a responsive fixed width container?",
        answers: [".container-fluid", ".container", ".container-fixed", "None of the above"],
        correctAnswer: ".container-fluid",
        image: "assets/images/resp.gif"
    }];

//Variables to use throughout the game    
var game = {
    questions:questions,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    countdown: function() {
        console.log(game.counter);
        //This method will change the timer
        game.counter--;
        $('#counter').html(game.counter);
        //if the counter reaches 0,
        if(game.counter<=0){
        //log this, and
            console.log("TIME IS UP!");
        //Run this defined function
            game.timeUp();
        }
    },
    loadQuestion: function(){
    //When we load the question, set the timer to run. 
    timer = setInterval(game.countdown,30000);
    //On the page, wherever the subwrapper is, post whatever index is being passed on the currentQuestion method.
    $('#subwrapper').html('<h2>'+questions[game.currentQuestion].question+'</h2>');
    //Also post the answers as buttons
    for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
        $('#subwrapper').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
        }
    },
    nextQuestion: function(){
        //Set the counter back to 30 seconds, if this isn't set to 30, then the counter will keep decreasing from the amount of seconds the player had left on the previous question
        game.counter = 30000;
        //this will update the counter on the screen
        $('#counter').html(game.counter);
        //so it doesn't loop over the same question
        game.currentQuestion++;
        //load the next question
        game.loadQuestion();
    },
    timeUp: function() {
        
    },
    results: function() {

    },
    clicked: function(e) {
    //Clear interval, because we don't want timer running after we've clicked the button. We want it to stop at that point
    clearInterval(timer);
    console.log("clicked");
    //grab whatever answer the user clicks (whichever answer, that is)
    //then pass the name (name of the button, we created above).
    //If it matches teh value of the correct Answer of the current question
    if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
        //Then run this function
        game.answeredCorrectly();
    } else {
        //If it doesn't match the correct answer, run this other function
        game.answeredIncorrectly();
    }
    },
    answeredCorrectly: function() {
        console.log("You got it!");
        clearInterval(timer);
        //Clear interval, add the right answer to the correct variable (which tracks correct responses)
        game.correct++;
        //grab the 'subwrapper' area on my html, and update the page, so player can see this message
        $('#subwrapper').html('<h2>That\'s right!</h2>');
        //This below will move onto the next question if not done, or take us to the results screen if we are at the final question.
        if(game.currentQuestion===questions.length-1){
            //if the current question is at the length of the array (minus one),
            setTimeout(game.results,1000);
            console.log("a");
            //wait 3 seconds, and then take player to the results screen
            //OTHERWISE
            //wait 3 seconds, and then load the next question.
            setTimeout(game.nextQuestion,1000);
        } else {
            setTimeout(function (){game.nextQuestion()},3000);   
            console.log("d");
        }
            
        
    },
    answeredIncorrectly: function() {
        console.log("Nope, try again");
        clearInterval(timer);
        //Same as the previous, but add on the incorrect variable instead
        game.incorrect++;
        $('#subwrapper').html('<h2>No :(<h2>');
        if(game.currentQuestion===questions.length-1){
            setTimeout(function() {game.results()},1000);
            console.log("b");
            setTimeout(function() {game.nextQuestion()},3000);
        } else {
            setTimeout(function (){game.nextQuestion()},3000);   
            console.log("c");
        }
    },
    reset: function() {

    }

}

//Not calling the function properly, we didn't include the function on the set tIMEOUT
//ALSO was calling like a function, but like a variable instead.
