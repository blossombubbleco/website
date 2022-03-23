const container_00 = document.querySelector('.mobile_sticky-middle');
const container_01 = document.querySelector('.transition_container_01');
const container_02 = document.querySelector('.transition_container_02');
const container_03 = document.querySelector('.transition_container_03');
const container_04 = document.querySelector('.transition_container_04');

const image = document.querySelectorAll('.mobile_preview');


// options00 = {
//     root: null,
//     threshold: 0.1
// }
// observer00 = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             image[0].classList.add('active');
//         }
//         else {
//             // image[0].classList.remove('active');
//         }
//     })
// }, options00);
// observer00.observe(container_00);


options01 = {
    root: null,
    threshold: 0.3
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
    threshold: 0.1
}
observer02 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
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
    threshold: 0.1
}
observer03 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
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
    threshold: 0.1
}
observer04 = new IntersectionObserver((entries) => {
    console.log('in ', entries)
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            image[3].classList.remove('active');
            image[4].classList.add('active');
        }
        else {
            image[4].classList.remove('active');
        }
    })
}, options04);
observer04.observe(container_04);