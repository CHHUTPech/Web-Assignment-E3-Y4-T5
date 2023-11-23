
function addContent(){
    var appContent = document.querySelector('.app-content');
    var addContent = document.querySelector('.add-content');
    appContent.innerHTML = addContent.innerHTML;
    addContent.innerHTML = ''
    productDetails()
    expands()
}
function productDetails(){
    var radioButtons = document.querySelectorAll('input[type=radio][name=color]');
    radioButtons.forEach(function(radio) {
        radio.addEventListener('change', function() {
            radioButtons.forEach(item=>{
                changeColor(item);
            })
        });
    });

    var Quantity = 0;
    var quan = document.querySelector('.quantity')
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

function expands() {
    var expands = document.querySelectorAll(".expand");
    if (expands != null) {
      expands.forEach(function (expand) {
        console.log(expand)
        expand.querySelector(".expand-header").addEventListener("click", () => {
            expand.classList.toggle("open");
        });
      });
    }
  }
