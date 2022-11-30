// window.onload = () => {
//   let htmlTable = document.createElement("table");
//   htmlTable.className = "table table-bordered table-striped";
//   htmlTable.innerHTML =
//     "<thead><tr><th>Name</th><th>Сc</th><th>Rate</th></tr></thead><tbody></tbody>";
//   document.querySelector(".container").append(htmlTable);
// };

function renderTable() {
  let htmlTable = document.createElement("table");
  htmlTable.className = "table table-bordered table-striped";
  htmlTable.innerHTML =
    "<thead><tr><th>Name</th><th>Сc</th><th>Rate</th></tr></thead><tbody></tbody>";
  document.querySelector(".container").append(htmlTable);
}

function renderCurrencies(carrency) {
  renderTable();
  let htmlStr = carrency.reduce((acc, el) => {
    return (
      acc + `<tr><td>${el.name}</td><td>${el.cc}</td><td>${el.rate}</td></tr>`
    );
  }, "");
  document.querySelector("tbody").innerHTML = htmlStr;
}

document.querySelector("#countries-search-btn").onclick = (e) => {
  console.log(e.target);
  let value = document.querySelector("#search").value;
  console.log(value);
  getCurrencies(value);
};

function getCurrencies(value) {
  fetch(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20200302&json`
  )
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
      renderCurrencies(filteredCurrencies);
    });
}
getCurrencies();
