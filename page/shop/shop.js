
function addContent(){
    var appContent = document.querySelector('.app-content');
    var addContent = document.querySelector('.add-content');
    appContent.innerHTML = addContent.innerHTML;
    addContent.innerHTML = ''
    pageShopFunction();
}

function pageShopFunction() {
    var filterInputItem = document.querySelectorAll(".filter-input-item");
    filterInputItem.forEach((item) => {
        item.querySelector(".filter-input-item-title").addEventListener('click', () => {
        filterInputItem.forEach(otherItem => {
          if (item !== otherItem && otherItem.classList.contains('open-input')) {
            otherItem.classList.remove('open-input');
          }
        });
  
        item.classList.toggle('open-input');
      });
    });
}
  
  