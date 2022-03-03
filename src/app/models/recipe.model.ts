import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  ID: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: IngredientModel[];
  _id: string;

  constructor(
    name: string,
    desc: string,
    img: string,
    ingredients: IngredientModel[],
    _id: string = ''
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = img;
    this.ingredients = ingredients;
    this._id = _id;
  }
}
