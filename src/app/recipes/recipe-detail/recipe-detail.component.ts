import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    public recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {}

  addToShoppingList = (): void => {
    this.shoppingListService.addIngredients(
      this.recipeService.selectedRecipe.ingredients
    );
  };
}
