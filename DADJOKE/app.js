const Jokelist = document.querySelector("ul");
const button = document.querySelector("button");

const getDadJoke = async () => {
  const config = { headers: { Accept: 'application/json' } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  console.log(res.data.joke);
  const elem = document.createElement('LI');
  elem.innerText = res.data.joke;
  Jokelist.appendChild(elem);
}
button.addEventListener("click", getDadJoke);