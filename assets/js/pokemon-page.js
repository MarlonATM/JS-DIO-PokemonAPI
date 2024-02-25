const pokemonList = document.getElementById("pokemonList")
const pokemonPage = document.getElementById("pokemonPage")

function loadPokemonPage(pokemon) {
    return `
            <section class="content ${pokemon.type}">
                <ul class="header">
                    <li>
                        <img src="/assets/img/back-button.png" alt="left arrow icon">
                    </li>
                    <li>
                        <img src="/assets/img/heart.png" alt="heart icon">
                    </li>
                </ul>
            </section>
        `.join('')   
}

//loadPokemonPage(pokemonName)

fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemon) => {
            pokemonPage.innerHTML += loadPokemonPage(pokemon)
        }) 