import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl = 'https://freeapi.miniprojectideas.com/api/EventBooking';

  constructor(private http: HttpClient) { }


  getAllEvents() {    
    return this.http.get(`${this.apiUrl}/GetAllEvents`);
  }
}
