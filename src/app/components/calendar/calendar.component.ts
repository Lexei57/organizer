import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DateService} from '../../services/date.service';

export interface IDay {
  value: moment.Moment
  active: boolean
  disabled: boolean
  selected: boolean
}

export interface IWeek {
  days: IDay[]
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  calendar: IWeek[]

  constructor(private dateService: DateService) {
  }

  ngOnInit(): void {
    this.dateService.date.subscribe(date => this.generate(date))


  }

  generate(now: moment.Moment) {
    const startDay = now.clone().startOf('month').startOf('week')
    const endDay = now.clone().endOf('month').endOf('week')

    const date = startDay.clone().subtract(1, 'day')

    const calendar = []

    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, 'day').clone()
            const active = moment().isSame(value, 'date')
            const disabled = !now.isSame(value, 'month')
            const selected = now.isSame(value, 'date')

            return {
              value, active, disabled, selected
            }
          })
      })
    }
    this.calendar = calendar
  }

  selectDay(day: moment.Moment): void {
    this.dateService.changeDay(day)
  }
}
