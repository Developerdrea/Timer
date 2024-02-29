// Function to calculate time until store opening

function getTimeUntilOpening() {
    const openingDate = new Date();
    openingDate.setDate(openingDate.getDate() + 10);

    const currentDate = new Date();
    const timeUntilOpening = openingDate - currentDate;

    const days = Math.floor(timeUntilOpening / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntilOpening % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilOpening % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntilOpening % (1000 * 60)) / 1000);

    document.getElementById('opening-date').textContent = openingDate.toDateString();
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update countdown every second
setInterval(getTimeUntilOpening, 1000);

//  Button functionality
document.getElementById('register-btn').addEventListener('click', function() {
    alert('Registration Successful!');
});