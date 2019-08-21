//This will make the start button disapear 
$('#start-button').on('click',function(){
    $('#start-button').remove();
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
        image: "assets/images/vp.jpg"        i
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
    //This method will change the timer
    game.counter--;
    $('#counter').html(game.counter);
    //if the counter reaches 0,
    if(game.counter<=0){
        //log this, and
        console.log("TIME UP!");
        //Run this defined function
        game.timeUp();
        }
    },
    loadQuestion: function(){
    //When we load the question, set the timer to run. 
    timer = setInterval(game.countdown, 1000);
    //On the page, wherever the subwrapper is, post whatever index is being passed on the currentQuestion method.
    $('#subwrapper').html('<h2>'+question[game.currentQuestion].question+'</h2>');
    //Also post the answers as buttons
    for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
        $('#subwrapper').append('<button> class="answer-button" id="button-'+i+'" data-name="')
    }
    },
    nextQuestion: function(){

    },
    timeUp: function() {
        
    },
    results: function() {

    },
    clicked: function() {

    },
    answeredCorrectly: function() {

    },
    answeredIncorrectly: function() {

    },
    reset: function() {

    }

}