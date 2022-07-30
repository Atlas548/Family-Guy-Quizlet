// Selecting Elements 
const button_start = document.querySelector(".button_start button");
const rules_box = document.querySelector(".rules_box");
const exit_button = rules_box.querySelector(".buttons .exit_quiz")
const continue_button = rules_box.querySelector(".button .continue_quiz");
const main_box = document.querySelector(".main_box");
const results = document.querySelector(".results");
const options = document.querySelector(".options");
const timeline = document.querySelector("header .timeline");
const timeLeft = document.querySelector(".timer .time_left");
const timeCount = document.querySelector(".timer .time")

// Start Quiz Button if clicked 
button_start.onclick = ()=>{
    rules_box.classList.add("activeInfo"); //shows the rules box 
}

exit_button.onclick = ()=>{
    rules_box.classList.remove("activeinfo"); //Removes the rules box
}