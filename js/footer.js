const Footer = document.querySelector('.footer_section');
const whiteIcons = document.querySelectorAll('.none');
const DarkIcons = document.querySelectorAll('.hid');

check.addEventListener('change', () => {
    if (check.checked) {
        for (var i = 0; i < whiteIcons.length; i++) {
            whiteIcons[i].style.display = 'block';
            DarkIcons[i].style.display = 'none';
        }
        console.log('fire');
    }
    else {
        for (var i = 0; i < whiteIcons.length; i++) {
            whiteIcons[i].style.display = 'none';
            DarkIcons[i].style.display = 'block';
        }
    }

})