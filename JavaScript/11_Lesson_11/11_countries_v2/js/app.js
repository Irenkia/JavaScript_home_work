// window.onload = () => {
//   let htmlTable = document.createElement("table");
//   htmlTable.className = "table table-bordered table-striped";
//   htmlTable.innerHTML =
//     "<thead><tr><th>Name</th><th>Capital</th><th>Population</th><th>Region</th></tr></thead><tbody></tbody>";
//   document.querySelector(".container").append(htmlTable);
// };

function renderTable() {
  let htmlTable = document.createElement("table");
  htmlTable.className = "table table-bordered table-striped";
  htmlTable.innerHTML =
    "<thead><tr><th>Name</th><th>Сc</th><th>Rate</th></tr></thead><tbody></tbody>";
  document.querySelector(".container").append(htmlTable);
}

function renderCountries(country) {
  renderTable();
  let htmlStr = country.reduce((acc, el) => {
    return (
      acc +
      `<tr><td>${el.name}</td><td>${el.capital}</td><td>${el.population}</td><td>${el.region}</td></tr>`
    );
  }, "");
  document.querySelector("tbody").innerHTML = htmlStr;
  // console.log(new Date().getTime() - a, "onload()");
  console.log(new Date().getTime() - a, "renderTable()");
}

document.querySelector("#countries-search-btn").onclick = (e) => {
  console.log("3 - ", e.target);
  let value = document.querySelector("#search").value;
  console.log("4 - ", value);
  getCountries(value);
};

document.querySelector("#countries-clear-btn").onclick = (e) => {
  document.querySelector("#search").value = "";
  getCountries();
};

function getCountries(value) {
  // let url = "";
  // if (value) {
  //   url = `https://restcountries.com/v2/name/` + value;
  // } else {
  //   url = `https://restcountries.com/v2/all`;
  // }
  let url = value
    ? `https://restcountries.com/v2/name/` + value
    : `https://restcountries.com/v2/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("1 - ", data);
      let filteredCountries = data.map((country) => {
        return {
          name: country.name,
          capital: country.capital,
          population: country.population,
          region: country.region,
        };
      });
      console.log("2 - ", filteredCountries);
      renderCountries(filteredCountries);
    });
}
let a = new Date().getTime();
getCountries();
