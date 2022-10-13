window.addEventListener("load", () => {
  var btn = document.querySelector(".icon");
  var ctr = document.querySelector(".container");

  btn.addEventListener("click", () => {
    ctr.classList.toggle("active");
  });
});
