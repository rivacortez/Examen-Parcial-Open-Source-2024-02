import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../registration/service/event.service';
import { EventSummaryComponent } from '../../../registration/components/event-summary/event-summary.component';
import { NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDivider} from '@angular/material/divider';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EventSummaryComponent,
    NgForOf,
    TranslateModule,
    MatCardModule,
    MatGridListModule,
    MatDivider,
    MatButton,
    MatToolbar
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.getAllWithAttendeesAndRatings().subscribe((data: any) => {
      this.events = data;
    });
  }

}
