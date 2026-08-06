const questions= [ {
    question: "java is a?",
    options:["Programming Language","Operating System", "Browser","Database"], 
    answer:0

},
{
question: "HTML stands for?",
options: [
    "Hyper Text Markup Language",
    "High Text Machine Language",
    "Hyper Transfer Markup Language",
    "None"
],
answer: 0
},
{
question: "CSS is used for?",
options: ["Styling","Databse","Programming","Networking"],
answer: 0
},
{
    question:"CSS stands for?",

    options: ["Cascading Style Sheets","Computer Style Sheets","Color Style Sheets","Creative Style Sheets"],
answer: 0
}

];

let currentQuestion =0;
let score= 0;

const question= 
document.getElementById("question");
const options=
document.getElementById("options");
const result=
document.getElementById("result");
const nextBtn=
document.getElementById("nextBtn");
function loadQuestion()
{
    question.innerText = questions[currentQuestion].question;
    options.innerHTML ="";

    questions[ currentQuestion].options.forEach((option, index) =>{
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = function () {
            if (index === questions[currentQuestion].answer){
                score++;
            }
            nextBtn.disabled= false;
        };
        options.appendChild(button);
    });
    nextBtn.disabled = true;
}
nextBtn.onclick= function() {
    currentQuestion++;
    if(currentQuestion <questions.length) {
        loadQuestion();

    }
    else {
        question.innerText = "Quiz Completed";
        options.innerHTML= "";
        result.innerText = "Your Score: "+ score+"/"+questions.length;
      nextBtn.style.display ="none";

    }
}
loadQuestion();