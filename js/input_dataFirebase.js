// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, isSignInWithEmailLink, signInWithEmailLink, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
//initialize the google authentication
const provider1 = new GoogleAuthProvider();
//initialize the facebook authentication
const provider2 = new FacebookAuthProvider();


// send the data in the form of collections
// var messageRef = db.collection('User_data');

showHidebtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
    formContainer.scrollIntoView();
})

//google_signIn btn
const googleSignInBtn = document.querySelector('.google_signIn');
const facebookSignInBtn = document.querySelector('.facebook_signIn');
const googleSignInBtn2 = document.querySelector('#signIn_google');
const facebookSignInBtn2 = document.querySelector('#signIn_facebook');


googleSignInBtn.addEventListener('click', () => {
    signInWithGoogle();
})
facebookSignInBtn.addEventListener('click', () => {
    signInWithFacebook();
})
googleSignInBtn2.addEventListener('click', () => {
    signInWithGoogle();
})
facebookSignInBtn2.addEventListener('click', () => {
    signInWithFacebook();
})
var name = GetInputVal('name_input');
var email = GetInputVal('email_input');
var location = GetInputVal('location_input');
var type = GetInputVal('type_input');
submit.addEventListener('click', (e) => {
    var name = GetInputVal('name_input');
    var email = GetInputVal('email_input');
    var location = GetInputVal('location_input');
    var type = GetInputVal('type_input');

    e.preventDefault();
    //call the function to save the values on submit
    if (name == "" || email == "" || location == "" || type == "") {
        alert('Please fill out all the details');
    }
    else {
        form.style.transform = "translateX(-240em)"
        addVal();
        sendEmail();
    }
});
submit1.addEventListener('click', (e) => {
    e.preventDefault();
    //call the function to save the values on submit
    if (name == "" || email == "" || location == "" || type == "") {
        alert('Please fill out all the details');
    }
    else {
        form.style.transform = "translateX(-240em)"
        addVal();
        // sendEmail();
    }
});
// var email = GetInputVal('email_input');

function GetInputVal(id) {
    return document.getElementById(id).value;
}
async function addVal() {
    try {

        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            email: email,
            location: location,
            type: type
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

//send email function
function sendEmail() {
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://127.0.0.1:5501/',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
            bundleId: 'com.example.ios'
        },
        android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12'
        },
        dynamicLinkDomain: 'example.page.link'
    };

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
}


//function for the google authentication
function signInWithGoogle() {

    signInWithPopup(auth, provider1)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            form.style.transform = "translateX(-200em)";
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

}


//function for the facebook authentication

function signInWithFacebook() {

    signInWithPopup(auth, provider2)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            form.style.transform = "translateX(-200em)";
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });

};


//function for the facebook authentication
// function signInWithEmail() {
//     if (isSignInWithEmailLink(auth, window.location.href)) {
//         // Additional state parameters can also be passed via URL.
//         // This can be used to continue the user's intended action before triggering
//         // the sign-in operation.
//         // Get the email if available. This should be available if the user completes
//         // the flow on the same device where they started it.
//         let email = window.localStorage.getItem('emailForSignIn');
//         if (!email) {
//             // User opened the link on a different device. To prevent session fixation
//             // attacks, ask the user to provide the associated email again. For example:
//             email = window.prompt('Please provide your email for confirmation');
//         }
//         // The client SDK will parse the code from the link for you.
//         signInWithEmailLink(auth, email, window.location.href)
//             .then((result) => {
//                 // Clear email from storage.
//                 window.localStorage.removeItem('emailForSignIn');
//                 // You can access the new user via result.user
//                 // Additional user info profile not available via:
//                 // result.additionalUserInfo.profile == null
//                 // You can check if the user is new or existing:
//                 // result.additionalUserInfo.isNewUser
//             })
//             .catch((error) => {
//                 // Some error occurred, you can inspect the code: error.code
//                 // Common errors could be invalid email and invalid or expired OTPs.
//             });
//     }
// }
