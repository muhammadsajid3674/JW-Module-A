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
var existingData = document.getElementById("existingData")
var adminName = document.getElementById("adminName")
var adminPass = document.getElementById("adminPass")
var custLogin = document.getElementById("custLogin")
var custData = document.getElementById("custData")

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
    render()
  })
}
getData()

function render() {
  for (let i = 0; i < questions.length; i++) {
    existingData.innerHTML += `<div class="custDataBorder">
          <h4><b>Question:</b> ${questions[i].question}</h4>
          <p><b>Options:</b> ${questions[i].option.join(", ")}</p>
          <p><b>CorrectAns:</b> ${questions[i].correctAns}</p>
      </div>`
  }
}

window.admin = function () {
  console.log(adminName.value)
  console.log(adminPass.value)
  if (adminName.value === "admin01" && adminPass.value === "123456") {
    custLogin.style.display = "none"
    custData.style.display = "block"
  }
  else {
    alert("Invalid User & Password.")
  }
}