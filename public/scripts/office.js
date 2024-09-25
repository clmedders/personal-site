document.addEventListener('DOMContentLoaded', () => {
  const quoteBtn = document.getElementById('quote-btn');
  const quoteBox = document.getElementById('quote-box');
  const character = document.getElementById('character');
  const pic = document.getElementById('pic');

  quoteBtn.addEventListener('click', async () => {
    const data = await fetchQuote();
    if (data) {
      character.textContent = data.character;
      quoteBox.textContent = data.quote;
      pic.src = data.character_avatar_url;
    }
  });
});

async function fetchQuote() {
  try {
    const response = await fetch('https://officeapi.akashrajpurohit.com/quote/random');
    if (!response.ok) throw response.status;
    return await response.json();
  } catch (error) {
    console.warn(error);
  }
}
