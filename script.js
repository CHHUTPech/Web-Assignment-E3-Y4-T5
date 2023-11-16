
function addContent(){
    var appContent = document.querySelector('.app-content');
    var addContent = document.querySelector('.add-content');
    appContent.innerHTML = addContent.innerHTML;
    addContent.innerHTML = ''
}
  