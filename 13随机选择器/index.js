const tagsEl = document.querySelector(".tages");
const textarea = document.querySelector(".bdy");

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input.split(",");

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tage");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
