import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from '../model/event.entity';
/**
 * Event Service
 * @class EventService
 * @description
 * This class is used to interact with the event API.
 * @property resourceEndpoint: string - The endpoint for the event resource.
 */
@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService<Event> {
  constructor(protected override http: HttpClient) {
    super();
    this.resourceEndpoint = '/events';
  }

  /**
   * Get all events with attendees and ratings.
   * @method getAllWithAttendeesAndRatings
   * @returns An observable of events with attendees and ratings.
   */
  getAllWithAttendeesAndRatings(): Observable<Event[]> {
    return forkJoin({
      events: this.getAll(),
      attendees: this.http.get<any[]>(`${this.basePath}/attendees`),
      ratings: this.http.get<any[]>(`${this.basePath}/ratings`)
    }).pipe(
      map(({ events, attendees, ratings }) => {
        return events.map(event => ({
          ...event,
          attendees: attendees.filter(attendee => attendee.eventId === event.id),
          ratings: ratings.filter(rating => rating.eventId === event.id)
        }));
      })
    );
  }
}
