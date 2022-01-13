import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: IngredientModel[] = [];
  constructor(private dataStorageService: DataStorageService) {}

  getIngredients = () => {
    this.dataStorageService.sendGetRequest('shopping-list').subscribe(
      (data) => (this.ingredients = data as IngredientModel[]),
      (err) => console.error(err)
    );
  };

  addIngredient = (ingredient: IngredientModel) => {
    let data =
      this.ingredients.find(
        (aus) => aus.name.toUpperCase() === ingredient.name.toUpperCase()
      ) ?? null;
    if (!data) {
      this.ingredients.push(ingredient);
      this.postIngredient(ingredient);
    } else {
      this.ingredients.map((aus) => {
        if (aus.name.toUpperCase() === ingredient.name.toUpperCase()) {
          aus.amount += ingredient.amount;

          this.patchIngredient({ amount: aus.amount }, aus._id);
        }
      });
    }
  };

  addIngredients = (ingredients: IngredientModel[]) => {
    // this.ingredients.push(...ingredients);
    ingredients.map((ingr) => this.addIngredient(ingr));
  };

  postIngredient = (ingredient: IngredientModel) => {
    this.dataStorageService
      .sendPostRequest('shopping-list', ingredient)
      .subscribe(
        (succ) => {
          console.log(succ);
          this.getIngredients();
        },
        (err) => {
          console.error(err);
        }
      );
  };
  patchIngredient = (data: object, id: number) => {
    this.dataStorageService
      .sendPatchtRequest('shopping-list/' + id, data)
      .subscribe(
        (succ) => {
          console.log(succ);
        },
        (err) => {
          console.error(err);
        }
      );
  };
}
