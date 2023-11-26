import * as productDetail from "./page/product-details/product-details.js"
import * as Shop from "./page/shop/shop.js"
import * as productItem from "./widget/product-item/product-item.js"
import product  from "./data/product.js"

export default product; 
export function globalFunction(){
  Shop.pageShopFunction()
  productDetail.productDetails()
  productItem.productItemFunction(product)
}
