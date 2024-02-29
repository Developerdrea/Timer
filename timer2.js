const countdown = document.getElementById('countdown');

function updateTimer() {
    const currentTime = new Date();
    const targetDate = new Date("2024-03-25");

    const difference = targetDate - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <span id="days">${formatTime(days)}</span>
        <span id="hours">${formatTime(hours)}</span>
        <span id="minutes">${formatTime(minutes)}</span>
        <span id="seconds">${formatTime(seconds)}</span>
    `;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

updateTimer();
setInterval(updateTimer, 1000);