import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Pasta', 500),
    new IngredientModel('Pomodori', 2),
  ];

  constructor() {}

  ngOnInit(): void {}

  addIngredient = (ingredient: IngredientModel) => {
    let data =
      this.ingredients.find(
        (aus) => aus.name.toUpperCase() === ingredient.name.toUpperCase()
      ) ?? null;
    if (!data) this.ingredients.push(ingredient);
    else {
      this.ingredients.map((aus) =>
        aus.name.toUpperCase() === ingredient.name.toUpperCase()
          ? (aus.amount += ingredient.amount)
          : null
      );
    }
  };
}
