import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>();

  constructor(public recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes();
  }

  onRecipeSelected = (recipe: RecipeModel) => {
    this.recipeSelectedInList.emit(recipe);
  };
}
