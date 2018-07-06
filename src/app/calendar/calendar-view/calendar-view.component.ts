import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { colors } from './event-colors';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {

  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      start: new Date(),
      title: 'An event',
      color: colors.red
    }
  ];
  activeDayIsOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

}
