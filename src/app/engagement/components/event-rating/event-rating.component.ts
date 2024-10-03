import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AttendeeService} from '../../../registration/service/attendee.service';
import {RatingService} from '../../service/rating.service';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {TranslateModule} from '@ngx-translate/core';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-event-rating',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    TranslateModule,
    MatInput,
    MatButton,
    NgIf,
    MatLabel
  ],
  templateUrl: './event-rating.component.html',
  styleUrl: './event-rating.component.css'
})
export class EventRatingComponent {
  ratingForm: FormGroup;
  resultMessage: string = '';

  constructor(private fb: FormBuilder, private attendeeService: AttendeeService, private ratingService: RatingService) {
    this.ratingForm = this.fb.group({
      ticketIdentifier: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  onRateEvent() {
    const ticketIdentifier = this.ratingForm.get('ticketIdentifier')?.value;
    const ratingValue = this.ratingForm.get('rating')?.value;

    this.attendeeService.getAll().subscribe(attendees => {
      const attendee = attendees.find(a => a.ticketIdentifier === ticketIdentifier);
      if (attendee) {
        if (attendee.checkedInAt) {
          this.ratingService.getAll().subscribe(ratings => {
            const existingRating = ratings.find(r => r.attendeeId === attendee.id && r.eventId === attendee.eventId);
            if (!existingRating) {
              const newRating = {
                attendeeId: attendee.id,
                eventId: attendee.eventId,
                rating: ratingValue,
                ratedAt: new Date()
              };
              this.ratingService.create(newRating).subscribe(() => {
                this.resultMessage = 'Event successfully rated';
              });
            } else {
              this.resultMessage = 'You have already rated this event';
            }
          });
        } else {
          this.resultMessage = 'You can only rate events you have attended to';
        }
      } else {
        this.resultMessage = 'Invalid Ticket Identifier';
      }
    });
  }
}
