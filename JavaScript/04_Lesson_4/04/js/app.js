// 1 -----------------------------
// 1 version----------------------
document.write("<p> 1 version <br/>");
var add = function (a, b) {
  if (a == undefined) {
    a = 0;
  } else if (b == undefined) {
    b = 0;
  }
  return a + b;
};
var subtract = function (a, b) {
  if (a == undefined) {
    a = 0;
  } else if (b == undefined) {
    b = 0;
  }
  return a - b;
};
var multiple = function (a, b) {
  if (a == undefined) {
    a = 0;
  } else if (b == undefined) {
    b = 0;
  } else {
  }
  return a * b;
};
var divide = function (a, b) {
  if (a == undefined) {
    a = 0;
  } else if (b == 0) {
    document.write(
      "<p><b style=`color:red;`>ERROR:</b> <em>На ноль делить нельзя, введите другое число</em>"
    );
  } else if (b == undefined) {
    b = 1;
  }
  return a / b;
};

var a;
var b;
var sign;
var result;

do {
  a = prompt("Введите первое число : ");
  sign = prompt("Введите знак для операции (+ - * /) : ");
  b = prompt("Введите второе число : ");
  var repeat = confirm("Вы хотите повторить операцию ?");

  switch (sign) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiple(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      document.write(
        "<p><b style='color:red'>" +
          sign +
          "</b> - не является знаком арифметической операции."
      );
  }
  if (result != undefined) {
    document.write("<p>" + a + " " + sign + " " + b + " = " + result);
  }
} while (repeat);
document.write("<hr/>");

// 2 version----------------------
document.write("<p> 2 version <br/>");
function calculate(a, b, callBackFunction) {
  if (arguments.length != 3) {
    document.write(
      "<p><b style='color:red;'>ERROR:</b> <em>Требуется три аргумента при вызове.</em><hr/>"
    );
  } else {
    document.write("<p><b style='color:green;'> Правильный вызов функции.</b>");
    var result2 = callBackFunction(a, b);
    document.write("<p>" + result2 + "<hr/>");
  }
}
document.write(" 2 + 3 = ");
calculate(2, 3, add);
document.write(" 7 - 3 = ");
calculate(7, 3, subtract);
document.write(" 4 * 4 = ");
calculate(4, 4, multiple);
document.write(" 20 / 5 = ");
calculate(20, 5, divide);
document.write("   / 5 = ");
calculate(5, divide);
document.write(" 20 / 0 = ");
calculate(20, 0, divide);
// 2 -----------------------------
var arr = [1, 2, 3, 4, 5];
document.write("Наш массив : " + arr.join(" ") + "<br/>");
function myFunction(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray[i] = array[i] + 5;
  }
  return newArray;
}
function map(fn, array) {
  var result = fn(array);
  return result;
}
var newArr = map(myFunction, arr);
document.write("Наш новый массив : " + newArr.join(" ") + "<br/><hr/>");
// 3 -----------------------------
var age = parseInt(prompt("Введите свой возраст : ", ""));
console.log(typeof age);
console.log(age);
function checkAge(age) {
  age >= 18
    ? document.write("Добро пожаловать!")
    : document.write("Родители разрешили?");
}
checkAge(age);
