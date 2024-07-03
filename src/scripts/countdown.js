// /* eslint-disable */

// function countDown() {
//   const days = document.getElementById('days');
//   const hours = document.getElementById('hours');
//   const mins = document.getElementById('mins');
//   const secs = document.getElementById('secs');

//   const currentTime = new Date();
//   const targetDate = new Date('2025-05-04T00:00:00-05:00');

//   const diffMs = targetDate.getTime() - currentTime.getTime();
//   const diffSec = Math.floor(diffMs / 1000);
//   const diffMins = Math.floor(diffSec / 60);
//   const diffHours = Math.floor(diffMins / 60);
//   const diffDays = Math.floor(diffHours / 24);

//     days.textContent = diffDays;
//     hours.textContent = diffHours % 24;
//     mins.textContent = diffMins % 60;
//     secs.textContent = diffSec % 60;

//     console.log(`Days: ${diffDays} Hours: ${diffHours % 24} Mins: ${diffMins % 60} Secs: ${diffSec % 60}`);
//   }

// countDown();


/* eslint-disable */

function countDown() {
  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const mins = document.getElementById('mins');
  const secs = document.getElementById('secs');

  const targetDate = new Date('2025-05-04T00:00:00-05:00');

  function updateCountdown() {
    const currentTime = new Date();
    const diffMs = targetDate.getTime() - currentTime.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    days.textContent = diffDays;
    hours.textContent = diffHours % 24;
    mins.textContent = diffMins % 60;
    secs.textContent = diffSec % 60;
  }

  updateCountdown(); // Initial update
  setInterval(updateCountdown, 1000); // Update every 1000ms (1 second)
}

countDown();