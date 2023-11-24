export function expands() {
  var expands = document.querySelectorAll("expand");
  console.log(expands)
  if (expands != null) {
    expands.forEach(function (radio) {
      radio.querySelector("expand-header").addEventListener("click", () => {
        radio.querySelector("expand-content").classList.toggle("open");
      });
    });
  }
}
