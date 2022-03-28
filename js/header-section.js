var customize_btn = document.querySelector('.header_customize-btn');
var dropdown_btn = document.querySelector('.header_customize-dropdown-menu');

customize_btn.addEventListener('click', function () {
    dropdown_btn.classList.toggle('is-active');
});

const check = document.querySelector('#checkbox');
check.addEventListener('change', () => {
    document.body.classList.toggle('dark_mode')
})

//change font size
//1 get the buttons
const size1 = document.querySelector('.f-small');
const size2 = document.querySelector('.f-medium');
const size3 = document.querySelector('.f-large');
var computedFontSize = document.querySelector('.body_fontSize');


size1.addEventListener('click', () => {
    computedFontSize.style.fontSize = '16px';
})
size2.addEventListener('click', () => {
    computedFontSize.style.fontSize = '17.5px';
})
size3.addEventListener('click', () => {
    computedFontSize.style.fontSize = '19px';
})

