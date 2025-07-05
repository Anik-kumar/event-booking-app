import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../interfaces/common';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getAllEventsUrl: string = `/api/EventBooking/GetAllEvents`;

  constructor(private http: HttpClient) { }


  getAllEvents() { 
    return this.http.get<IApiResponse>(this.getAllEventsUrl);
  }
}
