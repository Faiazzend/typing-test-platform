const quoteDisplay = document.getElementById("quote-display");
const input = document.getElementById("typing-input"); 
quoteDisplay.textContent = "Hello world!";
quoteDisplay.innerHTML = "<span>H</span>";
input.value;
input.disabled = false;

function loadQuote() {
    quoteDisplay.innerHTML = "";
    for (let i = 0; i < chosenQuote.length; i++) {
        const span = document.createElement("span");
        span.textContent = chosenQuote[i];
        quoteDisplay.appendChild(span);
    }
}

loadQuote();

const quotes = [
    "the quick brown fox jumps over the lazy dog",
    "javascript is fun to learn step by step"

];

const randomInex = Math.floor(Math.random() * quotes.length);
const chosenQuote = quotes[randomIndex];

for (let i = 0; i < chosenQuote.length; i++) {
    const char = chosenQuote[i];
    console.log(char);
}

const span = document.createElement("span");
span.textContent = char;
quoteDisplay.appendChild(span);

input.addEventListener("input", function() {
    console.log(input.value);

});

restartBtn.addEventListener("click", function() {
    console.log("Restart button clicked");
});

const spans = quoteDisplay.querySelectorAll("span");

spans.forEach(function(span, index) {
    console.log(index, span.textContent);
});

span.classList.add("correct");
span.classList.remove("correct");
span.classList.add("incorrect");

if (typedChar === targetChar) {
    span.classList.add("correct");
    
}

else {
    span.classList.add("incorrect");
}

let timerInterval = setInterval(function() {
    timer = timer - 1;
    document.getElementById("timer").textContent = timer;
    if (timer <= 0) {
        clearInterval(timerInterval);
        input.disabled = true;
        alert("Time's up!");
    }
}, 1000);