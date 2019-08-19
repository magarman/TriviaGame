// Default values when the game starts
let counter = 30; //This is the timer
let currentQuestion = 0; //The value of this variable can go from 1-10 (randomly), and this is how we'll pick the question (by array index)
let score = 0; // this will keep track of correctly answered questions
let lost = 0; //This will track losses
let timer; // This will hold the value of the interval

//Quiz questions
const questions = [
    {
        question: "What data type is NULL in Javascript?",
        answers: ["A value", "An object", "The absence of value", "An empty integer"],
        correctAnswer: "An object"
    },
    {
        question: "What data type is NaN in Javascript?",
        answers: ["A number", "Absence of a number", "A string", "An object"],
        correctAnswer: "A number"
    },
    {
        question: "What will an array with no keys == to (truthy & falsy)?",
        answers: ["Null", "True", "False", "Undefined"],
        correctAnswer: "False"
    },
    {
        question: "Can you guess how many div's does the average web page can have?",
        answers: ["2", "71", "83", "95"],
        correctAnswer: "71"
    },
    {
        question: "What is Bootstrap?",
        answers: ["A framework", "A language", "A stylesheet", "A book"],
        correctAnswer: "A framework"
    },
    {
        question: "What is the Viewport tag for?",
        answers: ["To set up the language", "To link Bootstrap", "To center the contents", "Responsiveness"],
        correctAnswer: "Responsiveness"
    },
    {
        question: "What is the most recent HTML version?",
        answers: ["HTML3", "HTML5", "HTML4.2", "JQuery"],
        correctAnswer: "HTML5"
    },
    {
        question: "What property can be used (other than JQuery) to populate elements on a page?",
        answers: [".innerHTML()", ".HTML", "innerHTML", ".text()"],
        correctAnswer: "innerHTML"
    },
    {
        question: "What does CSS stand for?",
        answers: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which class provides a responsive fixed width container?",
        answers: [".container-fluid", ".container", ".container-fixed", "None of the above"],
        correctAnswer: ".container-fluid"
    }
];

//Double checking that this long array looks good
console.log(questions);

const funImages = [
    './assets/images/happy fun.gif',
    './assets/images/hellYeah.gif',
    './assets/images/winning.gif',
    './assets/images/yeah.gif',
    './assets/images/you did it.gif'
];

const sadImages = [
    './assets/images/danm.gif',
    './assets/images/oops.gif',
    './assets/images/pretty bad.gif'
];


//FUNCTIONS **************************************************************

// Show the question and the choices to the page for user to play
function loadQuestion() {
    // Equal 'Question' to the first key stored on index 0 on the array 'questions' (in other words the first question and fist key of the three key value pairs of the array)
    var question = questions[currentQuestion].question;
    //Same thing as above, only we are now using the second key of the array's key & values pairs
    var answers = questions[currentQuestion].answers;
    //The timer must start after the first question is displayed
    $('#timer').html(counter + ' seconds left');
    //Grab the element called 'game' on the index file, and pass the question variable we just configured above
    $('#game').html('<h4>' + question + '</h4>');
    console.log(question);
}

loadQuestion();





/*
function loadQuestion() {
    counter = 30;
    timer = setInterval(countDown, 1000);

    const question = questions[currentQuestion].question; // 
    const answers = questions[currentQuestion].answers; // 

    $('#time').html('Timer: ' + counter);
    $('#game').html(`
        <h4>${question}</h4>
        ${loadChoices(answers)}
        ${loadRemainingQuestion()}
    `);
}

// If the timer is over, then go to the next question
function nextQuestion() {
    const isQuestionOver = (questions.length - 1) === currentQuestion;
    if (isQuestionOver) {
        // TODO
        console.log('Game over!');
        displayResult();
    } else {
        currentQuestion++;
        loadQuestion();
    }
    
}

// Start a 30 seconds timer for user to respond or choose an answer to each question
function timeUp() {
    clearInterval(timer);

    lost++;

    preloadImage('lost');
    setTimeout(nextQuestion, 3 * 1000);
}

function countDown() {
    counter--;

    $('#time').html('Timer: ' + counter);

    if (counter === 0) {
        timeUp();
    }
}


function loadChoices(answers) {
    let result = '';

    for (let i = 0; i < answers.length; i++) {
        result += `<p class="choice" data-answer="${answers[i]}">${answers[i]}</p>`;
    }

    return result;
}

// Either correct/wrong choice selected, go to the next question
// Event Delegation
$(document).on('click', '.choice', function() {
    clearInterval(timer);
    const selectedAnswer = $(this).attr('data-answer');
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer) {
        score++;
        console.log('Wins!');
        preloadImage('win');
        setTimeout(nextQuestion, 3 * 1000);
    } else {
        lost++;
        console.log('Lost!!!!');
        preloadImage('lost');
        setTimeout(nextQuestion, 3 * 1000);
    }
});


function displayResult() {
    const result = `
        <p>You get ${score} questions(s) right</p>
        <p>You missed ${lost} questions(s)</p>
        <p>Total questions ${questions.length} questions(s) right</p>
        <button class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $('#game').html(result);
}


$(document).on('click', '#reset', function() {
    counter = 30;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;

    loadQuestion();
});


function loadRemainingQuestion() {
    const remainingQuestion = questions.length - (currentQuestion + 1);
    const totalQuestion = questions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}


function randomImage(images) {
    const random = Math.floor(Math.random() * images.length);
    const randomImage = images[random];
    return randomImage;
}


// Display a funny giphy for correct and wrong answers
function preloadImage(status) {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (status === 'win') {
        $('#game').html(`
            <p class="preload-image">Congratulations, you pick the corrrect answer</p>
            <p class="preload-image">The correct answer is <b>${correctAnswer}</b></p>
            <img src="${randomImage(funImages)}" />
        `);
    } else {
        $('#game').html(`
            <p class="preload-image">The correct answer was <b>${correctAnswer}</b></p>
            <p class="preload-image">You lost pretty bad</p>
            <img src="${randomImage(sadImages)}" />
        `);
    }
}

$('#start').click(function() {
    $('#start').remove();
    $('#time').html(counter);
    loadQuestion();
});

*/