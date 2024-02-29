//Script

const daysElement = document.getElementById("days")
const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

//Set the desired deadline date and time
const deadline = new Date("2024-03-20T23:59:59");

//Update the timer every second
const updateCountdown = () => {
    const current = new Date();
    const remainingTime = deadline - current;
}

//Calculate the remaining days, hours, minutes and seconds left
const days = Math.floor(difference / (1000 * 60 * 60 * 24));
const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//Format the time units with leading zeros
const formattedDays = days.toString().padStart(2, "0");
const formattedHours = hours.toString().padStart(2, "0");
const formattedMinutes = minutes.toString().padStart(2, "0");
const formattedSeconds = seconds.toString().padStart(2, "0");

//Update the count