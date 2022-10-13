window.addEventListener("load", () => {
  var open = document.querySelector(".open");
  var close = document.querySelector(".close");
  var container = document.querySelector(".container");

  open.addEventListener("click", () => {
    container.classList.add("bz");
  });
  close.addEventListener("click", () => {
    container.classList.remove("bz");
  });
});
