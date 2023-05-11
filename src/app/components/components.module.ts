import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FocusBorderDirective} from '../directives/focusborder.directive';
import {MomentPipe} from '../pipes/moment.pipe';
import {CalendarComponent} from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { OrganizerComponent } from './organizer/organizer.component';

@NgModule({
  declarations: [
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe,
    FocusBorderDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe,
    FocusBorderDirective
  ],
})

export class ComponentsModule {

}
