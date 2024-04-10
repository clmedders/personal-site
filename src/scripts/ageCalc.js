/* eslint-disable no-alert */
// Get the input elements
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const button = document.querySelector('.btn');

// Calculate the age
function calculateAge() {
  // Get the current date
  const today = new Date();
  // Convert the input dates to numbers
  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  // eslint-disable-next-line max-len
  if (day < 2 && month < 2 && year < 4) {
    alert('Please update your date format to match DD/MM/YYY');
  } else if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year <= today.getFullYear()) {
    // Calculate the birth date
    const birthdate = new Date(`${month}/${day}/${year}`);

    // Calculate the difference between the birthdate and the current date
    const diff = today.getTime() - birthdate.getTime();

    // Convert the difference to years, months, and days
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Display the results
    document.getElementById('aDay').textContent = `${days} Days`;
    document.getElementById('aMonth').textContent = `${months} Months`;
    document.getElementById('aYear').textContent = `${years} Years`;
  } else {
    document.querySelector('.errorText').textContent = 'Sorry but the date you listed is not real, check your numbers and try again!';
  }
}

// Call the calculateAge function when the button is clicked
button.addEventListener('click', calculateAge);
