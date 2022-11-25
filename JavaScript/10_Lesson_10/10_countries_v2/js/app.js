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
  let htmlStr = "";
  countries.map();
};
fetch(`https://restcountries.com/v2/all`)
  .then((res) => res.json())
  .then((data) => {
    store.setCountries(data);
    renderCountries(data);
  });
