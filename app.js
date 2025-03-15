// toggle icon navbar

// let newIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");
// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("fa-xmark");
//   navbar.classList.toggle('active')
// };

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav-container a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav-container a"[(href = "+id +")])
          .classList.add("active");
      });
    }
  });
};
