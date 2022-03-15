import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { ShoppingListService } from '../../services/shopping-list.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteRecipeComponent } from '../modals/delete-recipe/delete-recipe.component';

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
    private router: Router,
    private _modalService: NgbModal
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

  onEditRecipe = () => {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute });
  };

  onDeleteRecipe = () => {
    const modal = this._modalService.open(DeleteRecipeComponent);
    modal.result.then(
      (result) =>
        this.recipeService.deleteRecipe(this.recipeService.selectedRecipe._id),
      (cancel) => console.log('Delete aborted', cancel)
    );
  };
}
