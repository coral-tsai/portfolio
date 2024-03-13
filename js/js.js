document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

function protectpasscode() {
  const result = document.getElementById("tutorial").value;
  let passcode = 12345;
  let space = "";
  if (result == space) {
    alert("Type passcode");
  } else {
    if (result == passcode) {
      document.write("<center><h1>TP, The Best E-Learning </h1></center>");
    } else {
      alert("Incorrect Passcode");
      location.reload();
    }
  }
}
