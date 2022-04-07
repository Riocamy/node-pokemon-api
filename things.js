//Call MongoDB
const mongoose = require('mongoose');

//Création d'un modèle de données MongoDB
const thingSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  hp: { type: Number, required: true },
  cp: { type: Number, required: true },
  picture: { type: String, required: true },
  types: { type: String, required: true },
  created: { type: String, required: true },
});

//Pour exporter le modèle de données
module.exports = mongoose.model('Thing', thingSchema);