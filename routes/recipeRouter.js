const express = require("express");
const router = express.Router();
const {} = require("../controllers/recipeController");

router.post("/api/recipes", createRecipe);
router.delete("/api/:id", deleteRecipe);

module.exports = router;
