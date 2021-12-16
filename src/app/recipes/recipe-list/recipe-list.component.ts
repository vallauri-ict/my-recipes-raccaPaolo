import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [];
  selectedRecipe: RecipeModel;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.recipes;
    this.selectedRecipe = this?.recipes[0];
  }

  onRecipeSelected = (recipe: RecipeModel) => {
    this.recipeSelectedInList.emit(recipe);
  };
}
