const mongoose = require("mongoose");
const Recipe = require("../models/recipeModel");

const createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    recipe.save();
    res.status(201).send(recipe);
  } catch (e) {
    console.log(e.message);
    res.status(400).send(e);
  }
};
const deleteRecipe = (req, res) => {
  try {
    const deleteResult = Recipe.findOneAndDelete({});
  } catch (e) {
    res.status(400).send(e.message);
  }
};
module.exports = {
  createRecipe,
  deleteRecipe,
};
