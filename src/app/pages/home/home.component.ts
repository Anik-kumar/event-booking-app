import { Component, inject , OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { IApiResponse, IEvent } from '../../interfaces/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  eventList: IEvent[] = [];
  eventService = inject(EventService);

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe((res: IApiResponse) => {
      console.log(res);
      this.eventList = res.data;
    }, (err: any) => {
      console.error('Error fetching events:', err);
    });
  }

  viewEvent(event: any): void {
    console.log('View event:', event);
    this.router.navigateByUrl('/event/' + event.eventId);
  }

}
