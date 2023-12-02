function removeProductFromCart(id) {
  var productItem = JSON.parse(localStorage.getItem("productInCart"));
  let indexToRemove = productItem.findIndex((product) => product.id == id);

  if (indexToRemove !== -1) {
    productItem.splice(indexToRemove, 1);
  }
  localStorage.setItem("productInCart", JSON.stringify(productItem));
  location.reload();
}

function minusQuantity(id) {
  const quantityElement = document.getElementById("quantity" + id);
  let currentQuantity = parseInt(quantityElement.innerHTML);

  if (currentQuantity > 0) {
    quantityElement.innerHTML = currentQuantity - 1;
  }
}
function plusQuantity(id) {
  const quantityElement = document.getElementById("quantity" + id);
  let currentQuantity = parseInt(quantityElement.innerHTML);

  quantityElement.innerHTML = currentQuantity + 1;
}
