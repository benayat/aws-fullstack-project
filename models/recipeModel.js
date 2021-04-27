const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  calories: {
    type: String,
  },
  howToMake: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  picture: {
    type: String,
  },
  timeToMake: {
    type: String,
  },
});

const Recipe = new Model("recipe", Schema);

module.exports = Recipe;
