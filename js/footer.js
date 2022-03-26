const Footer = document.querySelector('.footer_section');
const whiteIcons = document.querySelectorAll('.none');
const DarkIcons = document.querySelectorAll('.hid');

check.addEventListener('change', () => {
    if (check.checked) {
        Footer.style.backgroundImage = 'url(../assets/footer_section/Footer-background-DarkMode.svg)';
        // whiteIcons.forEach(Element => {
        //     whiteIcons[Element].style.display = 'block';
        //     console.log('fire');
        // })
        for (var i = 0; i < whiteIcons.length; i++) {
            whiteIcons[i].style.display = 'block';
            DarkIcons[i].style.display = 'none';
        }
        console.log('fire');
    }
    else {
        Footer.style.backgroundImage = 'url(../assets/footer_section/Footer-background-LightMode.svg)';
        for (var i = 0; i < whiteIcons.length; i++) {
            whiteIcons[i].style.display = 'none';
            DarkIcons[i].style.display = 'block';
        }
    }

})