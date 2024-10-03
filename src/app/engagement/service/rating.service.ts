import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {RatingEntity} from '../model/rating.entity';

/**
 * Rating Service
 * @class RatingService
 * @description
 * This class is used to interact with the rating API.
 * @property resourceEndpoint: string - The endpoint for the rating resource.
 */
@Injectable({
  providedIn: 'root'
})
export class RatingService extends  BaseService<RatingEntity>{

  constructor( ) {
    super();
    this.resourceEndpoint = '/ratings';
  }
}
