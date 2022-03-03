import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from '../models/recipe.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: RecipeModel[] = [];
  selectedRecipe: RecipeModel;
  constructor(
    private dataStorage: DataStorageService,
    private router: Router
  ) {}

  getRecipes = () => {
    this.dataStorage.sendGetRequest('recipes').subscribe(
      (data) => {
        this.recipes = data as RecipeModel[];
      },
      (err) => console.error(err)
    );
  };

  getRecipe = (index: number) => {
    this.dataStorage.sendGetRequest('recipes/' + index).subscribe(
      (data) => {
        this.selectedRecipe = data as RecipeModel;
      },
      (err) => console.error(err)
    );
  };

  postRecipe(data) {
    this.dataStorage.sendPostRequest('recipes', data).subscribe(
      (data) => {
        alert('Recipe saved successfully!');
        this.getRecipes();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  patchRecipe(recipeId: any, recipe: RecipeModel) {
    this.dataStorage.sendPatchRequest('recipes/' + recipeId, recipe).subscribe(
      (data) => {
        this.getRecipes();
        this.router.navigate(['/recipes', recipeId]);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteRecipe(recipeId: any) {
    this.dataStorage.sendDeleteRequest('recipes/' + recipeId).subscribe(
      (data) => {
        alert('Recipe deleted successfully!');
        this.getRecipes();
        this.router.navigate(['/recipes']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
