window.addEventListener("load", () => {
  var labels = document.querySelectorAll(".form-control label");
  var ipt = document.querySelectorAll(".form-control input");
  labels.forEach((label) => {
    label.innerHTML = label.innerHTML.split("").map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`).join("");
  });

  //   文字焦点
  var spans = document.querySelectorAll(".form-control label span");
  spans.forEach((span) => {
    span.addEventListener("click", () => {
      span.parentNode.parentNode.childNodes[1].focus();
    });
  });
});
