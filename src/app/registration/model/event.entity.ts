
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
