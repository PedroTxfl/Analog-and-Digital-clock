const hours = document.querySelector(".pointer.hours")
const minutes = document.querySelector(".pointer.minutes")
const seconds = document.querySelector(".pointer.seconds")

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360)
}

const setClock = () => {
    const dateToday = new Date();

    const secondsPercentage = dateToday.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + dateToday.getMinutes()) / 60;
    const hoursPercentage = (minutesPercentage + dateToday.getHours()) / 12;

    setRotation(hours, hoursPercentage);
    setRotation(minutes, minutesPercentage);
    setRotation(seconds, secondsPercentage);
}

setClock()

setInterval(setClock, 1000)