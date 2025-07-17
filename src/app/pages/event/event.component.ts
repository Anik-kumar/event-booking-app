import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs';
import { IEvent } from '../../interfaces/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, AsyncPipe, RouterLink],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  eventService = inject(EventService); 
  // organizerId: number = 0;
  eventData$ : Observable<IEvent> = new Observable<IEvent>();
  events$: Observable<IEvent[]> = new Observable<IEvent[]>();
  
  constructor() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.getEventDetails(res['id']);
      this.eventData$.subscribe((event: IEvent) => {
        console.log('Event Details:', event);
        this.events$ = this.getEventsByOrganizer(event.organizerId);
        // this.events$.subscribe((events: IEvent[]) => {
        //   // this.organizerId = event.organizerId;
        //   console.log('events: ', events);
        // });
        // console.log('Events by Organizer:', this.events$);
      });
    });
  }

  ngOnInit(): void {
    
  }

  bookEvent(event: any): void {
    // Logic to book the event
    // This could involve calling a service method to handle the booking process
    // and then navigating to a confirmation page or showing a success message.
  }

  getEventDetails(id: number): void {
    this.eventData$ = this.eventService.getEventById(id);
  }

  getEventsByOrganizer(orgId: number): Observable<IEvent[]> {
    return this.eventService.getEventsByOrganizer(orgId);
  }
  // getEventsByOrganizer(orgId: number): void {

}
