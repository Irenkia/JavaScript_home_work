window.onload = () => {
  let htmlTable = document.createElement("table");
  htmlTable.className = "table table-bordered table-striped";
  htmlTable.innerHTML =
    "<thead><tr><th>Name</th><th>Сc</th><th>Rate</th></tr></thead><tbody></tbody>";
  document.querySelector(".container").append(htmlTable);
};

// function renderTable() {
//   let htmlTable = document.createElement("table");
//   htmlTable.className = "table table-bordered table-striped";
//   htmlTable.innerHTML =
//     "<thead><tr><th>Name</th><th>Сc</th><th>Rate</th></tr></thead><tbody></tbody>";
//   document.querySelector(".container").append(htmlTable);
// }
function createStore() {
  let currenciesBackup = [];
  return {
    setCurrencies: (newCurrenciesBackup) =>
      (currenciesBackup = newCurrenciesBackup),
    getCurrencies: () => currenciesBackup,
  };
}
const store = createStore();

function renderCurrencies(carrency) {
  let htmlStr = carrency.reduce((acc, el) => {
    return (
      acc + `<tr><td>${el.name}</td><td>${el.cc}</td><td>${el.rate}</td></tr>`
    );
  }, "");
  document.querySelector("tbody").innerHTML = htmlStr;
}

document.querySelector("#currencies-search-btn").onclick = (e) => {
  console.log(e.target);
  let value = document.querySelector("#search").value;
  console.log(value);
  getCurrencies(value);
};

function getCurrencies() {
  // let url = date
  //   ? `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`
  //   : `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;
  fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
    .then((res) => res.json())
    .then((data) => {
      console.log("1 - ", data);
      let filteredCurrencies = data.map((carrency) => {
        return {
          name: carrency.txt,
          cc: carrency.cc,
          rate: carrency.rate,
        };
      });
      console.log("2 - ", filteredCurrencies);
      if (data.status === 404) {
        console.log("Error: ", error);
        let htmlNotFoud = document.createElement("div");
        htmlNotFoud.className = "text-center";
        htmlNotFoud.innerHTML = `<tr><td colspan='3' class="text-center"> No Items Found </td></tr>`;
        document.querySelector(".tbody").append(htmlNotFoud);
      }
      store.setCurrencies(data);
      renderCurrencies(filteredCurrencies);
    });
  //   .catch((error) => console.log("Error: ", error));
  // document.querySelector(
  //   ".container"
  // ).innerHTML = `<tr><td colspan='3' class="text-center"> No Items Found </td></tr>`;
}

getCurrencies();
