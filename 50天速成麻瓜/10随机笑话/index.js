window.addEventListener("load", () => {
  var joke = document.querySelector(".joke");
  var btn = document.querySelector(".btn");

  generateJoke();
  btn.addEventListener("click", () => {
    generateJoke();
  });
  // USING ASYNC/AWAIT
  async function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", config);

    const data = await res.json();

    joke.innerHTML = data.joke;
  }

  // USING .then()
  // function generateJoke() {
  //   const config = {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   }

  //   fetch('https://icanhazdadjoke.com', config)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       joke.innerHTML = data.joke
  //     })
  // }
});
