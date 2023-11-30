import * as global from "../../global.js"

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; elmnt.style.width = "100%" }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
    layoutFunction()
    addContent()
    
}
function addContent(){
    var appContent = document.querySelector('.app-content');
    var addContent = document.querySelector('.add-content');
    appContent.innerHTML = addContent.innerHTML;
    addContent.innerHTML = ''
    global.globalFunction()

    setTimeout(closeLoading, 700);
    
}
function layoutFunction() {
    const menuBtn = document.querySelector('.app-nav-bar-right-btn')
    const appSlider = document.querySelector('.app-slider')
    const appSliderMenu = document.querySelector('.app-slider-menu')
    const appSliderMenuItems = document.querySelectorAll('.app-slider-menu-item');
    const backBtn = document.querySelectorAll('.back-btn');
    const searchBtn = document.querySelector('.search-btn')
    const searchBtn1 = document.querySelector('.searchBtn')
    const closeSearchBtn = document.querySelector('.close-btn')
    const appNavBarAction = document.querySelector('.app-nav-bar-action')

    menuBtn.addEventListener('click', () => {
        appSlider.classList.toggle('open-slider')
        menuBtn.classList.toggle('fa-bars')
        menuBtn.classList.toggle('fa-xmark')
    })

    searchBtn.addEventListener('click', () => {
        appNavBarAction.classList.toggle('open-search-bar')
        if (appSlider.classList.contains('open-slider')) {
            appSlider.classList.toggle('open-slider')
            menuBtn.classList.toggle('fa-bars')
            menuBtn.classList.toggle('fa-xmark')
        }
    })

    closeSearchBtn.addEventListener('click', () => {
        appNavBarAction.classList.toggle('open-search-bar')
    })

    appSliderMenuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            appSliderMenuItems.forEach(otherItem => {
                if (item != otherItem && otherItem.classList.contains('open-slider-item')) {
                    otherItem.classList.remove('open-slider-item');
                }
            });

            item.classList.toggle('open-slider-item');
        });
    });

    backBtn.forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();
            appSliderMenuItems.forEach(otherItem => {
                otherItem.classList.remove('open-slider-item')
            });
        });
    });
    searchBtn1.addEventListener('click',()=>{
        window.location.href = "/page/shop/shop.html?name="+document.getElementById('searchInput').value
    })

}

function closeLoading(){
    document.querySelector('.loading').style.display = 'none'
}

includeHTML();

