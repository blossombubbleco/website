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
const btnArray = { size1, size2, size3 };

// btnArray.forEach(element => {
//   btnArray[element].addEventListener('click',()=>{
//       body.style.fontSize=
//   })
// });
//on click add font size acording to the size



// function joinUs(e) {

//     debugger;


//     var emailVal = document.getElementById('hero_email').value;

//     console.log('in email', emailVal)

//     if (emailVal.indexOf("@") > 2 && emailVal.indexOf('.') > 3) {


//         fetch('address db', {
//             method: "POST",
//             body: JSON.stringify(emailVal),
//             headers: { "Content-Type": "application/json; charset=UTF-8" }
//         })
//             .then(response => response.json())
//             .then(json => console.log(json))
//             .catch(err => console.log(err));

//     }


// }