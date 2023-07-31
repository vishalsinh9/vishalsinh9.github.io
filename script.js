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
