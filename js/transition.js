const container_00 = document.querySelector('.mobile_sticky-middle');
const container_card = document.querySelector('.mode_changing-image');
const container_01 = document.querySelector('.transition_container_01');
const container_02 = document.querySelector('.transition_container_02');
const container_03 = document.querySelector('.transition_container_03');
const container_04 = document.querySelector('.transition_container_04');
const container_05 = document.querySelector('.transition_container_05');
const container_06 = document.querySelector('.transition_container_06');
const container_07 = document.querySelector('.transition_container_07');
const container_08 = document.querySelector('.transition_container_08');

const background = document.querySelector('.mobile_sticky-middle');

const transitionFeature = document.querySelectorAll('.transition_feature');

const image = document.querySelectorAll('.mobile_preview');

const featureMobileCards = document.querySelectorAll('.featureShow_card');

const lightImage = document.querySelector('.display')
const darkImage = document.querySelector('.darkModeActive')
check.addEventListener('change', () => {
    if (check.checked) {
        lightImage.style.display = 'none';
        darkImage.style.display = 'block';
    }
    else {
        lightImage.style.display = 'block';
        darkImage.style.display = 'none';
    }

})



options00 = {
    root: null,
    threshold: 0.1
}
observer00 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image[0].classList.add('active');
        }
    })
}, options00);
observer00.observe(container_card);

options01 = {
    root: null,
    threshold: 0.2
}
observer01 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image[0].classList.remove('active');
            image[1].classList.add('active');
        }
        else {
            image[1].classList.remove('active');
        }
    })
}, options01);
observer01.observe(container_01);


options02 = {
    root: null,
    threshold: 0.2
}
observer02 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image[0].classList.remove('active');
            image[1].classList.remove('active');
            image[2].classList.add('active');
        }
        else {
            image[2].classList.remove('active');
        }
    })
}, options02);
observer02.observe(container_02);


options03 = {
    root: null,
    threshold: 0.2
}
observer03 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image[0].classList.remove('active');
            image[2].classList.remove('active');
            image[3].classList.add('active');
        }
        else {
            image[3].classList.remove('active');
        }
    })
}, options03);
observer03.observe(container_03);


options04 = {
    root: null,
    threshold: 0.2
}
observer04 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image[0].classList.remove('active');
            image[3].classList.remove('active');
            image[4].classList.add('active');
        }
        else {
            image[4].classList.remove('active');
        }
    })
}, options04);
observer04.observe(container_04);

options05 = {
    root: null,
    threshold: 0.2
}
observer05 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image[0].classList.remove('active');
            image[4].classList.remove('active');
            image[5].classList.add('active');
            featureMobileCards[0].style.opacity = '1';
        }
        else {
            image[5].classList.remove('active');
            featureMobileCards[0].style.opacity = '0';
        }
    })
}, options05);
observer05.observe(container_05);

options06 = {
    root: null,
    threshold: 0.2
}
observer06 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image[0].classList.remove('active');
            image[5].classList.remove('active');
            image[6].classList.add('active');
            featureMobileCards[1].style.opacity = '1';
        }
        else {
            image[6].classList.remove('active');
            featureMobileCards[1].style.opacity = '0';
        }
    })
}, options06);
observer06.observe(container_06);

options07 = {
    root: null,
    threshold: 0.2
}
observer07 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image[0].classList.remove('active');
            image[6].classList.remove('active');
            image[7].classList.add('active');
            featureMobileCards[2].style.opacity = '1';
        }
        else {
            image[7].classList.remove('active');
            featureMobileCards[2].style.opacity = '0';
        }
    })
}, options07);
observer07.observe(container_07);

options08 = {
    root: null,
    threshold: 0.2
}
observer08 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image[0].classList.remove('active');
            image[7].classList.remove('active');
            image[8].classList.add('active');
            featureMobileCards[3].style.opacity = '1';
        }
        else {
            image[8].classList.remove('active');
            featureMobileCards[3].style.opacity = '0';
        }
    })
}, options08);
observer08.observe(container_08);

//observer only for the feature text Mobile

