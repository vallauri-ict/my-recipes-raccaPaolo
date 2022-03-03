import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private router: Router) {}

  public collapsed: boolean = true;

  ngOnInit(): void {}

  show(page: string) {
    this.router.navigateByUrl(page);
  }
}
