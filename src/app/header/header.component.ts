import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {}

  public collapsed: boolean = true;

  ngOnInit(): void {}

  onSelect = (param: string) => {
    this.featureSelected.emit(param);
  };
}
