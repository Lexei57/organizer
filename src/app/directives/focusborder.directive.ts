import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFocusBorder]'
})
export class FocusBorderDirective {

  constructor(private element: ElementRef) { }

  @HostListener('focus') onFocus() {
    this.element.nativeElement.classList.add('input-selected')
  }

  @HostListener('blur') onBlur() {
    this.element.nativeElement.classList.remove('input-selected')
  }
}
