function createStore() {
  let productsBackup = [];
  return {
    setProductsBackup: function (newProducts) {
      return (productsBackup = newProducts);
    },
    getProductsBackup: function () {
      return productsBackup;
    },
  };
}

const store = createStore();

function searchProducts(search) {
  const filterProducts = store
    .getProductsBackup()
    .filter(function (product, index, array) {
      return (
        product.title.toLowerCase().indexOf(search) >= 0 ||
        product.category.toLowerCase().indexOf(search) >= 0
      );
    });
  renderProducts(filterProducts);
}

function renderProducts(products) {
  let htmlStr = "";

  products.map(function (el) {
    return (htmlStr += `<div class="card col-lg-3 col=md-4 col-sm-6 col-xs-12 p-5">
      <img src=${el.image} class="card-img-top" alt="photo">
      <div class="card-body">
        <h5 class="card-title">${el.title}</h5>
        <p class="card-text">${el.category}</p>
        <a href="#" class="btn btn-primary">$${el.price}</a>
      </div>
    </div>`);
  });
  document.getElementById("products").innerHTML = htmlStr;
}

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then(function (data) {
    const filteredData = data.map(function (el) {
      return {
        category: el.category,
      };
    });
    //console.log(filteredData);
    const name = "category";
    const category = filteredData.map((e) => e[name]);
    //console.log(category);
    const filteredCategory = category.filter(
      (x, i) => category.indexOf(x) === i
    );
    //console.log(filteredCategory);

    let htmlSelect = `
    <select class="custom-select mb-4">
      <option>All</option>
      ${filteredCategory.reduce(function (acc, category) {
        acc += "<option>" + category + "</option>";
        return acc;
      }, "")}
    </select>`;

    document.querySelector("#mySelect").innerHTML = htmlSelect;
    //console.log(htmlSelect);

    store.setProductsBackup(data);
    renderProducts(data);
  });

document.querySelector("#search").onkeyup = function (e) {
  const searchValue = e.currentTarget.value.toLowerCase().trim();
  searchProducts(searchValue);
};
