import { Component, OnInit } from '@angular/core';
import {Announcement} from '../../shared/announcement.model';
import {CalendarManagementService} from '../calendar-management.service';

@Component({
  selector: 'app-calendar-home',
  templateUrl: './calendar-home.component.html',
  styleUrls: ['./calendar-home.component.css'],
  providers: [CalendarManagementService]
})
export class CalendarHomeComponent implements OnInit {
  newAnn: any;
  announcements: Announcement[];
  closeResult: string;

  constructor(private cmService: CalendarManagementService) {
    this.newAnn = {};
  }

  ngOnInit() {
    this.announcements = this.cmService.getAnnouncements();
    this.cmService.announcementsChanged
      .subscribe(
        (announcements: Announcement[]) => {
          this.announcements = announcements;
        }
      );
  }

  getData(message: any) {
    // this.spacing = message.Spacing;
    // this.length = message.DLarge;
    console.log(message.titleField);
    console.log(message.startDateField);
    console.log(message.durationField);
    this.cmService.addAnnouncement(new Announcement(
      message.titleField,
      message.startDateField,
      this.addDays(message.startDateField, message.durationField)
    ));
  }

  private addDays(date: any, days: number ): Date {
    const result = new Date( date );
    result.setDate(result.getDate() + days - 1 );
    return result;
  }

}
