const showHidebtn = document.querySelector('#joinUs_btn');
const submit = document.querySelector('#submitForm');
const submit1 = document.querySelector('#submitForm2');
const formContainer = document.querySelector('.early_access_section');
const inputIllustrations = document.querySelectorAll('.input_illustration');
const formBottom = document.querySelector('#form_bottom');
const nameAlert = document.querySelector('.alertShow');
const emailAlert = document.querySelector('.alertemail');
const locationAlert = document.querySelector('.alertlocate');
const nameAlert2 = document.querySelector('.alertShow2');
const emailAlert2 = document.querySelector('.alertemail2');
const locationAlert2 = document.querySelector('.alertlocate2');



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
const quesDesc = document.querySelectorAll('.input_text_bottom');



//number changing
const num = document.querySelector('.flowing_number');

function GetInputVal(id) {
    return document.getElementById(id).value;
}

transFirst.addEventListener('click', () => {
    var name = GetInputVal('name_input');
    if (name == '') {
        nameAlert.style.display = 'block';
    } else {
        nameAlert.style.display = 'none';
        form.style.transform = "translateX(-40em)";
        num.style.transform = 'translateY(-36.8px)';
        inputIllustrations[0].classList.remove('active');
        inputIllustrations[1].classList.add('active');
    }
})
transSecond.addEventListener('click', () => {
    var email = GetInputVal('email_input');
    if (email == '') {
        emailAlert.style.display = 'block';
    }
    else {
        emailAlert.style.display = 'none';
        form.style.transform = "translateX(-80em)";
        num.style.transform = 'translateY(-76.8px)';
        inputIllustrations[1].classList.remove('active');
        inputIllustrations[2].classList.add('active');
    }
})
transThird.addEventListener('click', () => {
    var location = GetInputVal('country');
    var locationState = GetInputVal('location_input');
    var locationCity = GetInputVal('location_inputCity');
    if (location == '' || locationState == '' || locationCity == '') {
        locationAlert.style.display = 'block';
    } else {
        locationAlert.style.display = 'none';
        form.style.transform = "translateX(-120em)";
        num.style.transform = 'translateY(-115.2px)';
        inputIllustrations[2].classList.remove('active');
        inputIllustrations[3].classList.add('active');
        quesDesc[0].style.display = 'block';
    }
})
transForth.addEventListener('click', () => {
    form.style.transform = "translateX(-160em)";
    num.style.transform = 'translateY(-153.6px)';
    inputIllustrations[3].classList.remove('active');
    inputIllustrations[4].classList.add('active');
    quesDesc[0].style.display = 'none';
})
function runAfterAuth() {
    transFifth.style.background = 'var(--clr-secondry)';
    transFifth.addEventListener('click', () => {
        form.style.transform = "translateX(-200em)";
        num.style.transform = 'translateY(-192px)';
        inputIllustrations[4].classList.remove('active');
        inputIllustrations[5].classList.add('active');
    })
}

transFirstBack.addEventListener('click', () => {
    form.style.transform = "translateX(0em)";
    num.style.transform = 'translateY(0em)';
    inputIllustrations[0].classList.add('active');
    inputIllustrations[1].classList.remove('active');
})
transSecondBack.addEventListener('click', () => {
    form.style.transform = "translateX(-40em)";
    num.style.transform = 'translateY(-36.8px)';
    inputIllustrations[1].classList.add('active');
    inputIllustrations[2].classList.remove('active');
})
transThirdBack.addEventListener('click', () => {
    form.style.transform = "translateX(-80em)";
    num.style.transform = 'translateY(-76.8px)';
    inputIllustrations[2].classList.add('active');
    inputIllustrations[3].classList.remove('active');
    quesDesc[0].style.display = 'none';
})
transFourthBack.addEventListener('click', () => {
    form.style.transform = "translateX(-120em)";
    num.style.transform = 'translateY(-115.2px)';
    inputIllustrations[3].classList.add('active');
    inputIllustrations[4].classList.remove('active');
    quesDesc[0].style.display = 'block';
})
transFifthBack.addEventListener('click', () => {
    form.style.transform = "translateX(-160em)";
    num.style.transform = 'translateY(-153.6px)';
    inputIllustrations[4].classList.add('active');
    inputIllustrations[5].classList.remove('active');
})







function GetInputValClass(Class) {
    return document.getElementsByClassName(Class).value;
}
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
var transFifthBack2 = document.querySelector('#moveFifthback2');

const num2 = document.querySelector('.flowing_number2');

submit1.addEventListener('click', (event) => {
    event.preventDefault();
});
transFirst2.addEventListener('click', () => {
    var name = document.querySelector('.name_input').value;
    if (name == '') {
        nameAlert2.style.display = 'block';
    } else {
        nameAlert2.style.display = 'none';
        form2.style.transform = "translateX(-40em)";
        num2.style.transform = 'translateY(-36.8px)';
        inputIllustrations[6].classList.remove('active');
        inputIllustrations[7].classList.add('active');
    }
})
transSecond2.addEventListener('click', () => {
    var email = document.querySelector('.email_input').value
    if (email == '') {
        emailAlert2.style.display = 'block';
    }
    else {
        emailAlert2.style.display = 'none';
        form2.style.transform = "translateX(-80em)";
        num2.style.transform = 'translateY(-76.8px)';
        inputIllustrations[7].classList.remove('active');
        inputIllustrations[8].classList.add('active');
    }
})
transThird2.addEventListener('click', () => {
    var location = GetInputVal('countery');
    var locationState = GetInputVal('location_inputState');
    var locationcity = document.querySelector('.location_inputCity').value;
    if (location == '' || locationState == '' || locationcity == '') {
        locationAlert2.style.display = 'block';
    } else {
        locationAlert2.style.display = 'none';
        form2.style.transform = "translateX(-120em)";
        num2.style.transform = 'translateY(-115.2px)';
        inputIllustrations[8].classList.remove('active');
        inputIllustrations[9].classList.add('active');
        quesDesc[1].style.display = 'block';
    }
})
transForth2.addEventListener('click', () => {
    form2.style.transform = "translateX(-160em)";
    num2.style.transform = 'translateY(-153.6px)';
    inputIllustrations[9].classList.remove('active');
    inputIllustrations[10].classList.add('active');
    quesDesc[1].style.display = 'none';
})
function runAfterAuth2() {
    transFifth2.style.background = 'var(--clr-secondry)';
    transFifth2.addEventListener('click', () => {
        form2.style.transform = "translateX(-200em)";
        num2.style.transform = 'translateY(-192px)';
        inputIllustrations[10].classList.remove('active');
        inputIllustrations[11].classList.add('active');
    })
}

transFirstBack2.addEventListener('click', () => {
    form2.style.transform = "translateX(0em)";
    num2.style.transform = 'translateY(0em)';
    inputIllustrations[6].classList.add('active');
    inputIllustrations[7].classList.remove('active');
})
transSecondBack2.addEventListener('click', () => {
    form2.style.transform = "translateX(-40em)";
    num2.style.transform = 'translateY(-36.8px)';
    inputIllustrations[7].classList.add('active');
    inputIllustrations[8].classList.remove('active');
})
transThirdBack2.addEventListener('click', () => {
    form2.style.transform = "translateX(-80em)";
    num2.style.transform = 'translateY(-76.8px)';
    inputIllustrations[8].classList.add('active');
    inputIllustrations[9].classList.remove('active');
    quesDesc[1].style.display = 'none';
})
transFourthBack2.addEventListener('click', () => {
    form2.style.transform = "translateX(-120em)";
    num2.style.transform = 'translateY(-115.2px)';
    inputIllustrations[9].classList.add('active');
    inputIllustrations[10].classList.remove('active');
    quesDesc[1].style.display = 'block';
})
transFifthBack2.addEventListener('click', () => {
    form2.style.transform = "translateX(-160em)";
    num2.style.transform = 'translateY(-153.6px)';
    inputIllustrations[10].classList.add('active');
    inputIllustrations[11].classList.remove('active');
})
