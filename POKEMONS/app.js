const baseSite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const sections = document.querySelector('#container');


for (let i = 1; i < 152; i++) {
    var pokemonDiv = document.createElement('div');
    var newImg = document.createElement('img');
    var number = document.createElement('p');
    number.innerText = `#${i}`;
    newImg.src = `${baseSite}${i}.png`;
    pokemonDiv.appendChild(newImg);
    pokemonDiv.appendChild(number);
    pokemonDiv.classList.add("pokepoke");
    sections.appendChild(pokemonDiv);

}



