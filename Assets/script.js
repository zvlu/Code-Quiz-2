
// GLOBAL VARIABLES

let score = 0;
let currentQuestion = 0;
var timeleft = 75;

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

    // start quiz
    $('.start a').click(function(e){
        e.preventDefault();
        $('.start').hide();
        $('.container').show();
        showQuestion();
        setInterval(function () { 
            $('#timer-value').innerHTML = timeleft;
                timeleft -= 1;
                if(timeleft <= 0){
                clearInterval();
                $('#timer-value').innerHTML = "Finished"
                }
            }, 1000);
    });
    //select asnwer
    $('.container ul').on('click', 'li', function(){
        $('.selected').removeClass('selected'); 
        $(this).addClass('selected');  
    });

    
    //submit answer
    $('.container a').click(function(e){
        e.preventDefault(); 
        if ($('li.selected').length) {
          let guess = parseInt($('li.selected').attr('id'));
           checkAnswer(guess);
        } else {
            alert('Please Select an Answer!!!')
        };
    // score summary and quiz restart
    $('.summary a').click(function(e){
        e.preventDefault();
          

        })
    });
});
 // FUNCTIONS




function showQuestion () {
    let question = questions[currentQuestion];
    $('.container h2').text(question.title);
    $('.container ul').html('');
    for (var i = 0; i < question.answers.length; i++) {
      $('.container ul').append("<li id= '" + i + "'>" + question.answers[i] + "</li>");  
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
    else { 
        showQuestion();
    }
   
}

function showSummary () {
    $ ('.container').hide();
    $('.summary').show();
    $('.summary p').text("Congrats you scored"+ score +" out of "+ questions.length +" correct!")
}

function restartQuiz(){
    $('.summary').hide();
    $ ('.container').show();
    score = 0;
    currentQuestion = 0;
    showQuestion();

}
