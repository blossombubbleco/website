var customize_btn = document.querySelector('.header_customize-btn');
var dropdown_btn = document.querySelector('.header_customize-dropdown-menu');

customize_btn.addEventListener('click', function () {
    dropdown_btn.classList.toggle('is-active');
});

const check = document.querySelector('#checkbox');
check.addEventListener('change', () => {
    document.body.classList.toggle('dark_mode')
})

function joinUs(e) {
    debugger;


    var emailVal = document.getElementById('hero_email').value;

    console.log('in email', emailVal)

    if (emailVal.indexOf("@") > 2 && emailVal.indexOf('.') > 3) {


        fetch('address db', {
            method: "POST", 
            body: JSON.stringify(emailVal),
            headers: { "Content-Type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));

    }


}