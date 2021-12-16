import { Injectable } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: RecipeModel[] = [
    new RecipeModel(
      'Spaghetti alla chitarra',
      'Un particolare tipo di pasta che...',
      'https://i.kym-cdn.com/entries/icons/original/000/033/701/PTSD_Chihuahua_Banner.jpg'
      //  'https://images.lacucinaitaliana.it/wp-content/uploads/2020/06/03204258/Pasta-alla-chitarra-con-ragu-di-polo.jpg'
    ),
    new RecipeModel(
      'Lasagne alla bolognese',
      'Pasta emiliana molto calorica sempre presente nei pranzi domenicali...',
      'https://www.gustissimo.it/articoli/ricette/lasagne-cannelloni/lasagna-senza-besciamella.jpeg'
    ),
    new RecipeModel(
      'Gnocchi ai formaggi',
      'Raviole Val Varaita',
      'https://www.vapropi.it/wp-content/uploads/2019/09/SC.G101.01.jpg'
    ),
    new RecipeModel(
      'Tiramisu',
      'Con tipico mascarpone ',
      'https://www.trevisotoday.it/~media/horizontal-hi/44494491491566/tiramisu-pavesini-2.jpg'
    ),
  ];
  constructor() {}
}
