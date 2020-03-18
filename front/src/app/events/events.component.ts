import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
events= [];
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
    .subscribe(
      res => this.events = res,
      err => console.log('err:', err)
    )
  }

  

}
