import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.css'],
})
export class DeleteRecipeComponent implements OnInit {
  ngOnInit(): void {}
  constructor(public modal: NgbActiveModal) {}
}
