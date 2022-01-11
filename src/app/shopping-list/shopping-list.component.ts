import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

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

  constructor(public shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.getIngredients();
  }

  addIngredient = (ingredient: IngredientModel) => {
    this.shoppingListService.addIngredient(ingredient);
  };
}
