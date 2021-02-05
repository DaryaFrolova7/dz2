let phrases = [
  'начать писать книгу',
  'почитать о медицине',
  'провести экспермент',
  'выучить законы Ньютона',
  'нарисовать картину',
  'освоить новый музыкальный предмет'
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');



button.addEventListener('click', function () {
 phrase.textContent = getRandomElement(phrases);
}); 