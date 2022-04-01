<<<<<<< HEAD
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYemrEFaKFrqU1YbN5Cl8QnXLjKt5pYe8",
    authDomain: "bb-website-83473.firebaseapp.com",
    projectId: "bb-website-83473",
    storageBucket: "bb-website-83473.appspot.com",
    messagingSenderId: "1049078427872",
    appId: "1:1049078427872:web:ec7e326d3018cf33d76085",
    measurementId: "G-18YJG46V4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// // Initialize Cloud Firestore and get a reference to the service
// const db = firebase.firestore();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



// send the data in the form of collections
// var messageRef = db.collection('User_data');

showHidebtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
    formContainer.scrollIntoView();
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    var name = GetInputVal('name_input');
    var email = GetInputVal('email_input');
    var location = GetInputVal('location_input');
    var type = GetInputVal('type_input');

    //call the function to save the values on submit
    saveMessage(name, email, location, type);
});

function GetInputVal(id) {
    return document.getElementById(id).value;
}

//function to save the message to the firebase
function saveMessage(name, email, location, type) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        location: location,
        type: type
    });
} //call this function when the form is submitted
=======
>>>>>>> 16a1715b60bc47c99c1ae1b358a8ca1244487002


