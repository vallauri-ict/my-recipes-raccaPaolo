import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeModel = new RecipeModel('test', 'test', 'test');
  constructor() {}

  ngOnInit(): void {}
}
