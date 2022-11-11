document.write(
  `<p>1. Создаём массив слов для игры, и рандомно выберем слово для отгадывания: <br/>`
);
var words = [
  "машина",
  "яблоко",
  "школа",
  "памятник",
  "одуванчик",
  "полотенце",
  "медведь",
];
function arrayRandElement(array) {
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
}
var word = arrayRandElement(words);
var answerArray = [];
document.write(`Наше слово : <br/>`);
for (var i = 0; i < word.length; i++) {
  answerArray[i] = " _ ";
  document.write(` _ `);
}
var remainingLetters = word.length;
//var remainingTries = word.length;
do {
  var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  if (guess === null) {
    document.write("</br>Игра закончена");
    break;
  } else if (guess.length !== 1) {
    document.write("</br>Пожалуйста, введите одну букву.");
  } else {
    for (var j = 0; j < word.length; j++) {
      if (guess === word[i]) {
        answerArray[i] = guess;
        remainingTries--;
      }
    }
  }
} while (remainingTries > 0);
