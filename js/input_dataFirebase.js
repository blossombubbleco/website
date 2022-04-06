// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnogqDTBrG9Q-wrZTL4SAwK0a-c9m7dME",
    authDomain: "blossom-bubble-co.firebaseapp.com",
    databaseURL: "https://blossom-bubble-co-default-rtdb.firebaseio.com",
    projectId: "blossom-bubble-co",
    storageBucket: "blossom-bubble-co.appspot.com",
    messagingSenderId: "323769521871",
    appId: "1:323769521871:web:49c438e3a9234fabad09ba",
    measurementId: "G-V89SZFXDGF"
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
const provider = new FacebookAuthProvider();


// send the data in the form of collections
// var messageRef = db.collection('User_data');

showHidebtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
    formContainer.scrollIntoView();
})

//google_signIn btn
const googleSignInBtn = document.querySelector('.google_signIn');
const facebookSignInBtn = document.querySelector('.facebook_signIn');
const emailSignInBtn = document.querySelector('.Email_signIn');
const googleSignInBtn2 = document.querySelector('#signIn_google');
const facebookSignInBtn2 = document.querySelector('#signIn_facebook');
const emailSignInBtn2 = document.querySelector('#signIn_email');


googleSignInBtn.addEventListener('click', () => {
    signInWithGoogle();
})
facebookSignInBtn.addEventListener('click', () => {
    signInWithFacebook();
})
emailSignInBtn.addEventListener('click', () => {
    sendEmail();
    email_text[0].style.display = 'block';
})
googleSignInBtn2.addEventListener('click', () => {
    signInWithGoogle();
})
facebookSignInBtn2.addEventListener('click', () => {
    signInWithFacebook();
})
emailSignInBtn2.addEventListener('click', () => {
    sendEmail();
    email_text[1].style.display = 'block';
})
// 
submit.addEventListener('click', (e) => {
    var name = GetInputVal('name_input');
    var email = GetInputVal('email_input');
    var location = GetInputVal('location_input');
    var type = GetInputVal('type_input');

    console.log(name, email, location, type)

    e.preventDefault();
    //call the function to save the values on submit

    addVal();
    runAfterSubmit()
    function runAfterSubmit() {
        setTimeout(function closeWindow() {
            formContainer.style.display = 'none';
        }, 6000);
        const btn = document.querySelector('#joinUs_btn');
        btn.innerHTML = "Thank you for joining"
        formBottom.style.display = 'none'
    }

});
submit1.addEventListener('click', (e) => {
    e.preventDefault();
    addVal();
});

//city/country api
const location_output = document.querySelector('#location_input');
getData();
function getData() {
    var url = 'https://restcountries.com/v3.1/all';
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        let output = '';
        data.forEach(country => {
            output += `<option>${country.name.common}</option>`
            // console.log(country.name);
        })
        location_output.innerHTML = output;
    }).catch(error => {
        console.log(error);
    })
}
const location_outputCity = document.querySelector('#location_inputCity');
getDataCity();
function getDataCity() {
    // var headers = new Headers();
    // headers.append("X-CSCAPI-KEY", "API_KEY");

    // var requestOptions = {
    //     method: 'GET',
    //     headers: headers,
    //     redirect: 'follow'
    // };

    // fetch("https://api.countrystatecity.in/v1/states", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            'X-RapidAPI-Key': 'dbb60ea83emshc462c8aaeec9337p1baba4jsn6cbd6526cc0f'
        }
    };

    fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function GetInputVal(id) {
    return document.getElementById(id).value;
}
async function addVal() {
    var name = GetInputVal('name_input');
    var email = GetInputVal('email_input');
    var location = GetInputVal('location_input');
    var type = GetInputVal('type_input');
    try {

        const docRef = await addDoc(collection(db, "website_user"), {
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
const email_text = document.querySelectorAll('.email_auth');
function sendEmail() {
    var email = GetInputVal('email_input');
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://127.0.0.1:5501/',
        // This must be true.
        handleCodeInApp: true,
        // iOS: {
        //     bundleId: 'com.example.ios'
        // },
        // android: {
        //     packageName: 'com.example.android',
        //     installApp: true,
        //     minimumVersion: '12'
        // },
        // dynamicLinkDomain: 'example.page.link'
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
            console.log('error is here');
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

    signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            console.log('this is not working');
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
