import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { CalendarEvent} from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { colors } from './event-colors';
import {Subject} from 'rxjs';
import {Announcement} from '../../shared/announcement.model';
import {CalendarManagementService} from '../calendar-management.service';

@Component({
  selector: 'app-calendar-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean;
  view: string = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      start: new Date(),
      title: 'An event',
      color: colors.red
    }
  ];
  announcements: Announcement[];

  constructor( private cmService: CalendarManagementService ) { }

  ngOnInit() {
    this.announcements = this.cmService.getAnnouncements();
    this.cmService.announcementsChanged
      .subscribe(
        (annoucements: Announcement[]) => {
          this.announcements = annoucements;
          this.events.push({
            start: annoucements[annoucements.length - 1].startDate,
            end: annoucements[annoucements.length - 1].endDate,
            title: annoucements[annoucements.length - 1].title,
            color: colors.red
          });
          this.refresh.next();
        }
      );
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

  addAnnouncement(): void  {
    this.events.push({
        start: new Date(),
        title: 'An event',
        color: colors.red
      });
    this.refresh.next();
  }

}
