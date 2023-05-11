import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ComponentsModule} from './components/components.module';
import { HideScrollDirective } from './directives/hide-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HideScrollDirective,

  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
