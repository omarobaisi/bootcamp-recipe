class Recipes {
  constructor() {
    this.recipes = [];
  }

  addRecipes(dataArray) {
    this.recipes = [...dataArray];
  }

  getRecipes() {
    return this.recipes;
  }
}
