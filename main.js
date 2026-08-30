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
    timerInterval = setInterval(() => {
        timeer = time -1;
        timerDisplay.textContent = timer;

        if (timer <= 0) {
            endTest();
        }
    }, 1000);
}
