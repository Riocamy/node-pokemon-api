const express = require('express');
let pokemons = require('./mock-pokemon');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, Express 2 !'));

app.get('/api/pokemons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find(pokemon => pokemon.id === id);
  res.send(`Vous avez demandé le pokémon ${pokemon.name}`);
})

//Nouveau point de terminaison, qui affiche le nombre total de pokemons
app.get('/api/pokemons', (req, res) => {
  res.send(`Il y a ${pokemons.length} pokémons dans le pokédex, pour l'instant !`);
});

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));