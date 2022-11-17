window.ratesBackup = [];

function filterRates(searchValue) {
  var result = [];
  for (var rate of window.ratesBackup) {
    var rateName = rate.txt.toLowerCase();
    var rateCc = rate.cc.toLowerCase();
    if (
      rateName.indexOf(searchValue) >= 0 ||
      rateCc.indexOf(searchValue) >= 0
    ) {
      result.push(rate);
    }
  }
  renderRates(result);
}

function renderRates(rates) {
  var htmlStr = "";

  if (!rates.length) {
    htmlStr += `<tr><td colspan='3' class="text-center"> No Items Found </td></tr>`;
  }

  for (var rate of rates) {
    htmlStr += `<tr><td>${rate.txt}</td><td>${rate.cc}</td><td>${rate.rate}</td></tr>`;
  }
  document.getElementById("rates").innerHTML = htmlStr;

  var trs = document.getElementsByTagName("tr");
  for (var i = 0; i < trs.length; i++) {
    var tr = trs[i];
    tr.onmouseenter = function (e) {
      e.currentTarget.classList.add("bg-warning");
    };
    tr.onmouseleave = function (e) {
      e.currentTarget.classList.remove("bg-warning");
    };
  }
}

function getRates(date) {
  document.querySelector("#search").value = "";
  fetch(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`
  )
    .then((res) => res.json())
    .then(function (data) {
      window.ratesBackup = data;
      renderRates(data);
    });
}

var currentDate = "2022-11-15";
getRates(currentDate.replaceAll("-", ""));
document.querySelector("#search-date").value = currentDate;

document.querySelector("#search-date").onchange = function (e) {
  var date = e.currentTarget.value.split("-").join("");
  getRates(date);
};

var search = document.querySelector("#search");
search.onkeyup = function (e) {
  var searchValue = e.currentTarget.value;
  filterRates(searchValue.trim().toLowerCase());
};
