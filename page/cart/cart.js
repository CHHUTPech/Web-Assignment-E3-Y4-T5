function removeProductFromCart(id){
    var productItem = JSON.parse(localStorage.getItem('productInCart'))
    let indexToRemove = productItem.findIndex(product => product.id == id);
  
    if (indexToRemove !== -1) {
      productItem.splice(indexToRemove, 1);
    }
    localStorage.setItem('productInCart', JSON.stringify(productItem))
    location.reload();
  }
  