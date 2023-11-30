export function productItemFunction(data) {
  var url = window.location.href;
  var params = new URLSearchParams(new URL(url).search);
  var categery = params.get("cartegory");
  var id = params.get("id");
  var availability = params.get("availability");
  var color = params.get("color");
  var sort = params.get("sort");
  if (categery == null) {
    const shuffledArray = data.sort(() => Math.random() - 0.5);
    let maxLength = 0
    if(id!=null){
      maxLength = 4;
    }else maxLength = 8;

    data = shuffledArray.slice(
      0,
      Math.min(data.length, maxLength)
    );
  }
  else if(categery.toLowerCase() =='shop all'){
  }
  else{
    data = data.filter(product=> product.cartegory.toLowerCase() == categery.toLowerCase())
  }
  fillItem(data);
}

function fillItem(data) {
  const productGrid = document.querySelector('[fieldName = "product-grid"]');
  let newProductItems = "";
  if (productGrid != null) {
    try {
      if (data) {
        for (var i = 0; i < data.length; i++) {
          productGrid.querySelector('[fieldName = "product-item"]').href =
            "/page/product-details/product-details.html?id=" + data[i].id;
          productGrid.querySelector('[fieldName = "item-img"]').src =
            data[i].photo[0];
          productGrid.querySelector('[fieldName = "item-name"]').innerHTML =
            data[i].name;
          productGrid.querySelector('[fieldName = "item-d-price"]').innerHTML =
            "$ " + data[i].d_price;
          productGrid.querySelector('[fieldName = "item-price"]').innerHTML =
            "From $ " + data[i].price;
          newProductItems = newProductItems + productGrid.innerHTML;
        }
        productGrid.innerHTML = newProductItems;
      } else {
        productGrid.innerHTML = "";
      }
    } catch (error) {
      console.error("Error in exampleUsage:", error);
    }
  }else{
  }
}

