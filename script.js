// const bars = document.querySelector( '.bars' )
// const menu_bg = document.querySelector( '.side-bars' )
// const menu = document.querySelector( 'aside' )
// const logo = document.querySelector( '.logo' )
// const bags = document.querySelector( '.bags' )
// const bagsMenu = document.querySelector( '.bags-menu' )
// const shoes = document.querySelector( '.shoes' )
// const shoesMenu = document.querySelector( '.shoes-menu' )
// const lookbook = document.querySelector( '.lookbook' )

// let barsCondition = 0
// let bagsCondition = 0
// let shoesCondition = 0

// const closeBagsDropdown = () => {
//     bags.children[0].style.transform = 'rotate(0)'
//     bags.style.textDecoration = 'none'
//     bagsMenu.removeAttribute( 'id', 'dropdown' )
//     bagsCondition = 0
// }

// const closeShoesDropdown = () => {
//     shoes.children[0].style.transform = 'rotate(0)'
//     shoes.style.textDecoration = 'none'
//     shoesMenu.removeAttribute( 'id', 'dropdown' )
//     shoesCondition = 0
// }

// const bagsDropdown = () => {
//     if ( bagsCondition === 0 ) {
//         bags.children[0].style.transform = 'rotate(180deg)'
//         bags.style.textDecoration = 'underline'
//         bagsMenu.setAttribute( 'id', 'dropdown' )
//         closeShoesDropdown()
//         bagsCondition = 1
//     }
//     else closeBagsDropdown()
// }

// const shoesDropdown = () => {
//     if ( shoesCondition === 0 ) {
//         shoes.children[0].style.transform = 'rotate(180deg)'
//         shoes.style.textDecoration = 'underline'
//         shoesMenu.setAttribute( 'id', 'dropdown' )
//         closeBagsDropdown()
//         shoesCondition = 1
//     }
//     else closeShoesDropdown()
// }

// bars.addEventListener( "click", () => {
//     if ( barsCondition++ === 0 )
//     {
//         menu_bg.style.width = '100%'
//         menu.style.left = '0px'
//     }
//     else {
//         barsCondition = 0
//         menu_bg.style.width = '0'
//         menu.style.left = '-350px'
//     }
// })

// logo.addEventListener( "click", () => {
//     closeBagsDropdown()
//     closeShoesDropdown()
// })

// bags.addEventListener( "click", () => {
//     bagsDropdown()
// })

// shoes.addEventListener( "click", () => {
//     shoesDropdown()
// })

// lookbook.addEventListener( "click", () => {
//     closeBagsDropdown()
//     closeShoesDropdown()
// })


const menuBtn = document.querySelector('.app-nav-bar-right-btn')
const appSlider = document.querySelector('.app-slider')
const appSliderMenu = document.querySelector('.app-slider-menu')
const appSliderMenuItems = document.querySelectorAll('.app-slider-menu-item');
const searchBtn = document.querySelector('.search-btn')
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
    item.addEventListener('click', function (event) {
        const title = item.querySelector('.app-slider-menu-item-content-title').textContent;
        console.log('Clicked on: ', title);
    });
});


// appSlider.addEventListener('click',()=>{
//     alert('do')
// })



