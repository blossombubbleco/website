
// form1.addEventListener('keypress', (e) => {
//     let bool = true;
//     let keyPressed = e.keycode || e.which;

//     const question = document.querySelectorAll('.formQuestions');
//     question[0].addEventListener('keypress', (e) => {
//         if (question[0].value != '') {
//             if (keyPressed == 13) {
//                 console.log('key is pressed 1');
//                 nameAlert.style.display = 'none';
//                 form.style.transform = "translateX(-40em)";
//                 num.style.transform = 'translateY(-2.4em)';
//             }
//         } else {
//             nameAlert.style.display = 'block';
//         }
//     })
//     question[1].addEventListener('keypress', (e) => {
//         if (question[1].value != '') {
//             if (keyPressed == 13) {
//                 console.log('key is pressed 2');
//                 emailAlert.style.display = 'none';
//                 form.style.transform = "translateX(-80em)";
//                 num.style.transform = 'translateY(-4.8em)';
//                 // question[1].nextElementSibling.focus();
//             }
//         } else {
//             emailAlert.style.display = 'block';
//         }
//     })
//     question[2].addEventListener('keypress', (e) => {
//         if (question[2].value != '' && question[3].value != '') {
//             if (keyPressed == 13) {
//                 console.log('key is pressed 3');
//                 locationAlert.style.display = 'none';
//                 form.style.transform = "translateX(-120em)";
//                 num.style.transform = 'translateY(-7.2em)';
//                 // question[2].nextElementSibling.focus();
//             }
//         } else {
//             locationAlert.style.display = 'block';
//         }
//     })
//     question[3].addEventListener('keypress', (e) => {
//         if (question[3].value != '' && question[2].value != '') {
//             if (keyPressed == 13) {
//                 console.log('key is pressed 4');
//                 locationAlert.style.display = 'none';
//                 form.style.transform = "translateX(-120em)";
//                 num.style.transform = 'translateY(-7.2em)';
//                 // question[3].focus();
//             }
//         } else {
//             locationAlert.style.display = 'block';
//         }
//     })

//     if (keyPressed == 13) {
//         e.preventDefault();
//     }

// })


// var form2 = document.querySelector('#form2');
// form2.addEventListener("keypress", (e) => {
//     let keyPressed = e.keycode || e.which;
//     if (keyPressed == 13) {
//         e.preventDefault();
//     }
// })