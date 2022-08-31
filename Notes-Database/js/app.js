  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD5VKxeXF_R6aVTadObjzT0FvYMlvEc1G4",
    authDomain: "user-notes-firebase.firebaseapp.com",
    projectId: "user-notes-firebase",
    storageBucket: "user-notes-firebase.appspot.com",
    messagingSenderId: "726123139189",
    appId: "1:726123139189:web:e8e203a37e092c4116a83c",
    measurementId: "G-8T2DB1B9H7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();


  window.gettingData = function (){
    var title = document.getElementById("userTitle")
    var description = document.getElementById("userDescription")

    var obj = {
      title: title.value,
      description: description.value,
    }

    var reference = ref(database, "userNotes/")
    var newPush = push(reference)
    set(newPush,obj)
  }

  window.render = function (){
    var existingData = document.getElementById("existingData")
    for (let i = 0; i < questionData.length; i++) {
      console.log(questionData[i].title)
      existingData.innerHTML += `<div class="bg-light rounded my-3 w-50">
        <div class="p-3">
          <h4>Title: ${questionData[i].title}</h4>
          <small><b>Description:</b> ${questionData[i].description}</small>
        </div>
      </div>`
    }

  }

  var questionData;
  function getData() {
    var reference = ref(database, "userNotes/")

    onValue(reference, function (data) {
      questionData = Object.values(data.val())
    })
  }
  getData()

  window.signUp = function () {
    var name = document.getElementById("inputUserName").value
    var email = document.getElementById("inputEmailSign").value
    var password = document.getElementById("inputPasswordSign").value

    var obj = {
      name,
      email,
      password,
    };
    console.log(obj)
  }