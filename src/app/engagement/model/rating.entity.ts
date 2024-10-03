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
