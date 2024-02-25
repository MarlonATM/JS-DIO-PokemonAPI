const pokemonList = document.getElementById("pokemonList")
const loadMore = document.getElementById("loadMore")
const pokemonPage = document.getElementById("pokemonPage")

const maxRecords = 151
const limit = 20
let offset = 0

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name"><a class="pokemonName" href="./assets/html/about.html">${pokemon.name}</a></span>
    
                <div class="info">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                <img src="${pokemon.image}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('')
    })
}

loadPokemonItens(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit

    qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMore.parentElement.removeChild(loadMore)
    }
    else {
        loadPokemonItens(offset, limit)
    }
})