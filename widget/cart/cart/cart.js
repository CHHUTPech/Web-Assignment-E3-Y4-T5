export function cartFunction() {

  var productItem = JSON.parse(localStorage.getItem('productInCart'))
  var cartItem = document.querySelector('[fileName="cart-item"]');
  var newCartItem = "";
  var totalPrice = 0

  if (cartItem != null) {
    if(productItem!=null){
      
      for (let i = 0; i < productItem.length; i++) {
        cartItem.querySelector('[fileName="img"]').src = productItem[i].color.find(color=>color.id == productItem[i].addColor).photo;
        cartItem.querySelector('[fileName="link"]').href = "/page/product-details/product-details.html?id="+productItem[i].id;
        cartItem.querySelector('[fileName="name"]').innerHTML = productItem[i].name;
        cartItem.querySelector('[fileName="price"]').innerHTML ="$ " + productItem[i].price.toFixed(2);
        cartItem.querySelector('[fileName="color"]').innerHTML = "Color: "+ productItem[i].color.find(color=>color.id == productItem[i].addColor).name;
        cartItem.querySelector('[fileName="quantity"]').innerHTML = productItem[i].addQuantity;
        cartItem.querySelector('[fileName="total_price"]').innerHTML ="$ " + parseFloat(productItem[i].addQuantity*productItem[i].price).toFixed(2);
        cartItem.querySelector('.removeItem').setAttribute('onclick', 'removeProductFromCart('+productItem[i].id+')');


        newCartItem = newCartItem + cartItem.innerHTML
        totalPrice = totalPrice + parseFloat(productItem[i].addQuantity*productItem[i].price)
      }
      cartItem.innerHTML = newCartItem
      document.querySelector(".total_price").innerHTML ="$ "+ totalPrice.toFixed(2)
    }else{
      cartItem.innerHTML = ''
    }
  }
}


