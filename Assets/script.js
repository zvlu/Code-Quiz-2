
// GLOBAL VARIABLES

let score = 0;
let currentQuestion = 0;

// Object of Questions
let questions = [
    {
        title: "Commonly used data types DO NOT include:",
        answers: [ "strings", "booleans", "alerts", "numbers"],
        correct: 2
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: 3
    },
    {
        title: "Which one would make this isNaN function true?",
        answers: ["8", "curly brackets", "string", "boolean"],
        correct: 0
      },
    {
        title: "What character can break JavaScript Code into several lines?",
        answers: ["backslash", "curly brackets", "parentheses", "foward slash"],
        correct: 0
    },
    {
        title: "What company developed JavaScript?",
        answers: ["Netscape", "Tesla", "Java", "Google"],
        correct: 0
    },

  ];
// Where I put all event listeners
$(document).ready(function(){


    $('.start a').click(function(e){
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    });

    $('.quiz ul').on('click', 'li', function(){
        $('.selected').removeClass('selected'); 
        $(this).addClass('selected');  
    });
    $('.quiz a').click(function(e){
        e.preventDefault(); 
        if ($('li.selected').length) {
          let guess = parseInt($('li.selected').attr('id'));
           checkAnswer(guess);
        } else {
            alert('Please Select an Answer!!!')
        };


    });
});
 // FUNCTIONS

function showQuestion () {
    let question = questions[currentQuestion];
    $('.quiz h2').text(question.title);
    $('.quiz ul').html('');
    for (var i = 0; i < question.answers.length; i++) {
      $('.quiz ul').append("<li id= '" + i + "'>" + question.answers[i] + "</li>");  
    }


}

function checkAnswer (guess) {
    let question = questions[currentQuestion];
    if(question.correct === guess) {
        score ++;
    }
    currentQuestion++;
    if (currentQuestion >= questions.length){
        showSummary();
    }
    else{ showQuestion();
    }
   
}

function showSummary () {
    $ ('.quiz').hide();
    $('.summary').show();
}