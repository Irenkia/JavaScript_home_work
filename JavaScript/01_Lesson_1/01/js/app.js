// document.write(
//   `<div class="container bg-white">
//   <header class="d-flex justify-content-center align-items-center">header 800*200</header>
//   <div class="container d-flex row bg-white">
//   <nav class="d-flex justify-content-center bg-white align-items-center">nav 100*400</nav>
//   <section class="d-flex justify-content-center bg-white align-items-center">section 700*400</section>
//   </div>
//     <footer class="d-flex justify-content-center align-items-center">footer 800*200</footer>
//     </div>`
// );

var words = ["машина"];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
var remainingLetters = word.length;
var remainingTries = word.length;

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

// Игровой цикл

while (remainingLetters > 0 && remainingTries > 0) {
  alert(answerArray.join(" "));

  var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");

  if (guess != null && guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else if (guess === null) {
    break;
  } else {
    let isMatch = false;
    let isAlredyExist = false;
    for (var j = 0; j < word.length; j++) {
      if (
        word[j] === guess ||
        word[j] === guess.toUpperCase() ||
        word[j] === guess.toLowerCase()
      ) {
        if (answerArray[j] !== "_") {
          isAlredyExist = true;
        }
        answerArray[j] = guess.toLowerCase();
        isMatch = true;
        remainingTries--;
      }
    } // Конец цикла for

    if (!isMatch) {
      alert("Неверная буква");
      remainingTries--;
    } else if (isAlredyExist) {
      alert("Буква уже была угадана");
    }
  }
} // Конец игрового цикла

// Отображаем ответ и поздравляем игрока

if (remainingLetters === 0) {
  alert(answerArray.join(" "));
  alert("Отлично! Было загадано слово " + "'" + word + "'");
} else if (remainingTries === 0) {
  alert("Ой, вы не отгадали слово " + "'" + word + "'");
}
