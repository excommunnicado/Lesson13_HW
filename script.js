function updateTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateTime, 1000);

let pokemonElement1 = document.getElementById("pokemon1");
let pokemonElement2 = document.getElementById("pokemon2");
let pokemonElement3 = document.getElementById("pokemon3");

let randomPokemon1 = Math.floor(Math.random() * 500) + 1;
let randomPokemon2 = Math.floor(Math.random() * 500) + 1;
let randomPokemon3 = Math.floor(Math.random() * 500) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon1}`)
    .then(resp => resp.json())
    .then(data => {
        let name = data.name;
        let image = data.sprites.front_default;

        pokemonElement1.innerHTML = `
        <h2 class="pokemon-name">${name}</h2>
        <img class="pokemon-img" src="${image}" alt="${name}">
        `;
    })
    .catch(error => console.error(error));

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon2}`)
    .then(resp => resp.json())
    .then(data => {
        let name = data.name;
        let image = data.sprites.front_default;

        pokemonElement2.innerHTML = `
        <h2 class="pokemon-name">${name}</h2>
        <img class="pokemon-img" src="${image}" alt="${name}">
        `;
    })
    .catch(error => console.error(error));

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon3}`)
    .then(resp => resp.json())
    .then(data => {
        let name = data.name;
        let image = data.sprites.front_default;

        pokemonElement3.innerHTML = `
        <h2 class="pokemon-name">${name}</h2>
        <img class="pokemon-img" src="${image}" alt="${name}">
        `;
    })
    .catch(error => console.error(error));