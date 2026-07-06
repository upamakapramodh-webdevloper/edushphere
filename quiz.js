// ===========================================
// EduSphere LMS - Quiz JavaScript
// ===========================================

// Quiz Questions
const quizQuestions = [
{
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
        "<a>",
        "<link>",
        "<href>",
        "<url>"
    ],
    answer: 0
},

{
    question: "Which CSS property changes text color?",
    options: [
        "font-color",
        "text-style",
        "color",
        "text-color"
    ],
    answer: 2
},

{
    question: "Which JavaScript keyword declares a variable?",
    options: [
        "var",
        "let",
        "const",
        "All of the above"
    ],
    answer: 3
},

{
    question: "Which company developed JavaScript?",
    options: [
        "Google",
        "Microsoft",
        "Netscape",
        "Apple"
    ],
    answer: 2
},

{
    question: "Which HTML element displays an image?",
    options: [
        "<picture>",
        "<image>",
        "<img>",
        "<src>"
    ],
    answer: 2
},

{
    question: "Which symbol is used for comments in JavaScript?",
    options: [
        "#",
        "//",
        "<!-- -->",
        "**"
    ],
    answer: 1
},

{
    question: "Which CSS property creates rounded corners?",
    options: [
        "border-style",
        "radius",
        "border-radius",
        "corner-radius"
    ],
    answer: 2
},

{
    question: "Which method prints something in console?",
    options: [
        "print()",
        "console.log()",
        "echo()",
        "display()"
    ],
    answer: 1
},

{
    question: "Which HTML tag creates an unordered list?",
    options: [
        "<ol>",
        "<li>",
        "<ul>",
        "<list>"
    ],
    answer: 2
},

{
    question: "Which operator checks equality and datatype?",
    options: [
        "==",
        "=",
        "===",
        "!="
    ],
    answer: 2
}
];

// ===========================================

let currentQuestion = 0;
let answers = new Array(quizQuestions.length).fill(null);
let score = 0;

// DOM Elements
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const progressBar = document.getElementById("progress-bar");

const timerElement = document.getElementById("timer");

const resultSection = document.getElementById("result-section");

const quizContainer = document.getElementById("quiz-container");

// ===========================================

function loadQuestion(){

const q = quizQuestions[currentQuestion];

questionNumber.innerText =
`Question ${currentQuestion+1} of ${quizQuestions.length}`;

questionText.innerText=q.question;

optionsContainer.innerHTML="";

q.options.forEach((option,index)=>{

const optionDiv=document.createElement("div");

optionDiv.classList.add("option");

if(answers[currentQuestion]==index){
optionDiv.classList.add("selected");
}

optionDiv.innerHTML=`
<label>
<input type="radio"
name="option"
value="${index}"
${answers[currentQuestion]==index?"checked":""}
>

${option}

</label>
`;

optionDiv.addEventListener("click",()=>{

answers[currentQuestion]=index;

loadQuestion();

});

optionsContainer.appendChild(optionDiv);

});

updateProgress();

prevBtn.disabled=currentQuestion===0;

if(currentQuestion===quizQuestions.length-1){

nextBtn.innerText="Submit Quiz";

}else{

nextBtn.innerText="Next";

}

}

// ===========================================

function updateProgress(){

let progress=((currentQuestion+1)/quizQuestions.length)*100;

progressBar.style.width=progress+"%";

}

// ===========================================

nextBtn.addEventListener("click",()=>{

if(currentQuestion<quizQuestions.length-1){

currentQuestion++;

loadQuestion();

}else{

submitQuiz();

}

});

// ===========================================

prevBtn.addEventListener("click",()=>{

if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}

});

// ===========================================

function submitQuiz(){

score=0;

quizQuestions.forEach((q,index)=>{

if(answers[index]===q.answer){

score++;

}

});

const percentage=((score/quizQuestions.length)*100).toFixed(1);

quizContainer.style.display="none";

resultSection.style.display="block";

document.getElementById("score").innerText=
`${score} / ${quizQuestions.length}`;

document.getElementById("percentage").innerText=
percentage+"%";

document.getElementById("status").innerText=
percentage>=50?"PASS 🎉":"FAIL ❌";

}

// ===========================================
// Timer
// ===========================================

let totalTime=15*60;

const timer=setInterval(()=>{

let minutes=Math.floor(totalTime/60);

let seconds=totalTime%60;

timerElement.innerText=
`${minutes.toString().padStart(2,"0")}:${seconds
.toString()
.padStart(2,"0")}`;

totalTime--;

if(totalTime<0){

clearInterval(timer);

submitQuiz();

}

},1000);

// ===========================================
// Restart Quiz
// ===========================================

const restartBtn=document.getElementById("restart-btn");

restartBtn.addEventListener("click",()=>{

currentQuestion=0;

answers.fill(null);

score=0;

quizContainer.style.display="block";

resultSection.style.display="none";

totalTime=15*60;

location.reload();

});

// ===========================================

loadQuestion();