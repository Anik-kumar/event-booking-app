import { Component, inject , OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  eventService = inject(EventService);

  constructor() { }


  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe((res: any) => {
      console.log(res);
    }, (err: any) => {
      console.error('Error fetching events:', err);
    });
  }

}
