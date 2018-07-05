import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[]  = [
    new Recipe(
      'First Recipe',
      'Description of the First Recipe',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
      new Ingredient('Meat', 12),
      new Ingredient('Rice', 13)
       ]),
    new Recipe(
      'Second Recipe',
      'Description of the Second Recipe',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Potatoes', 32),
        new Ingredient('Tomatoes', 34)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
