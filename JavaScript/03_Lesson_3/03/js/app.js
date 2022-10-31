// 1 -----------------------------
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
arr1.reverse();
document.write("Наш массив : " + arr1.join(" &#9729; ") + "<br/>");
var userAnswer = prompt("Введите целое число от 0 до 14 включительно : ", "");
arr1.splice(userAnswer, 1);
document.write(
  "Вы удалили элемент с индексом " + userAnswer + " из нашего массива" + "<br/>"
);
document.write("Новый массив : " + arr1.join(" &#9729; "));
document.write("<hr/>");

// 2 -----------------------------
var styles = ["Джас", "Блюз"];
document.write("Наш массив : " + styles.join(" ") + "<br/><hr/>");

document.write("Добавить: Рок-н-рол, в конец массива <br/>");
styles.push("Рок-н-рол");
document.write(styles.join(" ") + "<br/><hr/>");

document.write("Заменить значение среднего элемента на: Классика <br/>");
// 1 version----------------------
var middle = Math.floor(styles.length / 2);
console.log(middle);
styles[middle] = "Классика";
document.write("1 version <br/>" + styles.join(" ") + "<br/>");
// 2 version----------------------
styles.splice(middle, 1, "Классика");
document.write("2 version <br/>" + styles.join(" ") + "<br/><hr/>");

document.write("Удалить первый элемент и показать его <br/>");
// 1 version----------------------
var elemFirstStyles1 = styles.shift();
document.write("1 version <br/>" + elemFirstStyles1 + "<br/>");
document.write("Новый массив: " + styles.join(" ") + "<br/>");
// 2 version----------------------
styles.unshift("Джас"); //восстанавливаем массив
var elemFirstStyles2 = styles.splice(0, 1);
document.write("2 version <br/>" + elemFirstStyles2 + "<br/>");
document.write("Новый массив: " + styles.join(" ") + "<br/><hr/>");

document.write("Вставить: Рэп и Регги в начало массива <br/>");
// 1 version----------------------
styles.unshift("Рэп", "Регги");
document.write("1 version <br/>" + styles.join(" ") + "<br/>");
// 2 version----------------------
styles.splice(0, 2); //восстанавливаем массив
styles.splice(0, 0, "Рэп", "Регги");
document.write("2 version <br/>" + styles.join(" ") + "<br/>");
document.write("<hr/>");
