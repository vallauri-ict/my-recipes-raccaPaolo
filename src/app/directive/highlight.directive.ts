import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') hoverColor: string = 'Cyan';
  @Input() defaultColor: string = 'LightCyan';
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
  constructor() {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') highlight() {
    this.backgroundColor = this.hoverColor;
  }
  @HostListener('mouseleave') reset() {
    this.backgroundColor = this.defaultColor;
  }
}
