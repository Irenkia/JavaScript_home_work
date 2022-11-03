// 1 -----------------------------
document.write("<h2> Создайте объект криптокошилек. <br/><hr/>");
var cryptoWallet = {
  name: "Bob",
  surname: "Smith",
  btn: {
    nameCurrency: "Bitcoin",
    logo: "",
    amount: 2,
    course: 9000.25,
  },
  eth: {
    nameCurrency: "Ethereum",
    logo: "",
    amount: 3,
    course: 7000.45,
  },
  stel: {
    nameCurrency: "Stellar",
    logo: "",
    amount: 5,
    course: 5000.35,
  },

  show: function (valuta) {
    document.write(
      `<h1>Добрый день, ${this.name} ${
        this.surname
      } !</h1> <p>На вашем балансе ${this[valuta].nameCurrency} ${
        this[valuta].logo
      } осталось ${
        this[valuta].amount
      } монет,</br> если вы сегодня продадите их то,</br> получите ${(
        this[valuta].amount * this[valuta].course
      ).toFixed(2)} грн.</p>`
    );
  },
};
cryptoWallet.show("btn");
document.write("<hr/>");
// 2 -----------------------------
document.write("<h2> Создать объект “Документ”. <br/><hr/>");
var myDocument = {
  header: "",
  body: "",
  footer: "",
  date: "",
  app: {
    header: {},
    body: {},
    footer: {},
    date: {},
  },
  fill: () => {
    header = prompt(`Введите название документа :`, ``);
    body = prompt(`Введите текс документа :`, ``);
    footer = prompt(`Введите данные создателя документа :`, ``);
    date = prompt(`Введите дату документа :`, ``);
    this.app.header = prompt(`Введите название приложения :`, ``);
    this.app.body = prompt(`Введите текс приложения :`, ``);
    this.app.footer = prompt(`Введите данные создателя приложения :`, ``);
    this.app.date = prompt(`Введите дату приложения :`, ``);
  },
  show: function () {
    document.write(`<h1>${header}</h1>`);
    document.write(`<p>${body}</p>`);
    document.write(`<p>${footer}</p>`);
    document.write(`<p>${date}</p>`);
    document.write(`<h2>${app.header}</h2>`);
    document.write(`<p>${app.header}</p>`);
    document.write(`<p>${app.header}</p>`);
    document.write(`<p>${app.header}</p>`);
  },
};
myDocument.fill();
myDocument.show();
