// Selecting Elements 
const button_start = document.querySelector(".button_start button");
const rules_box = document.querySelector(".rules_box");
const exit_quiz = rules_box.querySelector(".buttons .exit_quiz")
const continue_quiz = rules_box.querySelector(".buttons .restart");
const main_box = document.querySelector(".main_box");
const results = document.querySelector(".results");
const options = document.querySelector(".options");
const timeLeft = document.querySelector(".timer .time_left");
const timeCount = document.querySelector(".timer .time")
const timeline = document.querySelector("header .timeline");


let timeValue = 120;
let questionCounter = 0;
let questinNumber = 1;
let userScore = 0;
let counterLine;
let counter;
let widthValue = 0;

// Start Quiz Button if clicked 
button_start.onclick = ()=>{
    rules_box.classList.add("activeInfo"); //shows the rules box 
}

// If the user clicks on exit quiz they will return to the homescreen
exit_quiz.onclick = ()=>{
    rules_box.classList.remove("activeInfo"); //Removes the rules box
}

// If the user clicks the continue button they will be directed to the quiz 
continue_quiz.onclick = ()=>{
    rules_box.classList.remove("activeInfo"); 
    main_box.classList.add("activeQuiz");
    startTimer(120);
    startTimerLine(0);
    questionCounter(1);
    showQuestions(0);
}

// elements 
const quit_quiz = results.querySelector(".buttons .restart");
const restart_quiz = results.querySelector(".buttons .restart");

// When you quit the quiz it will reload the page taking you to the home screen 
quit_quiz.onclick = ()=>{
    window.location.reload();
}

// if the restart button quiz is clicked 
restart_quiz.onclick = ()=>{
    results.classList.remove("activeResults"); //Hides the results box
    main_box.classList.add("activeQuiz")
    userScore = 0;
    widthValue = 0;
    questinNumber = 1;
    questionCounter = 0;
    timeValue = 120;
    startTimerLine(widthValue);
    startTimer(timeValue);
    clearInterval(counterLine);
    clearInterval(counter);
    questionCounter(questinNumber);
    showQuestions(questionCounter);
    next_question.classList.remove("show");
    timeText.textContent = "Time Left";
}

const next_question = document.querySelector("footer .next_button");
const total_questions = document.querySelector("footer .total_questions")

// if next question button is clicked
next_question.onclick = ()=>{
    if(questionCounter < questionCounter.length - 1){
        questionCounter++;
        questinNumber++;
        showQuestions(questionCounter);
        questionCounter(questinNumber);
        clearInterval(counterLine);
        clearInterval(counter);
        timeText.textContent = "Time Left";
        next_question.classList.remove("show");
    }else{
        clearInterval(counterLine);
        clearInterval(counter);
        showResult();
    }
}

function showQuestions(index){
    const question_text = document.querySelector(".question_text");
    // Creating new spans & div tags for questions 
    let question_tag = '<span>'+ questions[index].number ". " = questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    question_text.innerHTML = question_tag;
    options.innerHTML = option_tag;

    const option = options.querySelectorAll(".options");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// Div tags for incorrect and correct icons 
let correctIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let incorrectIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';