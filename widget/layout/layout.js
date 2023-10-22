function layoutFunction() {
    const menuBtn = document.querySelector('.app-nav-bar-right-btn')
    const appSlider = document.querySelector('.app-slider')
    const appSliderMenu = document.querySelector('.app-slider-menu')
    const appSliderMenuItems = document.querySelectorAll('.app-slider-menu-item');
    const backBtn = document.querySelectorAll('.back-btn');
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
        item.addEventListener('click', (event) => {
            appSliderMenuItems.forEach(otherItem => {
                if (item != otherItem) {
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


}