const text = document.querySelector('.tagline_highlight');
const string = text.textContent;
const splitText = string.split("");
text.textContent = '';

for (var i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
    const span = document.querySelectorAll('span')[char];
    span.classList.add('fade-in');
    if (char === splitText.length) {
        complete();
        return;
    }
    char++;
}

function complete() {
    clearInterval(timer);
    timer = null;
}