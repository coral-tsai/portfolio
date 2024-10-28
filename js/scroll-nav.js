const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".section-menu nav ul li");

window.onscroll = () => {
  console.log(sections);
  console.log(navLi);
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
      console.log(current);
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
