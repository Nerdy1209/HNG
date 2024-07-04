const currentTimeUTC = document.getElementById('currentTimeUTC');
const currentDay = document.getElementById('currentDay');

function updateCurrentTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const day = now.toLocaleString('en-US', { weekday: 'long' });
    currentTimeUTC.textContent = utcTime;
    currentDay.textContent = day;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);