// 1 -----------------------------
var row = 5;
var col = 7;
for (var i = 0; i < row; i++) {
  for (var j = 0; j < col; j++) {
    document.write(" * ");
  }
  document.write("<br/>");
}
document.write("<hr/>");
// 2 -----------------------------
// var login = prompt("Введите логин : ", "");
// if (login == "Админ" || login == "админ") {
//   var password = prompt("Введите пароль : ", "");
//   if (password == "Чёрный Властелин" || password == "чёрный властелин") {
//     document.write("Добро пожаловать!");
//   } else {
//     document.write("Пароль неверен");
//   }
// } else {
//   document.write("Вход отменён");
// }
// 3 -----------------------------
document.write("<hr/>");
var a = 2;
var b = 3;
var result = a + b < 4 ? "Мало" : "Много";
document.write(result);
document.write("<hr/>");
// 4 -----------------------------
// var message = "";
// var login = prompt("Введите логин : ", "");
// login == "Вася"
//   ? document.write("Привет")
//   : login == "Директор"
//   ? document.write("Здравствуйте")
//   : login == ""
//   ? document.write("Нет логина")
//   : document.write("Отмена");
//   document.write("<hr/>");
// 5 -----------------------------
var A = 2;
var B = 10;
var sum = 0;
for (var i = A; i <= B; i++) {
  if (i % 2 == 0) {
    document.write(i + " ");
  }
  sum += i;
}
document.write("<hr/>" + "Сумма чисел = " + sum);
document.write("<hr/>");
// 6 -----------------------------
document.write("Прямоугольник" + "<br/>");
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 20; j++) {
    document.write("&nbsp;" + "*" + "&nbsp;");
  }
  document.write("<br/>");
}
document.write("<hr/>");
// 7 -----------------------------
// 1 version----------------------
document.write("Прямоугольный треугольник (1 version)" + "<br/>");
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == j || i > j) {
      document.write("&nbsp;" + "*" + "&nbsp;" + "&nbsp;");
    }
  }
  document.write("<br/>");
}
document.write("<hr/>");
// 2 version----------------------
document.write("Прямоугольный треугольник (2 version)" + "<br/>");
for (var i = 0; i < 10; i++) {
  for (var j = 0; j <= i; j++) {
    document.write("&nbsp;" + "*" + "&nbsp;" + "&nbsp;");
  }
  document.write("<br/>");
}
document.write("<hr/>");
// 8 -----------------------------
document.write("Равносторонний треугольник" + "<br/>");
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    if (i + j == 5 - 1 || i + j > 5 - 1) {
      document.write("&nbsp;" + "*" + "&nbsp;&nbsp;");
    } else {
      document.write("&nbsp;&nbsp;");
    }
  }
  document.write("<br/>");
}
document.write("<hr/>");
// 9 -----------------------------
document.write("Ромб" + "<br/>");
var size = 10;
var center = size / 2;
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if (
      j == center + i ||
      j == center - i ||
      j == i - center ||
      j == size - i + center - 2
    ) {
      document.write("&nbsp;" + "*" + "&nbsp;");
    } else {
      document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    }
  }
  document.write("<br/>");
}
document.write("<hr/>");
