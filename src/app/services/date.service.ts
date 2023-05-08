import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class DateService {
  date: BehaviorSubject<moment.Moment> = new BehaviorSubject<moment.Moment>(moment())
}