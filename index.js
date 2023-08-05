var navbar = document.getElementById("navbar");
var list = document.getElementById("list");
const links = navbar.getElementsByTagName("a");
const image = document.getElementById("image");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    navbar.style.animation = "fadeOut 0.1s";
    for (const link of links) {
      link.style.color = "blue";
      image.classList.add("image-style");
    }
  } else {
    navbar.style.animation = "fadeIn 0.3s";
    navbar.classList.remove("scrolled");
    image.classList.remove("image-style");
    for (const link of links) {
      link.style.color = "white";
    }
  }
});
