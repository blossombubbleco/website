// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use

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
    var email = GetInputVal('email_input');
    sendEmail(email);
    email_text[0].style.display = 'block';
})
googleSignInBtn2.addEventListener('click', () => {
    signInWithGoogle();
})
facebookSignInBtn2.addEventListener('click', () => {
    signInWithFacebook();
})
emailSignInBtn2.addEventListener('click', () => {
    var email = document.querySelector('.email_input').value;
    sendEmail(email)
    email_text[1].style.display = 'block';
})
// 

//moving focus
form.addEventListener('keypress', (e) => {
    let keyPressed = e.keycode || e.which;

    const question = document.querySelectorAll('.formQuestions');
    question[0].addEventListener('keydown', (e) => {
        if (question[0].value != '') {
            if (keyPressed == 13) {
                console.log('key is pressed 1');
                nameAlert.style.display = 'none';
                form.style.transform = "translateX(-40em)";
                num.style.transform = 'translateY(-2.4em)';
            }
        } else {
            nameAlert.style.display = 'block';
        }
    });
    // question[0].addEventListener('keydown', (e) => {
    //     if (question[0].value != '') {
    //         if (keyPressed == 13) {
    //             console.log('key is pressed 1');
    //             nameAlert.style.display = 'none';
    //             form.style.transform = "translateX(-40em)";
    //             num.style.transform = 'translateY(-2.4em)';
    //         }
    //     } else {
    //         nameAlert.style.display = 'block';
    //     }
    // });
    question[1].addEventListener('keypress', (e) => {
        if (question[1].value != '') {
            if (keyPressed == 13) {
                console.log('key pressed')
            }
        } else {
            emailAlert.style.display = 'block';
        }
    });

    if (keyPressed == 13) {
        e.preventDefault();
    }

})


submit.addEventListener('click', (e) => {
    var name = GetInputVal('name_input');
    var email = GetInputVal('email_input');
    var location = GetInputVal('location_input');
    var type = GetInputVal('type_input');

    console.log(name, email, location, type)

    e.preventDefault();
    //call the function to save the values on submit
    var bool = true;
    if (e.which === 13) {
        bool = false;
    }
    else {
        console.log('not');
    }

    addVal();
    runAfterSubmit()
    function runAfterSubmit() {
        setTimeout(function runAfter() {
            const hidden = document.querySelector('#remove');
            hidden.style.display = 'none';
            const hiddenBottom = document.querySelector('#form_bottom');
            hiddenBottom.style.display = 'none';
        }, 4000)
        const botForm = document.querySelector('#top_Form');
        botForm.style.display = 'none';
        const done = document.querySelector('#top_done');
        done.style.display = 'block';
        const padding = document.querySelector('#top_removePadd');
        padding.style.padding = '100px 140px'
        const btn = document.querySelector('#joinUs_btn');
        btn.innerHTML = "Thank you for joining our waitlist"
    }

});
form2.addEventListener("keypress", (e) => {
    let bool = true;
    let keyPressed = e.keycode || e.which;
    if (keyPressed == 13) {
        e.preventDefault();
        bool = false;
    }
})
submit1.addEventListener('click', (e) => {
    e.preventDefault();
    addVal2();
    runAfterSubmit()
    function runAfterSubmit() {
        const botForm = document.querySelector('#bottom_Form');
        botForm.style.display = 'none';
        const done = document.querySelector('#bottom_done');
        done.style.display = 'block';
        const padding = document.querySelector('#bottom_removePadd');
        padding.style.padding = '100px 140px'
        const btn = document.querySelector('#joinUs_btn');
        btn.innerHTML = "Thank you for joining our waitlist"
    }
});



//btn show if user authenticated succesfully
var transFifth = document.querySelector('#moveFifth');
var transFifth2 = document.querySelector('#moveFifth2');
function showRun() {
    transFifth.style.opacity = '1';
    transFifth2.style.opacity = '1';
}


//city/country api
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "N3NXSFh0dHRUUUNYMXhmVWRwSDlndW8yMlJicU5acFVraEd6anRWUA==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

getcountry();

async function getcountry() {
    const response = await
        fetch("https://api.countrystatecity.in/v1/countries/", requestOptions);
    var result = await response.text();
    const country = JSON.parse(result);
    $.typeahead({
        input: '.js-typeahead-country_v1',
        minLength: 1,
        order: "asc",
        display: ["name"],
        source: {
            data: country
        },
        callback: {
            onClickAfter: function (node, a, item, event) {
                //call the function to send the data to firebase
                getcity(item.iso2);
            },
        }
    });
}


async function getcity(iso2) {
    var url = "https://api.countrystatecity.in/v1/countries/" + iso2 + "/cities"
    const response = await fetch(url, requestOptions);
    var result = await response.text();
    const city = JSON.parse(result).map(function (el) { return el.name })
    $.typeahead({
        input: '.js-typeahead-city_v1',
        minLength: 1,
        order: "asc",
        source: {
            data: city
        },
        callback: {
            onClickAfter: function (node, a, item, event) {
                //call the function to send the data to firebase
            },
        }
    });
}


function GetInputVal(id) {
    return document.getElementById(id).value;
}
async function addVal() {
    var name = GetInputVal('name_input');
    var email = GetInputVal('email_input');
    var locationCountry = GetInputVal('country');
    var locationCity = GetInputVal('location_input');
    var type = GetInputVal('type_input');
    try {

        const docRef = await addDoc(collection(db, "website_user"), {
            name: name,
            email: email,
            Country: locationCountry,
            city: locationCity,
            type: type
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
async function addVal2() {
    var name = document.querySelector('.name_input').value;
    var email = document.querySelector('.email_input').value;
    var locationCountry = GetInputVal('countery');
    var locationCity = GetInputVal('location_inputCity');
    var type = document.querySelector('.type_input').value
    try {

        const docRef = await addDoc(collection(db, "website_user"), {
            name: name,
            email: email,
            Country: locationCountry,
            city: locationCity,
            type: type
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
//send email function
const email_text = document.querySelectorAll('.email_auth');
function sendEmail(email) {
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://127.0.0.1:5501/',
        // This must be true.
        handleCodeInApp: true,
        // iOS: {
        //     // bundleId: 'com.blausm.ios'
        // },
        // android: {
        //     // packageName: 'com.blausm.android',
        //     installApp: true,
        //     minimumVersion: '12'
        // },
        // dynamicLinkDomain: 'https://www.blausm.app/'
    };
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            // const credential = sendSignInLinkToEmail.credentialFromResult(result);
            // const accessToken = credential.accessToken;
            // window.localStorage.setItem('emailForSignIn', email);

            showRun();
            runAfterAuth();
            runAfterAuth2();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
            console.log('error is here');
        });
    if (isSignInWithEmailLink(auth, window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        // let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, email, window.location.href)
            .then((result) => {
                // Clear email from storage.
                // window.localStorage.removeItem('emailForSignIn');
                console.log('working result');
                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
            })
            .catch((error) => {
                console.log('working error' + error);
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
            });
    }
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
            //for the form first 
            form.style.transform = "translateX(-200em)";
            num.style.transform = 'translateY(-12em)';
            //for the form Second
            form2.style.transform = "translateX(-200em)";
            num2.style.transform = 'translateY(-12em)';
            // ...

            showRun();
            runAfterAuth();
            runAfterAuth2();
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
            form.style.transform = "translateX(-200em)";
            num.style.transform = 'translateY(-12em)';
            showRun();
            runAfterAuth();
            runAfterAuth2();
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

