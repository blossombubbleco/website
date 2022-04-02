const showHidebtn = document.querySelector('#joinUs_btn');
const submit = document.querySelector('#submitForm');
const submit1 = document.querySelector('#submitForm2');
const formContainer = document.querySelector('.early_access_section');


var form = document.querySelector('#form');
var transFirst = document.querySelector('#moveFirst');
var transSecond = document.querySelector('#moveSecond');
var transThird = document.querySelector('#moveThird');
var transForth = document.querySelector('#moveForth');
var transFifth = document.querySelector('#moveFifth');
var transFirstBack = document.querySelector('#moveFirstback');
var transSecondBack = document.querySelector('#moveSeondback');
var transThirdBack = document.querySelector('#moveThirdback');
var transFourthBack = document.querySelector('#moveForthback');
var transFifthBack = document.querySelector('#moveFifthback');

//number changing
const num = document.querySelector('.flowing_number');

transFirst.addEventListener('click', () => {
    form.style.transform = "translateX(-40em)";
    num.style.transform = 'translateY(-2.4em)';
})
transSecond.addEventListener('click', () => {
    form.style.transform = "translateX(-80em)";
    num.style.transform = 'translateY(-4.8em)';
})
transThird.addEventListener('click', () => {
    form.style.transform = "translateX(-120em)";
    num.style.transform = 'translateY(-7.2em)';
})
transForth.addEventListener('click', () => {
    form.style.transform = "translateX(-160em)";
    num.style.transform = 'translateY(-9.6em)';
})
transFifth.addEventListener('click', () => {
    form.style.transform = "translateX(-200em)";
})

transFirstBack.addEventListener('click', () => {
    form.style.transform = "translateX(0em)";
    num.style.transform = 'translateY(0em)';
})
transSecondBack.addEventListener('click', () => {
    form.style.transform = "translateX(-40em)";
    num.style.transform = 'translateY(-2.4em)';
})
transThirdBack.addEventListener('click', () => {
    form.style.transform = "translateX(-80em)";
    num.style.transform = 'translateY(-4.8em)';
})
transFourthBack.addEventListener('click', () => {
    form.style.transform = "translateX(-120em)";
    num.style.transform = 'translateY(-7.2em)';
})
// transFifthBack.addEventListener('click', () => {
//     form.style.transform = "translateX(-160em)";
//     num.style.transform = 'translateY(-9.6em)';
// })








var form2 = document.querySelector('#form2');
var transFirst2 = document.querySelector('#moveFirst2');
var transSecond2 = document.querySelector('#moveSecond2');
var transThird2 = document.querySelector('#moveThird2');
var transForth2 = document.querySelector('#moveForth2');
var transFifth2 = document.querySelector('#moveFifth2');
var transFirstBack2 = document.querySelector('#moveFirstback2');
var transSecondBack2 = document.querySelector('#moveSecondback2');
var transThirdBack2 = document.querySelector('#moveThirdback2');
var transFourthBack2 = document.querySelector('#moveForthback2');
var transFifthBack2 = document.querySelector('#moveFifthback');

const num2 = document.querySelector('.flowing_number2');

submit1.addEventListener('click', (event) => {
    event.preventDefault();
});
transFirst2.addEventListener('click', () => {
    form2.style.transform = "translateX(-40em)";
    num2.style.transform = 'translateY(-2.4em)';
})
transSecond2.addEventListener('click', () => {
    form2.style.transform = "translateX(-80em)";
    num2.style.transform = 'translateY(-4.8em)';
})
transThird2.addEventListener('click', () => {
    form2.style.transform = "translateX(-120em)";
    num2.style.transform = 'translateY(-7.2em)';
})
transForth2.addEventListener('click', () => {
    form2.style.transform = "translateX(-160em)";
    num2.style.transform = 'translateY(-9.6em)';
})
transFifth2.addEventListener('click', () => {
    form2.style.transform = "translateX(-200em)";
})

transFirstBack2.addEventListener('click', () => {
    form2.style.transform = "translateX(0em)";
    num2.style.transform = 'translateY(0em)';
})
transSecondBack2.addEventListener('click', () => {
    form2.style.transform = "translateX(-40em)";
    num2.style.transform = 'translateY(-2.4em)';
})
transThirdBack2.addEventListener('click', () => {
    form2.style.transform = "translateX(-80em)";
    num2.style.transform = 'translateY(-4.8em)';
})
transFourthBack2.addEventListener('click', () => {
    form2.style.transform = "translateX(-120em)";
    num2.style.transform = 'translateY(-7.2em)';
})
// transFifthBack2.addEventListener('click', () => {
//     form2.style.transform = "translateX(-160em)";
// })
