/**
 * Rating entity
 * @class RatingEntity
 * @description
 * This class is used to represent a rating given by an attendee for an event.
 * @property id: number - The id of the rating.
 * @property attendeeId: number - The id of the attendee who gave the rating.
 * @property eventId: number - The id of the event being rated.
 * @property rating: number - The rating value.
 * @property ratedAt: Date - The date and time when the rating was given.
 */

export class RatingEntity {
  id: number;
  attendeeId: number;
  eventId: number;
  rating: number;
  ratedAt: Date;

  constructor(rating: { id?: number, attendeeId?: number, eventId?: number, rating?: number, ratedAt?: Date }) {
    this.id = rating.id || 0;
    this.attendeeId = rating.attendeeId || 0;
    this.eventId = rating.eventId || 0;
    this.rating = rating.rating || 0;
    this.ratedAt = rating.ratedAt || new Date();
  }
}
