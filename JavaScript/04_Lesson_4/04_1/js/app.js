console.table(countries);
function getCountries(countries) {
  var htmlString = "";
  for (var countrie of countries) {
    htmlString += `<tr>
    <td class="text-center">${countrie.name.official}</td>
    <td class="text-center">${countrie.region}</td>
    <td class="text-center">${countrie.population}</td>
    <td class="d-flex justify-content-center"><img src=${countrie.flags.png} alt="flag" class="img-thumbnail w-25"></img></td>
  </td>`;
  }
  document.getElementById("countries").innerHTML = htmlString;
}
getCountries(countries);
