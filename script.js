const bars = document.querySelector( '.bars' )
const menu_bg = document.querySelector( '.side-bars' )
const menu = document.querySelector( 'aside' )
const logo = document.querySelector( '.logo' )
const bags = document.querySelector( '.bags' )
const bagsMenu = document.querySelector( '.bags-menu' )
const shoes = document.querySelector( '.shoes' )
const shoesMenu = document.querySelector( '.shoes-menu' )
const lookbook = document.querySelector( '.lookbook' )

let barsCondition = 0
let bagsCondition = 0
let shoesCondition = 0

const closeBagsDropdown = () => {
    bags.children[0].style.transform = 'rotate(0)'
    bags.style.textDecoration = 'none'
    bagsMenu.removeAttribute( 'id', 'dropdown' )
    bagsCondition = 0
}

const closeShoesDropdown = () => {
    shoes.children[0].style.transform = 'rotate(0)'
    shoes.style.textDecoration = 'none'
    shoesMenu.removeAttribute( 'id', 'dropdown' )
    shoesCondition = 0
}

const bagsDropdown = () => {
    if ( bagsCondition === 0 ) {
        bags.children[0].style.transform = 'rotate(180deg)'
        bags.style.textDecoration = 'underline'
        bagsMenu.setAttribute( 'id', 'dropdown' )
        closeShoesDropdown()
        bagsCondition = 1
    }
    else closeBagsDropdown()
}

const shoesDropdown = () => {
    if ( shoesCondition === 0 ) {
        shoes.children[0].style.transform = 'rotate(180deg)'
        shoes.style.textDecoration = 'underline'
        shoesMenu.setAttribute( 'id', 'dropdown' )
        closeBagsDropdown()
        shoesCondition = 1
    }
    else closeShoesDropdown()
}

bars.addEventListener( "click", () => {
    if ( barsCondition++ === 0 )
    {
        menu_bg.style.width = '100%'
        menu.style.left = '0px'
    }
    else {
        barsCondition = 0
        menu_bg.style.width = '0'
        menu.style.left = '-350px'
    }
})

logo.addEventListener( "click", () => {
    closeBagsDropdown()
    closeShoesDropdown()
})

bags.addEventListener( "click", () => {
    bagsDropdown()
})

shoes.addEventListener( "click", () => {
    shoesDropdown()
})

lookbook.addEventListener( "click", () => {
    closeBagsDropdown()
    closeShoesDropdown()
})