/**
 * Attendee entity
 * @class Attendee
 * @description
 * This class is used to represent an attendee of an event.
 * @property id: number - The id of the attendee.
 * @property firstName: string - The first name of the attendee.
 * @property lastName: string - The last name of the attendee.
 * @property eventId: number - The id of the event the attendee is attending.
 * @property ticketIdentifier: string - The ticket identifier of the attendee.
 * @property checkedInAt: Date \| null - The check-in date of the attendee.
 */

export class Attendee {
  id: number;
  firstName: string;
  lastName: string;
  eventId: number;
  ticketIdentifier: string;
  checkedInAt: Date | null;

  constructor(attendee: { id?: number, firstName?: string, lastName?: string, eventId?: number, ticketIdentifier?: string, checkedInAt?: Date | null }) {
    this.id = attendee.id || 0;
    this.firstName = attendee.firstName || '';
    this.lastName = attendee.lastName || '';
    this.eventId = attendee.eventId || 0;
    this.ticketIdentifier = attendee.ticketIdentifier || '';
    this.checkedInAt = attendee.checkedInAt || null;
  }
}
