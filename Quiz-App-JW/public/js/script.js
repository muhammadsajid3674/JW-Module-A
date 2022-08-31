window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded");
});

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('contents').style.visibility="visible";
        },2000);
    }
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB70nvj7a67sxRWw0cWZKwFw5lyxZOHnAI",
    authDomain: "quiz-app-jw.firebaseapp.com",
    projectId: "quiz-app-jw",
    storageBucket: "quiz-app-jw.appspot.com",
    messagingSenderId: "564814360787",
    appId: "1:564814360787:web:cba6be7f28135c46eb2426",
    measurementId: "G-DF9SECESRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


var question = document.getElementById("questionPush")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var correctAns = document.getElementById("correctAns")
var currentQuesNum = document.getElementById("currentQues");
var totalQuesNum = document.getElementById("totalQues");
var scoreScr = document.getElementById("score");
var option = document.getElementById("options");
var scrnQues = document.getElementById("question");
var optionsAll = option.getElementsByTagName("BUTTON")
var highScoresList = document.getElementById("highScoresList")
var custQuiz = document.getElementById("custQuiz")
var custScore = document.getElementById("custScore")
var indexNumber = 0
var score = 0
var kero = false
var questions;

window.pushingData = function () {
    var obj = {
        question: question.value,
        option: [option1.value, option2.value, option3.value, option4.value],
        correctAns: correctAns.value,
    }
    var reference = ref(database, "Quiz Questions/")
    var newPush = push(reference)
    set(newPush, obj)
}



function getData() {
    var reference = ref(database, "Quiz Questions/")

    onValue(reference, function (data) {
        questions = Object.values(data.val())
        console.log(questions)
        startQuiz()
    })
}
getData()

function startQuiz() {
    scrnQues.innerHTML = questions[indexNumber].question;
    option.innerHTML = " ";
    for (let i = 0; i < questions[indexNumber].option.length; i++) {
        option.innerHTML += `<div class="choice-container" id="options">
    <button onclick="correct(this, '${questions[indexNumber].correctAns}')" 
    class="choice-text">${questions[indexNumber].option[i]}</button>
  </div>`;
    }
    currentQuesNum.innerHTML = indexNumber + 1
    totalQuesNum.innerHTML = questions.length
}



window.correct = function (userAns, correctAns) {
    for (let i = 0; i < optionsAll.length; i++) {
        if (userAns.innerHTML === correctAns) {
            kero = true
        }
        else {
            kero = false
        }
    }
    if (kero) {
        score = score + 10;
        scoreScr.innerHTML = score
        userAns.classList.add("correct")
        for (let j = 0; j < optionsAll.length; j++) {
            optionsAll[j].setAttribute("disabled","")
        }
    }
    else {
        userAns.classList.add("incorrect")
        for (let j = 0; j < optionsAll.length; j++) {
            optionsAll[j].setAttribute("disabled","")
        }
    }
}
window.nextQues = function () {
    if (currentQuesNum.innerHTML === totalQuesNum.innerHTML) {
        custQuiz.style.display = "none"
        custScore.style.display = "block"
        highScoresList.innerHTML = "Score: " + score
        console.log(highScoresList)
    }
    indexNumber = indexNumber + 1
    startQuiz()
}
