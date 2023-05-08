import { Component } from '@angular/core';
import {DateService} from '../../services/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  constructor(public date: DateService) {
  }

}