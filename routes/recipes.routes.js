const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes.controller')

router
    .post('/', recipesController.newRecipe)

module.exports = router;