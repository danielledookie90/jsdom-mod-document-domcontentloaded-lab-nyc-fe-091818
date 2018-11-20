Uncaught TypeError: Cannot read property 'addEventListener' of null
document.addEventListener("DOMContentLoaded", e => {
  document.querySelector("body")
   .addEventListener("click", e => console.log("Reggae, Reggae!"));
})