let recipes;
let renderer;

const saveRecipes = function (recipesData) {
  recipes = new Recipes();
  recipes.addRecipes(recipesData);
};

const renderRecipes = function () {
  renderer = new Renderer("#recipes-container", "#recipes-template");
  renderer.render(recipes.getRecipes());
};

$("#searchRecipeButton").on("click", function () {
  const ingredient = $("#ingredientInput").val();
  $.get(`/recipes/${ingredient}`).then(function (recipesData) {
    saveRecipes(recipesData);
    renderRecipes();
    alertFirstIngredient();
  });
});

const alertFirstIngredient = function () {
  $(".recipeImg").on("click", function () {
    const recipeId = $(this).closest(".recipe").attr("id");
    const firstIngredient = recipes.getRecipes()[recipeId].ingredients[0];
    alert(firstIngredient);
  });
};
