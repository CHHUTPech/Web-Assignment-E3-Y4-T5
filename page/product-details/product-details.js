import product from "../../global.js";
export function productDetails() {

    var productDetail = getItemDetail();
    var Quantity = 1;
    var color = '';
    var quan = document.querySelector('.quantity')

    if (productDetail != null) {
        document.querySelector('[fileName = "main-img"]').src = productDetail.photo[0]

        let newGroupImg = ''
        const groupImg = document.querySelector('[fileName = "group-img"]')
        for (let i = 0; i < productDetail.photo.length; i++) {
            groupImg.querySelector('[fileName = "img"]').src = productDetail.photo[i]
            newGroupImg = newGroupImg + groupImg.innerHTML
        }
        groupImg.innerHTML = newGroupImg

        document.querySelector('[fileName="product-name"]').innerHTML = productDetail.name
        document.querySelector('[fileName="product-price"]').innerHTML = '$ ' + productDetail.price.toFixed(2)

        const groupColor = document.querySelector('[fileName = "group-color"]')
        let newGroupColor = ''
        for (let i = 0; i < productDetail.color.length; i++) {
            groupColor.querySelector('[fileName="color-item-input"]').value = productDetail.color[i].name
            groupColor.querySelector('[fileName="color-item-input"]').id = productDetail.color[i].id
            groupColor.querySelector('[fileName="color-item-name"]').innerHTML = productDetail.color[i].name
            groupColor.querySelector('[fileName="color-item-name"]').htmlFor = productDetail.color[i].id
            groupColor.querySelector('[fileName="color-item-name"]').id = productDetail.color[i].id + 'Label'
            newGroupColor = newGroupColor + groupColor.innerHTML
        }
        groupColor.innerHTML = newGroupColor

        document.querySelector('[fileName="product-description"]').innerHTML = productDetail.description

        const productExpandItem = document.querySelector('[fileName = "product-expand-item"]')
        let newproductExpandItem = ''
        for (let i = 0; i < productDetail.details.length; i++) {
            productExpandItem.querySelector('[fileName="product-expand-name"]').innerHTML = productDetail.details[i].title
            productExpandItem.querySelector('[fileName="product-expand-description"]').innerHTML = productDetail.details[i].des
            // productExpandItem.querySelector('[fileName="color-item-name"]').innerHTML = productDetail.color[i].name
            newproductExpandItem = newproductExpandItem + productExpandItem.innerHTML
        }
        productExpandItem.innerHTML = newproductExpandItem

        var radioButtons = document.querySelectorAll('input[type=radio][name=color]');
        if (radioButtons != null) {

            radioButtons.forEach(function (radio) {
                radio.addEventListener('change', function () {
                    radioButtons.forEach(item => {
                        changeColor(item);
                    })
                    document.querySelector('[fileName = "main-img"]').src = productDetail.color.find(color => color.id == radio.getAttribute('id')).photo[0]
                    color = radio.getAttribute('id')
                });
            });
        }
    }

    if (quan != null) {
        quan.innerHTML = Quantity
        document.querySelector('.q-minus').addEventListener('click', () => {
            if (Quantity) Quantity = Quantity - 1
            quan.innerHTML = Quantity
        })
        document.querySelector('.q-plus').addEventListener('click', () => {
            Quantity = Quantity + 1
            quan.innerHTML = Quantity
        })
    }

    var addToCart = document.querySelector('.addToCart')
    if (addToCart) {
        addToCart.addEventListener('click', () => addProductToCart(Quantity, color))
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

function getItemDetail() {
    var url = window.location.href;
    var params = new URLSearchParams(new URL(url).search);
    var productId = params.get('id');

    return product.find(product => product.id == productId);
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



var productItemInCart = []
function addProductToCart(quan, color) {
    if (color == '') {
        document.getElementById('failedAlert').style.display = 'flex'
        document.getElementById('failedAlertText').innerHTML = 'Please select a color!'
        setTimeout(function () {
            document.getElementById('failedAlert').style.display = 'none';
        }, 900);
        return
    }
    if (JSON.parse(localStorage.getItem('productInCart'))) {
        productItemInCart = JSON.parse(localStorage.getItem('productInCart'))
    }
    if (getItemDetail()) {
        var pd = getItemDetail();
        if (!productItemInCart.find(product => product.id == pd.id)) {
            pd.addQuantity = quan
            pd.addColor = color
            productItemInCart.push(pd)
            document.getElementById('successAlert').style.display = 'flex'
            setTimeout(function () {
                document.getElementById('successAlert').style.display = 'none';
            }, 900);
        } else {
            document.getElementById('failedAlert').style.display = 'flex'
            document.getElementById('failedAlertText').innerHTML = 'Product already in cart!'
            setTimeout(function () {
                document.getElementById('failedAlert').style.display = 'none';
            }, 900);
        }
    }
    if (productItemInCart) {
        localStorage.setItem('productInCart', JSON.stringify(productItemInCart));
    }
}
