/* eslint-disable no-console */

const message = [
  'Consulting the spirits...',
  'Gazing into the depths of the future...',
  'BRB, jumping into my time machine...',
  'I see... I see...',
];

const responses = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
];

// let timeout;

// const res = document.getElementById('reset');
const rollBtn = document.getElementById('roll-btn');
const words = document.getElementById('fortune-text');
const box = document.getElementById('text');
const reset = document.getElementById('reset');

function clear() { window.location.reload(); }

// function loadText() {
//   console.log('Button was clicked!');
//   loading.textContent = message[Math.floor(Math.random() * message.length)];
// }

function fortuneText() {
  console.log('Button was clicked!');
  words.textContent = responses[Math.floor(Math.random() * message.length)];
}

rollBtn.addEventListener('click', fortuneText);

// reset.addEventListener('click', loadText);

reset.addEventListener('click', clear);
