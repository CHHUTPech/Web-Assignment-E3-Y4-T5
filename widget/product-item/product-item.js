export function productItemFunction(data) {
  fillItem(data);
}
function fillItem(data) {
  const productGrid = document.querySelector('[fieldName = "product-grid"]');
  let newProductItems = ''
  if (productGrid != null) {
    try {

      if (data) {
        for (var i = 0; i < data.length; i++) {
          productGrid.querySelector('[fieldName = "product-item"]').href = "/page/product-details/product-details.html?id="+ data[i].id;
          productGrid.querySelector('[fieldName = "item-img"]').src = data[i].photo[0];
          productGrid.querySelector('[fieldName = "item-name"]').innerHTML =data[i].name;
          productGrid.querySelector('[fieldName = "item-d-price"]').innerHTML ="$ "+ data[i].d_price;
          productGrid.querySelector('[fieldName = "item-price"]').innerHTML = "From $ "+ data[i].price;
          newProductItems = newProductItems + productGrid.innerHTML
        }
        productGrid.innerHTML = newProductItems

      } else {
        productGrid.innerHTML = ""
      }
    } catch (error) {
      console.error("Error in exampleUsage:", error);
    }
  }else{
    productGrid.innerHTML = ""
  }
}
