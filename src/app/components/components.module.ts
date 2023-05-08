import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CalendarComponent} from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { OrganizerComponent } from './organizer/organizer.component';

@NgModule({
  declarations: [
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent
  ]
})

export class ComponentsModule {

}
