import {Injectable, OnInit} from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DateService implements OnInit {

  setMonAsStartOfWeek = moment.locale('en', {week: {dow: 1}})
  date: BehaviorSubject<moment.Moment> = new BehaviorSubject<moment.Moment>(moment())

  changeMonth(dir: number) {
    const value = this.date.value.add(dir, 'month')
    this.date.next(value)
  }

  changeDay(date: moment.Moment) {
    const value = this.date.value.set({
      date: date.date(),
      month: date.month()
    })
    this.date.next(value)
  }

  ngOnInit(): void {
  }
}
