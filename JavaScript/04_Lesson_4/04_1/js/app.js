console.table(countries);
var htmlString = "";
for (var countrie of countries) {
  htmlString += `<tr>
    <td class="text-center">${countrie.name.official}</td>
    <td class="text-center">${countrie.region}</td>
    <td class="text-center">${countrie.population}</td>
    <td class="d-flex justify-content-center"><img src=${countrie.flags.png} class="img-thumbnail w-25"></img></td>
  </td>`;
}
document.getElementById("countries").innerHTML = htmlString;
