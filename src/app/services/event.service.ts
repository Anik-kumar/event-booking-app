import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse, IEvent } from '../interfaces/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getAllEventsUrl: string = `/api/EventBooking/GetAllEvents`;
  getEventByIdUrl: string = `/api/EventBooking/GetEventById?id=`;
  getEventsByOrganizerIdUrl: string = `/api/EventBooking/GetEventsByOrganizer?organizerId=`;

  constructor(private http: HttpClient) { }


  getAllEvents() { 
    return this.http.get<IApiResponse>(this.getAllEventsUrl);
  }

  getEventById(eventId: number) {
    return this.http.get<IEvent>(this.getEventByIdUrl + `${eventId}`).pipe(map((res: any) => {
      return res.data;
    }));
  }
  
  getEventsByOrganizer(orgId: number) {
    return this.http.get<IEvent[]>(this.getEventsByOrganizerIdUrl + `${orgId}`).pipe(map((res: any) => {
      return res.data;
    }));
  }
}
