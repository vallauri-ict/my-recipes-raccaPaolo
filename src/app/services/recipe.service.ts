import { Injectable } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: RecipeModel[] = [];
  selectedRecipe: RecipeModel;
  constructor(private dataStorage: DataStorageService) {}

  getRecipes = () => {
    this.dataStorage.sendGetRequest('recipes').subscribe(
      (data) => {
        this.recipes = data as RecipeModel[];
      },
      (err) => console.error(err)
    );
  };
}
