import { Injectable } from '@angular/core';
/**
 * Logo API Service
 * @class LogoApiService
 * @description
 * This class is used to interact with the logo API.
 * @property baseUrl: string - The base URL of the logo API.
 *
 */
@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  private baseUrl: string = 'https://logo.clearbit.com/';

  constructor() { }

  /**
   * Get the url to the logo.
   * @param source - The source of the logo.
   * @returns The url to the logo.
   */
  getUrlToLogo(source: any) {
    return `${this.baseUrl}${new URL(source.url).hostname}`;
  }
}
