function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateTimeElement = document.getElementById('real-time');
    const dateElement = document.getElementById('real-date');
    dateTimeElement.textContent = now.toLocaleTimeString('en-US');
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

function init() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
}

init();
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "In order to succeed, we must first believe that we can. - Nikos Kazantzakis"
];

function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
}

function init() {
    updateDateTime();
    updateQuote(); // Initial quote
    setInterval(updateDateTime, 1000);
    setInterval(updateQuote, 15000); // Update quote every 15 seconds
}

init();
