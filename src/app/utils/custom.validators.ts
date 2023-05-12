import {AbstractControl} from '@angular/forms';

export class CustomValidators {
  static noWhitespaceValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value && control.value.trim().length === 0) {
      return { 'whitespace': true };
    }
    return null;
  }
}
