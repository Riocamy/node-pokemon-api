const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser'); //Parse automatiquement les requêtes en JSON
const helper = require('./helper.js');
let pokemons = require('./mock-pokemon');

const app = express();
const port = 3000;

/*
//Ajout du Middleware (création manuelle)
const logger = (req, res, next) => {
  console.log(`URL : ${req.url}`);
  next();
}
app.use(logger);
*/

//Import des Middlewares sur l'API
app
  .use(favicon(__dirname + `/favicon.ico`)) //call favicon
  .use(morgan('dev')) //call Morgan
  .use(bodyParser.json()); //call body-parser

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

/**** Mise en place du CRUD *****/

// On retourne la liste des pokémons au format JSON, avec un message :
app.get('/api/pokemons', (req, res) => {
  const message = 'La liste des pokémons a bien été récupérée.'
  res.json(helper.success(message, pokemons));
})

//Ajout d'un nouveau pokémon dans l'API
app.post('/api/pokemons', (req, res) => {
  const id = helper.getUniqueId(pokemons);
  const pokemonCreated = { ...req.body, ...{id: id, created: new Date()}}
  pokemons.push(pokemonCreated)
  const message = `Le pokémon ${pokemonCreated.name} a bien été crée.`
  res.json(helper.success(message, pokemonCreated))
})

//Mettre à jour un pokémon dans l'API
app.put('/api/pokemons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pokemonUpdated = { ...req.body, id: id }
  pokemons = pokemons.map(pokemon => {
  return pokemon.id === id ? pokemonUpdated : pokemon
  })
  
  const message = `Le pokémon ${pokemonUpdated.name} a bien été modifié.`
  res.json(helper.success(message, pokemonUpdated))
});

//Supprimer un pokémon de l'API
app.delete('/api/pokemons/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const pokemonDeleted = pokemons.find(pokemon => pokemon.id === id)
  pokemons = pokemons.filter(pokemon => pokemon.id !== id)
  const message = `Le pokémon ${pokemonDeleted.name} a bien été supprimé.`
  res.json(helper.success(message, pokemonDeleted))
});

//Démarrage de l'API
app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));