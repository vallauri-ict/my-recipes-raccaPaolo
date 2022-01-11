import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  ID: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: IngredientModel[];

  constructor(name: string, desc: string, img: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = img;
  }
}
