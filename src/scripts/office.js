/* eslint-disable no-console */
// get quote button
const quoteBtn = document.getElementById('quote-btn');
// console.log(moreRon)

// get the quote box
const quoteBox = document.getElementById('quote-box');
// console.log(quote)

// get the character box
const character = document.getElementById('character');

const pic = document.getElementById('pic');

function fetchQuote() {
// fetch the data from the end point
  fetch('https://officeapi.akashrajpurohit.com/quote/random').then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response.status;
  }).then((data) => {
    character.textContent = data.character;
    quoteBox.textContent = data.quote;
    pic.src = data.character_avatar_url;
  }).catch((error) => {
    console.warn(error);
  });
}

quoteBtn.addEventListener('click', fetchQuote);

// 8ball script
// /**
// * Randomly shuffle an array
// * https://stackoverflow.com/a/2450976/1293256
// * @param  {Array} array The array to shuffle
// * @return {String}      The array
// */
// function shuffle(array) {
//   let currentIndex = array.length;
//   let temporaryValue; let
//     randomIndex;

//   // While there remain elements to shuffle...
//   while (currentIndex !== 0) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }
