import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';

import {RatingEntity} from '../model/rating.entity';

@Injectable({
  providedIn: 'root'
})
export class RatingService extends  BaseService<RatingEntity>{

  constructor( ) {
    super();
    this.resourceEndpoint = '/ratings';
  }
}
