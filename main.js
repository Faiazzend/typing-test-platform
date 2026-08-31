const quoteDisplay = document.getElementById('quoteDisplay');
const input = document.getElementById('typing-input');
const timerDisplay = document.getElementById('timer');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const restartBtn = document.getElementById('restart-Btn');

const quotes = [
    "the quick brown fox jumps over the lazy dog",
    "javascript is fun to learn step by step",
    "practice makes progress not perfection",
]

let chosenQuote = '';
let timer = 60;
let timerInterval = null;
let hasStarted = false;

function loadQuote() {
    chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quoteDisplay.innerHTML = '';
    for (let i = 0; i < chosenQuote.length; i++) {
        const span = document.createElement('span');
        span.textContent = chosenQuote[i];
        quoteDisplay.appendChild(span);
    }

    input.value = '';
    input.disabled = false;
    input.focus();
}

function startTimer() {
    timerInterval = setInterval(function () {
        timer = timer - 1;
        timerDisplay.textContent = timer;

        if (timer <= 0) {
            endTest();
        }
    }, 1000);
}

function chheckInput() {
    const typedText = input.value;
    const spans = quoteDisplay.querySelectorAll('span');

    let correctCount = 0;

    spans.forEach((span, index) => {
        const typedChar = typedText[index];

        if (typedChar == null) {
            span.classList.remove('correct');
            span.classList.remove('incorrect');
            span.classList.remove('current');
        } else if (typedChar === span.textContent) {
            span.classList.add('correct');
            span.classList.remove('incorrect');
            correctCount++;
        } else {
            span.classList.add('incorrect');
            span.classList.remove('correct');
        } 
    });
    
    if (typedText.length < chosenQuote.length) {
        spans[typedText.length].classList.add('current');
    }
    if (typedText.length === chosenQuote.length) {
        endTest();
    }   
    return correctCount;
}

function calculateResults(correctCount) {}


