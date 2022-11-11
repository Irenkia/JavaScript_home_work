// 1 -----------------------------
document.write(
  `<p>1. Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами: <br/>`
);
document.write(
  `-read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.<br/>`
);
document.write(`-sum() возвращает сумму введённых свойств.<br/>`);
document.write(`-mul() возвращает произведение введённых свойств.<br/><hr/>`);
function Calculator() {
  this.read = function () {
    this.x = +prompt(`Введите первое число : `, ``);
    this.y = +prompt(`Введите второе число : `, ``);
  };
  this.sum = function () {
    return this.x + this.y;
  };
  this.mul = function () {
    return this.x * this.y;
  };
}
var calculator = new Calculator();
calculator.read();
document.write(`Мы создали объект </br>
Объект имеет 2 свойства : это 2 числа, которые введёт пользователь.</br></br>`);
document.write(`Вызываем метод нашего объекта sum() </br>
Получаем сумму наших чисел : ${calculator.sum()}</br></br>`);
document.write(`Вызываем метод нашего объекта mul() </br>
Получаем произведение наших чисел : ${calculator.mul()}<br/>`);
document.write("<hr/>");
// 2 -----------------------------
document.write(`<p>2. Разработайте функцию-конструктор, котороя будеь создавать
объект Human(человек). Создайте массив объектов и реализуйте функцию, которая
будет сортировать элементы массива по значению свойства Age по возростанию
или по убыванию. <br/><hr/>`);
function Human() {
  this.name = prompt(`Введите имя : `, ``);
  this.surname = prompt(`Введите фамилию : `, ``);
  this.age = +prompt(`Введите возраст : `, ``);
}
function show(array) {
  for (var i = 0; i < array.length; i++) {
    document.write(
      `№ : ${i + 1} </br> Имя : ${array[i].name} </br> Фамилия : ${
        array[i].surname
      } </br> Возраст : ${array[i].age} </br><hr/>`
    );
  }
}
var humans = new Array(5);
document.write(`Наши работники : </br><hr/>`);
for (var i = 0; i < humans.length; i++) {
  humans[i] = new Human();
}
show(humans);
document.write(`- Сортируем наш массив по возрастанию по возрасту : </br>`);
humans.sort(function (a, b) {
  return a.age - b.age;
});

show(humans);
document.write(`- Сортируем наш массив по убыванию по возрасту : </br>`);
humans.sort(function (a, b) {
  return b.age - a.age;
});
show(humans);
