import { Component, OnInit } from '@angular/core';
import {CalendarEvent, CalendarView} from "angular-calendar";


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  title:any[];
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [
    {
      start: new Date(),
      title: 'Test event',
    },
    {
      start: new Date(),
      title: 'Test event 2',
    }
  ]



  constructor() { }

  ngOnInit(): void {

  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(events);
    this.title = events;
    //this.openAppointmentList(date)
  }

}
