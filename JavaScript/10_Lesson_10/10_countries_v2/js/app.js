// window.addEventListener("DOMContentLoaded", () => {
//   let htmlTable = document.createElement("table");
//   htmlTable.className = "table table-bordered table-striped countries-table";
//   htmlTable.innerHTML = `<thead id='thead'><tr>
//   <th>Name</th>
//   <th>Population</th>
//   <th>Area</th>
//   <th>Region</th>
//   </tr></thead>
//   <tbody></tbody>`;
//   document.querySelector(".countries").append(htmlTable);
// });

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

const createStore = () => {
  let countriesBackup = [];
  return {
    setCountries: (newCountries) => (countriesBackup = newCountries),
    getCountries: () => countriesBackup,
  };
};
const store = createStore();

const renderCountries = (countries) => {
  let htmlStr = countries.reduce((acc, el) => {
    return (
      acc +
      `<tr><td>${el.name}</td><td>${el.population}</td><td>${el.area}</td><td>${el.region}</td></tr>`
    );
  }, "");
  document.querySelector("tbody").innerHTML = htmlStr;
};

fetch(`https://restcountries.com/v2/all`)
  .then((res) => res.json())
  .then((data) => {
    store.setCountries(data);
    renderCountries(data);
  });

// document.querySelector("thead").onclick = (e) => {
//   e.target.classList.toggle("bg-warning");
//   console.log(e.target.innerHTML, e.target);
// };
document.querySelector("thead").onclick = (e) => {
  // if (document.querySelector("bg-info")) {
  //   document.querySelector("bg-info").remove();
  // }
  const numberFieldList = ["population", "area"];
  let field = e.target.getAttribute("data-sort");
  console.log(e.target.innerHTML, e.target);
  console.log(field.innerHTML);
  const countriesBackup = store.getCountries();
  countriesBackup.sort((countryA, countryB) => {
    if (numberFieldList.includes(field)) {
      return countryB[field] - countryA[field];
    }
    return countryA[field] > countryB[field] ? 1 : -1;
  });
  renderCountries(countriesBackup);
  document
    .querySelector(`#thead [data-sort="${field}"]`)
    .classList.toggle("bg-info");
};
