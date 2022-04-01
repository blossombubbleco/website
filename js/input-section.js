const showHidebtn = document.querySelector('#joinUs_btn');
const submit = document.querySelector('#submitForm');
const submit1 = document.querySelector('#submitForm2');
const formContainer = document.querySelector('.early_access_section');











var form = document.querySelector('#form');
var transFirst = document.querySelector('#moveFirst');
var transSecond = document.querySelector('#moveSecond');
var transThird = document.querySelector('#moveThird');
var transForth = document.querySelector('#moveForth');
var transFirstBack = document.querySelector('#moveFirstback');
var transSecondBack = document.querySelector('#moveSeondback');
var transThirdBack = document.querySelector('#moveThirdback');
var transFourthBack = document.querySelector('#moveFourthback');

transFirst.addEventListener('click', () => {
    form.style.transform = "translateX(-42em)";
})
transSecond.addEventListener('click', () => {
    form.style.transform = "translateX(-84em)";
})
transThird.addEventListener('click', () => {
    form.style.transform = "translateX(-126em)";
})
transForth.addEventListener('click', () => {
    form.style.transform = "translateX(-168em)";
})

transFirstBack.addEventListener('click', () => {
    form.style.transform = "translateX(0em)";
})
transSecondBack.addEventListener('click', () => {
    form.style.transform = "translateX(-42em)";
})
transThirdBack.addEventListener('click', () => {
    form.style.transform = "translateX(-84em)";
})
transFourthBack.addEventListener('click', () => {
    form.style.transform = "translateX(-126em)";
})








var form2 = document.querySelector('#form2');
var transFirst2 = document.querySelector('#moveFirst2');
var transSecond2 = document.querySelector('#moveSecond2');
var transThird2 = document.querySelector('#moveThird2');
var transForth2 = document.querySelector('#moveForth2');
var transFirstBack2 = document.querySelector('#moveFirstback2');
var transSecondBack2 = document.querySelector('#moveSeondback2');
var transThirdBack2 = document.querySelector('#moveThirdback2');
var transFourthBack2 = document.querySelector('#moveFourthback2');

submit1.addEventListener('click', (event) => {
    event.preventDefault();
});
transFirst2.addEventListener('click', () => {
    form.style.transform = "translateX(-42em)";
})
transSecond2.addEventListener('click', () => {
    form.style.transform = "translateX(-84em)";
})
transThird2.addEventListener('click', () => {
    form.style.transform = "translateX(-126em)";
})
transForth2.addEventListener('click', () => {
    form.style.transform = "translateX(-168em)";
})

// transFirstBack2.addEventListener('click', () => {
//     form.style.transform = "translateX(0em)";
// })
// transSecondBack2.addEventListener('click', () => {
//     form.style.transform = "translateX(-42em)";
// })
// transThirdBack2.addEventListener('click', () => {
//     form.style.transform = "translateX(-84em)";
// })
// transFourthBack2.addEventListener('click', () => {
//     form.style.transform = "translateX(-126em)";
// })

