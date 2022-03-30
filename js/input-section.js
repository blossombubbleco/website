
const showHidebtn = document.querySelector('#joinUs_btn');
const submit = document.querySelector('#submitForm');
const submit1 = document.querySelector('#submitForm2');
const formContainer = document.querySelector('.early_access_section');


showHidebtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
    formContainer.scrollIntoView();
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
});

var form = document.querySelector('#form');
var transFirst = document.querySelector('#moveFirst');
var transSecond = document.querySelector('#moveSecond');
var transThird = document.querySelector('#moveThird');
var transForth = document.querySelector('#moveForth');

transFirst.addEventListener('click', () => {
    form.style.transform = "translateY(-14em)";
})
transSecond.addEventListener('click', () => {
    form.style.transform = "translateY(-28em)";
})
transThird.addEventListener('click', () => {
    form.style.transform = "translateY(-42em)";
})
transForth.addEventListener('click', () => {
    form.style.transform = "translateY(-56em)";
})

var form2 = document.querySelector('#form2');
var transFirst2 = document.querySelector('#moveFirst2');
var transSecond2 = document.querySelector('#moveSecond2');
var transThird2 = document.querySelector('#moveThird2');
var transForth2 = document.querySelector('#moveForth2');

transFirst2.addEventListener('click', () => {
    form2.style.transform = "translateY(-14em)";
})
transSecond2.addEventListener('click', () => {
    form2.style.transform = "translateY(-28em)";
})
transThird2.addEventListener('click', () => {
    form2.style.transform = "translateY(-42em)";
})
transForth2.addEventListener('click', () => {
    form2.style.transform = "translateY(-56em)";
})
submit1.addEventListener('click', (event) => {
    event.preventDefault();
});

