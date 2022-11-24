const divCountries = document.querySelector("#countries");
const table = document.createElement("table");
table.className = "table table-bordered table-striped";
divCountries.appendChild(table);
const thead = document.createElement("thead");
table.appendChild(thead);
const tbody = document.createElement("tbody");
table.appendChild(tbody);

const row_1 = document.createElement("tr");
const heading_1 = document.createElement("th");
heading_1.innerHTML = "Name";
const heading_2 = document.createElement("th");
heading_2.innerHTML = "Population";
const heading_3 = document.createElement("th");
heading_3.innerHTML = "Area";
const heading_4 = document.createElement("th");
heading_4.innerHTML = "Region";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);

function createStore() {
  let countriesBackup = [];
  return {
    setCountriesBackup: (newCountriesBackup) =>
      (countriesBackup = newCountriesBackup),
    getCountriesBackup: () => countriesBackup,
  };
}
const store = createStore();

let invocation = new XMLHttpRequest();
const url = "https://fakestoreapi.com/products";
let body = '<?xml version="1.0"?><person><name>Arun</name></person>';

function callOtherDomain() {
  if (invocation) {
    invocation.open("POST", url, true);
    invocation.setRequestHeader("X-PINGOTHER", "pingpong");
    invocation.setRequestHeader("Content-Type", "application/xml");
    invocation.onreadystatechange = handler;
    invocation.send(body);
  }
}

function renderCountries(countries) {
  let htmlStr = "";
  countries.map(
    (el) =>
      (htmlStr += `<tr><td>${el.name}</td><td>${el.population}</td><td>${el.area}</td><td>${el.region}</td></tr>`)
  );
  document.querySelector("tbody").innerHTML = htmlStr;
}

function renderEmpty() {
  let htmlStr = "";
  htmlStr += `<tr><td colspan='4' class="text-center"> No Items Found </td></tr>`;
  document.querySelector("tbody").innerHTML = htmlStr;
}

function getAllCountries() {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => {
      const filteredData = data.map((el) => {
        return {
          name: el.name,
          population: el.population,
          area: el.area,
          region: el.region,
        };
      });
      store.setCountriesBackup(filteredData);
      //console.log(filteredData);
      renderCountries(filteredData);
    });
}

function getNameCountries(nameCountrie) {
  fetch(`https://restcountries.com/v2/name/${nameCountrie}`)
    .then((res) => res.json())
    .then((data) => {
      const filteredData = data.map((el) => {
        return {
          name: el.name,
          population: el.population,
          area: el.area,
          region: el.region,
        };
      });
      console.log("1 - ", filteredData);
      store.setCountriesBackup(filteredData);
      renderCountries(filteredData);
    })
    .catch((error) => {
      console.error("Error:", error);
      renderEmpty();
    });
}

document.querySelector("#search").addEventListener("change", bindingToButton());

document
  .querySelector("#btn_search")
  .addEventListener("click", searchByButton());

document.querySelector("#btn_clear").addEventListener("click", clearSearch());

function bindingToButton() {
  const input = document.querySelector("#search");
  input.onkeyup = (e) => {
    const searchValue = e.currentTarget.value.toLowerCase().trim();
    console.log(searchValue);
    searchByButton(searchValue);
  };
}

function searchByButton(searchValue) {
  const btn = document.querySelector("#btn_search");
  btn.onclick = () => {
    console.log("searchValue :", searchValue);
    getNameCountries(searchValue);
  };
}

function clearSearch() {
  const btn = document.querySelector("#btn_clear");
  btn.onclick = () => {
    const input = document.querySelector("#search");
    input.value = "";
    getAllCountries();
  };
}

getAllCountries();
