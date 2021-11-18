import { Component, Input, OnInit } from '@angular/core';
import { IngredientModel } from '../../../models/ingredient.model';
import { RecipeModel } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor() {}

  ngOnInit(): void {}
}
