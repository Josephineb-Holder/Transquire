var navbar = document.getElementById("navbar");
var list = document.getElementById("list");
const links = navbar.getElementsByTagName("a");
const image = document.getElementById("image");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    for (const link of links) {
      link.style.color = "blue";
      image.classList.add("image-style");
    }
  } else {
    navbar.classList.remove("scrolled");
    image.classList.remove("image-style");
    for (const link of links) {
      link.style.color = "white";
    }
  }
});
