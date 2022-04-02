//Dom Elements
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');






//Set up the time
const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (currentHour > 12) {
        currentHour -= 12;
    }

    hourElement.textContent = currentHour.toString();
    minuteElement.textContent = currentMinute.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();