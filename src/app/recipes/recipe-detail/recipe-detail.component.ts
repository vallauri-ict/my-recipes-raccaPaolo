import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private shoppingListService: ShoppingListService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      console.log(params);
      let recipe = params['id'];
      this.recipeService?.getRecipe(recipe);
    });
  }

  addToShoppingList = (): void => {
    this.shoppingListService.addIngredients(
      this.recipeService.selectedRecipe?.ingredients
    );
  };

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute });
  }
}
