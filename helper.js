//Module pour organiser la structure des réponses (manière raccourcie)
exports.success = (message, data) => {
  return {
    message: message,
    data: data
  }
}

/*
//Manière ES6
exports.success = (message, data) => {
  return {message, data}
}
*/

/*
//Manière vanilla
const success = (message, data) => {
  return {
    message: message,
    data: data
  }
}
 
exports.success
*/

//Module permettant de générer un ID unique pour chaque pokémon ajouté
exports.getUniqueId = (pokemons) => {
  const pokemonsIds = pokemons.map(pokemon => pokemon.id)
  const maxId = pokemonsIds.reduce((a,b) => Math.max(a, b))
  const uniqueId = maxId + 1
    
  return uniqueId
}