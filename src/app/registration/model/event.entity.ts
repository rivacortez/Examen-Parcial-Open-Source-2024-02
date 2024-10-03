/**
 * Event entity
 * @class Event
 * @description
 * This class is used to represent an event.
 * @property id: number - The id of the event.
 * @property name: string - The name of the event.
 * @property description: string - The description of the event.
 * @property scheduledAt: Date - The scheduled date of the event.
 * @property attendees: any[] - The list of attendees for the event.
 */

export class Event {
  id: number;
  name: string;
  description: string;
  scheduledAt: Date;
  attendees: any[];

  constructor(event: { id?: number, name?: string, description?: string, scheduledAt?: Date, attendees?: any[] }) {
    this.id = event.id || 0;
    this.name = event.name || '';
    this.description = event.description || '';
    this.scheduledAt = event.scheduledAt || new Date();
    this.attendees = event.attendees || [];
  }
}
