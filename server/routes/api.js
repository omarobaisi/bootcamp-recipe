const express = require("express");
const router = express.Router();
const axios = require("axios");

const organizeRecipes = function (recipes) {
  recipes = recipes.data.results;
  recipes = recipes.map((recipe) => ({
    ingredients: recipe.ingredients,
    title: recipe.title,
    thumbnail: recipe.thumbnail,
    href: recipe.href,
  }));
  return recipes;
};

router.get("/sanity", function (req, res) {
  res.send("OK");
});

router.get("/recipes/:ingredient", async function (req, res) {
  const ingredient = req.params.ingredient;
  try {
    let recipes = await axios.get(
      "https://recipes-goodness.herokuapp.com/recipes/" + ingredient
    );
    recipes = organizeRecipes(recipes);
    res.send(recipes);
  } catch (e) {
    throw Error("Request Faild Error 404: " + e);
  }
});

module.exports = router;
