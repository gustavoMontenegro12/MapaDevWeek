const pokemonSelectionList = document.querySelectorAll('.pokemon-list')
const pokemonCard = document.querySelectorAll(".pokemon-card")

pokemonSelectionList.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const pokemonCardOpen = document.querySelector('.open')
        pokemonCardOpen.classList.remove('open')

        const idSelectedPokemon = pokemon.attributes.id.value

        const idPokemonCardToOpen = idSelectedPokemon + '-card'

        const pokemonCardSetOpen = document.getElementById(idPokemonCardToOpen)
        pokemonCardSetOpen.classList.add('open')

        const pokemonCardActiveOnList = document.querySelector('.active')
        pokemonCardActiveOnList.classList.remove('active')

        const selectedPokemonOnList = document.getElementById(idSelectedPokemon)
        selectedPokemonOnList.classList.add('active')

    })
})
