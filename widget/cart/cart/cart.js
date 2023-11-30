export function cartFunction() {
    
  var productItem = JSON.parse(localStorage.getItem('productInCart'))
  var cartItem = document.querySelector('[fileName="cart-item"]');
  var newCartItem = "";
  var quantity = 0
  var TotalQuantity = 0
  // console.log(productItem)
  if (cartItem != null&&productItem) {
    for (let i = 0; i < productItem.length; i++) {
      cartItem.querySelector('[fileName="img"]').src = "/assets/products/mlouye-art-deco-cyclamen-1.jpg";
      cartItem.querySelector('[fileName="link"]').href = "/page/product-details/product-details.html?id="+productItem[i].id;
      cartItem.querySelector('[fileName="name"]').innerHTML = productItem[i].name;
      cartItem.querySelector('[fileName="price"]').innerHTML ="$ " + productItem[i].price;
      cartItem.querySelector('[fileName="color"]').innerHTML = "Color: "+ productItem[i].color[1].name;
      cartItem.querySelector('[fileName="quantity"]').innerHTML = quantity;
      cartItem.querySelector('[fileName="total_price"]').innerHTML ="$ " + TotalQuantity;
      newCartItem = newCartItem + cartItem.innerHTML
    }
    cartItem.innerHTML = newCartItem
  }
}

