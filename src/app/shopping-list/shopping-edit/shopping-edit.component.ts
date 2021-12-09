import { IngredientModel } from './../../models/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();
  name: string;
  amount: number = 1;
  constructor() {}

  ngOnInit(): void {}

  addIngredient = () => {
    const ingredient: IngredientModel = new IngredientModel(
      this.name,
      this.amount
    );
    this.ingredientAdded.emit(ingredient);
  };

  clearList = () => {
    this.name = '';
    this.amount = 0;
  };
}
