window.ratesBackup = [];

function filterRates(searchValue) {
  var result = [];
  for (var rate of ratesBackup) {
    var rateName = rate.txt.toLowerCase();
    if (rateName.indexOf(searchValue) >= 0) {
      result.push(rate);
    }
  }
  renderRates(result);
}

function renderRates(rates) {
  var htmlStr = "";

  if (!rates.length) {
    htmlStr = `<tr><td  colspan="4" class="text-center"> No Items Found </td></tr>`;
    document.getElementById("rates").innerHTML = htmlStr;
    return;
  }

  for (var rate of rates) {
    htmlStr += `<tr><td>${rate.txt}</td><td>${rate.rate}</td></tr>`;
  }

  document.getElementById("rates").innerHTML = htmlStr;

  var trs = document.getElementsByTagName("tr");
  for (var item = 0; item < trs.length; item++) {
    var tr = trs[item];
    tr.onmouseenter = function (e) {
      e.currentTarget.classList.add("bg-warning");
    };

    tr.onmouseleave = function (e) {
      e.currentTarget.classList.remove("bg-warning");
    };
  }
}

fetch(
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221110&json"
)
  .then((res) => res.json())
  .then(function (data) {
    window.ratesBackup = data;
    renderRates(data);
  })
  .catch((error) => console.log("Error: ", error));

document.querySelector("#search").onkeyup = function (e) {
  var searchValue = e.currentTarget.value;
  filterRates(searchValue.trim().toLowerCase());
};
