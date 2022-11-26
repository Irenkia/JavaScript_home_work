window.onload = () => {
  let htmlTable = document.createElement("table");
  htmlTable.className = "table table-bordered table-striped";
  htmlTable.innerHTML = `<thead><tr>
  <th>Name</th>
  <th>Population</th>
  <th>Area</th>
  <th>Region</th>
  </tr></thead>
  <tbody></tbody>`;
  document.querySelector("#countries").append(htmlTable);
};

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
    console.log(searchValue, e.currentTarget);
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
