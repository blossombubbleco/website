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
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
//initialize the google authentication
const provider1 = new GoogleAuthProvider();
//initialize the facebook authentication
const provider = new FacebookAuthProvider();
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


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
const topForm = document.querySelector('#remove');
const bottomForm = document.querySelector('#form_bottom');
topForm.addEventListener('keypress', (e) => {
    let keyPressed = e.keycode || e.which;

    const question = document.querySelectorAll('.formQuestions');
    if (keyPressed == 13) {
        e.preventDefault();
        question.forEach(element => {
            if (question[0].value != '') {
                nameAlert.style.display = 'none';
                form.style.transform = "translateX(-40em)";
                num.style.transform = 'translateY(-36.8px)';
                inputIllustrations[0].classList.remove('active');
                inputIllustrations[1].classList.add('active');
                if (question[1].value != '') {
                    emailAlert.style.display = 'none';
                    form.style.transform = "translateX(-80em)";
                    num.style.transform = 'translateY(-76.8px)';
                    inputIllustrations[1].classList.remove('active');
                    inputIllustrations[2].classList.add('active');
                    if (question[2].value != '' && question[3].value != '' && question[4].value != '') {
                        locationAlert.style.display = 'none';
                        form.style.transform = "translateX(-120em)";
                        num.style.transform = 'translateY(-115.2px)';
                        inputIllustrations[2].classList.remove('active');
                        inputIllustrations[3].classList.add('active');
                        quesDesc[0].style.display = 'block';
                        e.preventDefault();

                    } else {
                        locationAlert.style.display = 'block';
                    }
                }
                else {
                    emailAlert.style.display = 'block';
                }
            } else {
                nameAlert.style.display = 'block';
            }
        })
    }

})
bottomForm.addEventListener('keypress', (e) => {
    let keyPressed = e.keycode || e.which;

    const question = document.querySelectorAll('.formQuestions2');
    if (keyPressed == 13) {
        e.preventDefault();
        question.forEach(element => {
            if (question[0].value != '') {
                nameAlert2.style.display = 'none';
                form2.style.transform = "translateX(-40em)";
                num2.style.transform = 'translateY(-36.8px)';
                inputIllustrations[6].classList.remove('active');
                inputIllustrations[7].classList.add('active');
                if (question[1].value != '') {
                    emailAlert2.style.display = 'none';
                    form2.style.transform = "translateX(-80em)";
                    num2.style.transform = 'translateY(-76.8px)';
                    inputIllustrations[7].classList.remove('active');
                    inputIllustrations[8].classList.add('active');
                    if (question[2].value != '' && question[3].value != '' && question[4].value != '') {
                        locationAlert2.style.display = 'none';
                        form2.style.transform = "translateX(-120em)";
                        num2.style.transform = 'translateY(-115.2px)';
                        inputIllustrations[8].classList.remove('active');
                        inputIllustrations[9].classList.add('active');
                        quesDesc[1].style.display = 'block';
                        e.preventDefault();

                    } else {
                        locationAlert2.style.display = 'block';
                    }
                }
                else {
                    emailAlert2.style.display = 'block';
                }
            } else {
                nameAlert2.style.display = 'block';
            }
        })
    }

})



submit.addEventListener('click', (e) => {

    e.preventDefault();
    //call the function to save the values on submit
    var bool = true;
    if (e.which === 13) {
        bool = false;
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
        done.style.display = 'flex';
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
        done.style.display = 'flex';
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
        searchOnFocus: true,
        display: ["name"],
        source: {
            data: country
        },
        callback: {
            onClickAfter: function (node, a, item, event) {
                //call the function to send the data to firebase
                getstate(item.iso2);
            },
        }
    });
}

async function getstate(iso2) {
    var url = "https://api.countrystatecity.in/v1/countries/" + iso2 + "/states"
    const response = await fetch(url, requestOptions);
    var result = await response.text();
    const state = JSON.parse(result);
    $.typeahead({
        input: '.js-typeahead-state_v1',
        minLength: 1,
        order: "asc",
        display: ["name"],
        source: {
            data: state
        },
        callback: {
            onClickAfter: function (node, a, item, event) {
                //call the function to send the data to firebase
                getcity(iso2, item.iso2);
            },
        }
    });
}

async function getcity(countryiso2, stateiso2) {
    var url = "https://api.countrystatecity.in/v1/countries/" + countryiso2 + "/states/" + stateiso2 + "/cities"
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
    var locationState = GetInputVal('location_input');
    var locationCity = GetInputVal('location_inputCity');
    var type = GetInputVal('type_input');
    try {

        const docRef = await addDoc(collection(db, "Website_User"), {
            name: name,
            email: email,
            Country: locationCountry,
            State: locationState,
            city: locationCity,
            type: type
        });
        // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    localStorage.removeItem('nameForm1');
    localStorage.removeItem('emailForm1');
    localStorage.removeItem('countryForm1');
    localStorage.removeItem('stateForm1');
    localStorage.removeItem('cityForm1');
    localStorage.removeItem('typeForm1');
};
async function addVal2() {
    var name = document.querySelector('.name_input').value;
    var email = document.querySelector('.email_input').value;
    var locationCountry = GetInputVal('countery');
    var locationState = GetInputVal('location_inputState');
    var locationCity = document.querySelector('.location_inputCity').value;
    var type = document.querySelector('.type_input').value
    try {

        const docRef = await addDoc(collection(db, "Website_User"), {
            name: name,
            email: email,
            Country: locationCountry,
            State: locationState,
            city: locationCity,
            type: type
        });
        // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    localStorage.removeItem('nameForm2');
    localStorage.removeItem('emailForm2');
    localStorage.removeItem('countryForm2');
    localStorage.removeItem('stateForm2');
    localStorage.removeItem('cityForm2');
    localStorage.removeItem('typeForm2');
};
//send email function
const email_text = document.querySelectorAll('.email_auth');
function sendEmail(email) {
    const auth = getAuth();
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        // 'url': window.location.href, // Here we redirect back to this same page.
        // 'handleCodeInApp': true // This must be true.
        url: 'http://127.0.0.1:5502/',
        // This must be true.
        handleCodeInApp: true,
    };
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            //form1 functionality
            var name = GetInputVal('name_input');
            var email = GetInputVal('email_input');
            var locationCountry = GetInputVal('country');
            var locationState = GetInputVal('location_input');
            var locationCity = GetInputVal('location_inputCity');
            var type = GetInputVal('type_input');

            let nameLocally = window.localStorage.setItem('nameForm1', name);
            let emailLocally = window.localStorage.setItem('emailForm1', email);
            let CountryLocally = window.localStorage.setItem('countryForm1', locationCountry);
            let StateLocally = window.localStorage.setItem('stateForm1', locationState);
            let cityLocally = window.localStorage.setItem('cityForm1', locationCity);
            let typeLocally = window.localStorage.setItem('typeForm1', type);


            //form2 functionaliy
            var name2 = document.querySelector('.name_input').value;
            var email2 = document.querySelector('.email_input').value;
            var locationCountry2 = GetInputVal('countery');
            var locationState2 = GetInputVal('location_inputState');
            var locationCity2 = document.querySelector('.location_inputCity').value;
            var type2 = document.querySelector('.type_input').value

            let nameLocally2 = window.localStorage.setItem('nameForm2', name2);
            let emailLocally2 = window.localStorage.setItem('emailForm2', email2);
            let CountryLocally2 = window.localStorage.setItem('countryForm2', locationCountry2);
            let StateLocally2 = window.localStorage.setItem('stateForm2', locationState2);
            let cityLocally2 = window.localStorage.setItem('cityForm2', locationCity2);
            let typeLocally2 = window.localStorage.setItem('typeForm2', type2);

            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
            // ...
            console.log('email is being sent out to :' + email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error)
            // ...
        });
}
setInterval(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        console.log('if condition is working');
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation');
            showRun();
            runAfterAuth();
            runAfterAuth2();
            form.style.transform = "translateX(-200em)";
            num.style.transform = 'translateY(-192px)';
            form.style.transform = "translateX(-200em)";
            num.style.transform = 'translateY(-192px)';
        }
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, email, window.location.href)
            .then((result) => {
                // Clear email from storage.
                window.localStorage.removeItem('emailForSignIn');
                console.log('it is working after email sent');


                valueOfForm1();
                valueOfForm2();

                showRun();
                runAfterAuth();
                runAfterAuth2();

                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
            })
            .catch((error) => {
                console.log('error occured after email is sent' + error);
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
            });
    }
}, 2000)
if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt('Please provide your email for confirmation');
        showRun();
        runAfterAuth();
        runAfterAuth2();
        form.style.transform = "translateX(-200em)";
        num.style.transform = 'translateY(-192px)';
        form.style.transform = "translateX(-200em)";
        num.style.transform = 'translateY(-192px)';
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem('emailForSignIn');
            console.log('it is working after email sent');


            valueOfForm1();
            valueOfForm2();

            showRun();
            runAfterAuth();
            runAfterAuth2();

            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
            console.log('error occured after email is sent' + error);
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
        });
}
function valueOfForm1() {

    form.style.transform = "translateX(-200em)";
    num.style.transform = 'translateY(-192px)';
    showRun();
    runAfterAuth();
    runAfterAuth2();

    //gets the input filed of the form1
    let nameValueForm1 = document.querySelector('#name_input');
    let emailValueFrom1 = document.querySelector('#email_input');
    let countryValueFrom1 = document.querySelector('#country');
    let stateValueFrom1 = document.querySelector('#location_input');
    let cityValueFrom1 = document.querySelector('#location_inputCity');
    let typeValueFrom1 = document.querySelector('#type_input');

    //gets the user filled details and put them inside the form 
    nameValueForm1.value = localStorage.getItem('nameForm1');
    emailValueFrom1.value = localStorage.getItem('emailForm1');
    countryValueFrom1.value = localStorage.getItem('countryForm1');
    stateValueFrom1.value = localStorage.getItem('stateForm1');
    cityValueFrom1.value = localStorage.getItem('cityForm1');
    typeValueFrom1.value = localStorage.getItem('typeForm1');
}
function valueOfForm2() {

    form.style.transform = "translateX(-200em)";
    num.style.transform = 'translateY(-192px)';
    showRun();
    runAfterAuth();
    runAfterAuth2();

    //gets the input filed of the form1
    let nameValueForm1 = document.querySelector('.name_input');
    let emailValueFrom1 = document.querySelector('.email_input');
    let countryValueFrom1 = document.querySelector('#countery');
    let stateValueFrom1 = document.querySelector('#location_inputState');
    let cityValueFrom1 = document.querySelector('#InputCity');
    let typeValueFrom1 = document.querySelector('.type_input');

    //gets the user filled details and put them inside the form 
    nameValueForm1.value = localStorage.getItem('nameForm2');
    emailValueFrom1.value = localStorage.getItem('emailForm2');
    countryValueFrom1.value = localStorage.getItem('countryForm2');
    stateValueFrom1.value = localStorage.getItem('stateForm2');
    cityValueFrom1.value = localStorage.getItem('cityForm2');
    typeValueFrom1.value = localStorage.getItem('typeForm2');
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
            num.style.transform = 'translateY(-192px)';
            //for the form Second
            form2.style.transform = "translateX(-200em)";
            num2.style.transform = 'translateY(-192px)';
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
            num.style.transform = 'translateY(-192px)';
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

