const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  document.querySelector(".buttons").appendChild(btn);
  btn.classList.add("btn");

  btn.innerHTML = sound;
  btn.addEventListener("click", () => {
    stopSongs();

    document.querySelector(`.${sound}`).play();
    // document.getElementById(sound).play();
  });
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.querySelector(`.${sound}`);
    // const song=document.getElementById(sound)

    song.pause();
    song.currentTime = 0;
  });
}
