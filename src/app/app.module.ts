import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectorDateComponent } from './selector-date/selector-date.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { MomentPipe } from './shared/moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SelectorDateComponent,
    OrganizerComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
