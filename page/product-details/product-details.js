import product from "../../global.js";
export function productDetails(){
   
    var productDetail = getItemDetail();
    var Quantity = 0;
    var quan = document.querySelector('.quantity')

    if(productDetail != null){
        document.querySelector('[fileName = "main-img"]').src = productDetail.photo[0]
        
        let newGroupImg = ''
        const groupImg = document.querySelector('[fileName = "group-img"]')
        for(let i=0; i< productDetail.photo.length;i++){
            groupImg.querySelector('[fileName = "img"]').src = productDetail.photo[i]
            newGroupImg = newGroupImg + groupImg.innerHTML
        }
        groupImg.innerHTML = newGroupImg

        document.querySelector('[fileName="product-name"]').innerHTML = productDetail.name
        document.querySelector('[fileName="product-price"]').innerHTML ='$ ' + productDetail.price

        const groupColor = document.querySelector('[fileName = "group-color"]')
        let newGroupColor = ''
        for(let i=0;i< productDetail.color.length;i++){
            groupColor.querySelector('[fileName="color-item-input"]').value = productDetail.color[i].name
            groupColor.querySelector('[fileName="color-item-input"]').id = productDetail.color[i].id
            groupColor.querySelector('[fileName="color-item-name"]').innerHTML = productDetail.color[i].name
            groupColor.querySelector('[fileName="color-item-name"]').htmlFor = productDetail.color[i].id
            groupColor.querySelector('[fileName="color-item-name"]').id = productDetail.color[i].id +'Label'
            newGroupColor = newGroupColor + groupColor.innerHTML
        }
        groupColor.innerHTML = newGroupColor

        document.querySelector('[fileName="product-description"]').innerHTML = productDetail.description

        const productExpandItem = document.querySelector('[fileName = "product-expand-item"]')
        let newproductExpandItem = ''
        for(let i=0;i< productDetail.details.length;i++){
            productExpandItem.querySelector('[fileName="product-expand-name"]').innerHTML = productDetail.details[i].title
            productExpandItem.querySelector('[fileName="product-expand-description"]').innerHTML = productDetail.details[i].des
            // productExpandItem.querySelector('[fileName="color-item-name"]').innerHTML = productDetail.color[i].name
            newproductExpandItem = newproductExpandItem + productExpandItem.innerHTML
        }
        productExpandItem.innerHTML = newproductExpandItem

        var radioButtons = document.querySelectorAll('input[type=radio][name=color]');
        if(radioButtons!=null){

            radioButtons.forEach(function(radio) {
                radio.addEventListener('change', function() {
                    radioButtons.forEach(item=>{
                        changeColor(item);
                    })
                    document.querySelector('[fileName = "main-img"]').src = productDetail.color.find(product=> product.id == radio.getAttribute('id')).photo[0]
                });
            });
        }
    }

    

    if(quan!=null){
        quan.innerHTML =  Quantity
        document.querySelector('.q-minus').addEventListener('click',()=>{
            if(Quantity) Quantity = Quantity - 1
            quan.innerHTML =  Quantity
        })
        document.querySelector('.q-plus').addEventListener('click',()=>{
            Quantity = Quantity + 1
            quan.innerHTML =  Quantity
        })
    }
    expands()
}
function changeColor(color) {
    color = color.getAttribute('id')
    var label = document.getElementById(color + 'Label');
    var input = document.getElementById(color);

    if (input.checked) {
        label.style.background = "black";
        label.style.color = "white";
    } else {
        label.style.background = "";
        label.style.color = "";
    }
}

function getItemDetail(){
    var url = window.location.href;
    var params = new URLSearchParams(new URL(url).search);
    var productId = params.get('id');

    return product.find(product=> product.id == productId);
}

function expands() {
    var expands = document.querySelectorAll(".expand");
    if (expands != null) {
      expands.forEach(function (expand) {
        expand.querySelector(".expand-header").addEventListener("click", () => {
            expand.classList.toggle("open");
        });
      });
    }
}
