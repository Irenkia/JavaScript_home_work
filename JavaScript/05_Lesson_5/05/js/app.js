// 1 -----------------------------
// 1 version----------------------
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
      } монет,</br> если вы сегодня продадите их то,</br> получите ${
        this[valuta].amount * this[valuta].course
      } грн.</p>`
    );
  },
};
cryptoWallet.show("btn");
document.write("<hr/>");

// 2 version----------------------

// 2 -----------------------------

// 3 -----------------------------
