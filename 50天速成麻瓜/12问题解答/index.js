window.addEventListener("load", () => {
  var btns = document.querySelectorAll(".btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentNode.classList.toggle("tc");
    });
  });
});
