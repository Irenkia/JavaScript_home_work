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

function changeSelectCategory(someCategory) {
  const filterProductsCategory = store
    .getProductsBackup()
    .filter(function (product, index, array) {
      return product.category === someCategory;
    });
  renderProducts(filterProductsCategory);
}

var invocation = new XMLHttpRequest();
var url = "https://fakestoreapi.com/products";
var body = '<?xml version="1.0"?><person><name>Arun</name></person>';

function callOtherDomain() {
  if (invocation) {
    invocation.open("POST", url, true);
    invocation.setRequestHeader("X-PINGOTHER", "pingpong");
    invocation.setRequestHeader("Content-Type", "application/xml");
    invocation.onreadystatechange = handler;
    invocation.send(body);
  }
}

function getSelectProducts() {
  document.querySelector("#search").value = "";
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      // const filteredData = data.map(function (el) {
      //   return {
      //     image: el.image,
      //     title: el.title,
      //     category: el.category,
      //     price: el.price,
      //   };
      // });
      // console.log(filteredData);
      // productsBackup = filteredData;
      // renderProducts(filteredData);
      const filteredData = data.map(function (el) {
        return {
          category: el.category,
        };
      });
      console.log(filteredData);

      // const name = "category";
      // const category = filteredData.map((e) => e[name]);

      const category = [];
      for (i = 0; i < filteredData.length; i++) {
        category[i] = filteredData[i].category;
      }
      console.log(category);

      const filteredCategory = category.filter(
        (x, i) => category.indexOf(x) === i
      );
      console.log(filteredCategory);

      // let htmlSelect = `
      // <select class="custom-select mb-4">
      //   <option>All</option>
      //   ${filteredCategory.reduce(function (acc, category) {
      //     acc += "<option>" + category + "</option>";
      //     return acc;
      //   }, "")}
      // </select>`;
      let htmlSelect = `
      <select class="custom-select mb-4">
        <option>All</option>
        ${data.reduce(function (acc, product) {
          if (!acc.includes(product.category))
            acc += "<option>" + product.category + "</option>";
          return acc;
        }, "")}
      </select>`;

      document.querySelector("#mySelect").innerHTML = htmlSelect;
      console.log(htmlSelect);

      store.setProductsBackup(data);
      renderProducts(data);

      document.querySelector("#mySelect").addEventListener("change", myFoo());
    });
  // changeSelectCategory(filteredCategory)
  // return document.querySelector("#select") = selectMenu;
}

function myFoo() {
  // const changeSelect = document.querySelector(".custom-select");
  // const selectValues = changeSelect.filter
  //   .call(changeSelect.option, (option) => option.selected)
  //   .map((option) => option.text);
  const changeSelect = document.querySelector(".custom-select");
  // const productsSelectCategory = store.getProductsBackup();
  // const selectValues = changeSelect.addEventListener("click", (event) => {
  //   console.log(event.target);
  // });
  let someCategory = "";
  changeSelect.onchange = function (e) {
    console.log(changeSelect);
    console.log(e.target.value);
    someCategory = e.target.value;
    changeSelectCategory(someCategory);
    // for (let i = 1; i < changeSelect.length; i++) {
    //   someCategory = changeSelect[i];
    //   changeSelectCategory(someCategory);
    //   // renderProducts(someCategory);
    // }
  };
  // const productsSelectCategory = store
  //   .getProductsBackup()
  //   .filter(function (product, index, array) {
  //     return product.category == selectValues;
  //   });
  // renderProducts(productsSelectCategory);
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

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then(function (data) {
//     console.log(data);
//     // const filteredData = data.map(function (el) {
//     //   return {
//     //     image: el.image,
//     //     title: el.title,
//     //     category: el.category,
//     //     price: el.price,
//     //   };
//     // });
//     // console.log(filteredData);
//     // productsBackup = filteredData;
//     // renderProducts(filteredData);
//     const filteredData = data.map(function (el) {
//       return {
//         category: el.category,
//       };
//     });
//     console.log(filteredData);

//     // const name = "category";
//     // const category = filteredData.map((e) => e[name]);

//     const category = [];
//     for (i = 0; i < filteredData.length; i++) {
//       category[i] = filteredData[i].category;
//     }
//     console.log(category);

//     const filteredCategory = category.filter(
//       (x, i) => category.indexOf(x) === i
//     );
//     console.log(filteredCategory);

//     store.setProductsBackup(data);
//     renderProducts(data);
//   });

// const defaultSelect = "All";
// getSelect(defaultSelect);
// document.querySelector("#mySelect").value = defaultSelect;

// document.querySelector("#mySelect").oncklik = function (e) {
//   const select = e.currentTarget.value;
//   renderSelect(select);
// };

document.querySelector("#search").onkeyup = function (e) {
  const searchValue = e.currentTarget.value.toLowerCase().trim();
  searchProducts(searchValue);
};
getSelectProducts();
// function renderSelect(filteredCategory) {
//   let htmlSelect = "";
//   var sel = document.getElementById("mySelect").selectedIndex;
//   var options = document.getElementById("mySelect").options;
//   filteredCategory.map(function (el) {
//     return (htmlSelect += `<select><option>${defaultSelect}</option><option>${el[0]}</option><option>${el[1]}</option><option>${el[2]}</option><option>${el[3]}</option></select>`);
//   });
//   document.getElementById("select").innerHTML = htmlSelect;
// }
//-----------------------------------------------------------------------------
// моя проба : Uncaught TypeError: can't convert null to object

// function renderSelect(data) {
//   var selectElem = document.getElementById("mySelect");
//   selectElem.addEventListener("change", function () {
//     let index = selectElem.selectedIndex;
//     let value = selectElem.selectedValue;
//     if (value == data.category) {
//       renderProducts(data);
//     }
//   });
// }
//----------------------------------------------------------------------------
// Вешаем onclick на элемент из javascript-кода

// window.onload = function () {
//   //получаем идентификатор элемента
//   const changeSelect = document.querySelector(".custom-select");
//   //перебираем все найденные элементы и вешаем на них события
//   [].forEach.call(changeSelect, function (el) {
//     //вешаем событие
//     el.onclick = function (e) {
//       //производим действия
//       e.preventDefault();
//       const selectValues = [].filter
//         .call(changeSelect.option, (option) => option.selected)
//         .map((option) => option.text);
//     };
//   });
// }
// changeSelectCategory();
//---------------------------------------------------------------------
// Вешаем onclick на элемент из javascript-кода --- 2 varsion

// function changeSelectCategory(filteredCategory) {
//   //получаем идентификатор элемента
//   const changeSelect = document.querySelector(".custom-select");
//   //перебираем все найденные элементы и вешаем на них события
//   filteredCategory.forEach.call(changeSelect, function (el) {
//     //вешаем событие
//     el.onclick = function (e) {
//       //производим действия
//       e.preventDefault();
//       const selectValues = filteredCategory.filter
//         .call(changeSelect.option, (option) => option.selected)
//         .map((option) => option.text);
//     };
//   });
// }
