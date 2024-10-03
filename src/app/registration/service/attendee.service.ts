import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Attendee} from '../model/attendee.entity';

@Injectable({
  providedIn: 'root'
})


/**
 * Attendee Service
 * @class AttendeeService
 * @description
 * This class is used to interact with the attendee API.
 * @property resourceEndpoint: string - The endpoint for the attendee resource.
 */


export class AttendeeService extends  BaseService<Attendee>{

  constructor( ) {
    super();
    this.resourceEndpoint = '/attendees';
  }
}
