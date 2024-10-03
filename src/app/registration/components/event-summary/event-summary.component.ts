import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter, MatCardTitle } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-event-summary',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    TranslateModule,
    MatCardTitle
  ],
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.css']
})
export class EventSummaryComponent implements OnChanges {
  @Input() event: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['event']) {
      this.logEventData();
    }
  }

  logEventData() {
    console.log('Event data:', this.event);
  }

  get registeredAttendees() {
    return this.event?.attendees?.filter((attendee: any) => attendee.checkedInAt).length || 0;
  }

  get averageRating() {
    const ratings = this.event?.ratings || [];
    if (ratings.length === 0) return 'No ratings';
    const sum = ratings.reduce((a: number, b: { rating: number }) => a + b.rating, 0);
    return (sum / ratings.length).toFixed(1);
  }
}
