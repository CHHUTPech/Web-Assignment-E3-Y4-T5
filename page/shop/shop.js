import product  from '../../global.js'
export function pageShopFunction() {
  var filterInputItem = document.querySelectorAll(".filter-input-item");
  var openFilterBtn = document.querySelector(".filter-header");
  var filterInput = document.querySelector(".filter-input");
  var closeFilterBtn = document.querySelector(".close-filter-btn");
  if (openFilterBtn != null) {
    filterInputItem.forEach((item) => {
      item
        .querySelector(".filter-input-item-title")
        .addEventListener("click", () => {
          filterInputItem.forEach((otherItem) => {
            if (
              item !== otherItem &&
              otherItem.classList.contains("open-input")
            ) {
              otherItem.classList.remove("open-input");
            }
          });

          item.classList.toggle("open-input");
        });
      if (item.querySelector(".open-input-menu") != null) {
        item.querySelector(".open-input-menu").addEventListener("click", () => {
          filterInputItem.forEach((otherItem) => {
            if (
              item !== otherItem &&
              otherItem.classList.contains("open-input")
            ) {
              otherItem.classList.remove("open-input");
            }
          });

          item.classList.toggle("open-input");
        });
      }
    });

    closeFilterBtn.addEventListener("click", () => {
      filterInput.classList.toggle("open-input-filter");
    });
    openFilterBtn.addEventListener("click", () => {
      filterInput.classList.toggle("open-input-filter");
    });

    var url = window.location.href;
    var params = new URLSearchParams(new URL(url).search);
    var categery = params.get("cartegory");
    if(categery!=null){
      var url = window.location.href;
      var params = new URLSearchParams(new URL(url).search);
      document.querySelector('#title').innerHTML = params.get("cartegory")
      document.querySelectorAll('#countProduct').forEach((item)=>{
        item.innerText = product.length + ' products'
      })
      console.log(document.querySelector('#countProduct').innerHTML)
    }
  }

}
