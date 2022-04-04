const express = require('express');
const helper = require('./helper.js');
let pokemons = require('./mock-pokemon');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, Express 2 !'));

app.get('/api/pokemons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find(pokemon => pokemon.id === id);
  const message = "Un pokémon a été trouvé";
  //res.send(`Vous avez demandé le pokémon ${pokemon.name}`); //Méthode send
  //res.json(pokemon) //Méthode JSON
  res.json(helper.success(message, pokemon));
})
/*
//Affichage du nombre de pokémons dans le tableau
app.get('/api/pokemons', (req, res) => {
  res.send(`Il y a ${pokemons.length} pokémons dans le pokédex, pour l'instant !`);
});
*/
// On retourne la liste des pokémons au format JSON, avec un message :
app.get('/api/pokemons', (req, res) => {
  const message = 'La liste des pokémons a bien été récupérée.'
  res.json(helper.success(message, pokemons));
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));