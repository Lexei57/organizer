import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MomentPipe} from '../pipes/moment.pipe';
import {CalendarComponent} from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { OrganizerComponent } from './organizer/organizer.component';

@NgModule({
  declarations: [
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe
  ]
})

export class ComponentsModule {

}
