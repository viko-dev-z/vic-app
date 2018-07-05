import {Recipe} from './recipe.model';

export class RecipeService {

  private recipes: Recipe[]  = [
    new Recipe('First Recipe', 'Description of the First Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Second Recipe', 'Description of the Second Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
