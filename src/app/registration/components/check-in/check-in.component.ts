import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AttendeeService } from '../../service/attendee.service';
import { EventService } from '../../service/event.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.css'
})
export class CheckInComponent {
  checkInForm: FormGroup;
  resultMessage: string = '';
  attendeeDetails: any = null;

  constructor(private fb: FormBuilder, private attendeeService: AttendeeService, private eventService: EventService) {
    this.checkInForm = this.fb.group({
      ticketIdentifier: ['', Validators.required]
    });
  }

  onCheckIn() {
    const ticketIdentifier = this.checkInForm.get('ticketIdentifier')?.value;
    this.attendeeService.getAll().subscribe(attendees => {
      const attendee = attendees.find(a => a.ticketIdentifier === ticketIdentifier);
      if (attendee) {
        if (attendee.checkedInAt) {
          this.resultMessage = 'CheckIn.alreadyCheckedIn';
        } else {
          attendee.checkedInAt = new Date();
          this.attendeeService.update(attendee.id, attendee).subscribe(() => {
            this.eventService.getById(attendee.eventId).subscribe(event => {
              this.attendeeDetails = { ...attendee, eventName: event.name, eventDescription: event.description };
              this.resultMessage = '';
            });
          });
        }
      } else {
        this.resultMessage = 'CheckIn.invalidTicket';
      }
    });
  }
}
