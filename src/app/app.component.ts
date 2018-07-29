import { Component, OnInit } from '@angular/core';
import { TripDataService } from './trip-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RESTART';
  adding_trip = false;
  trips = [];

  newTrip = {
    title: ""
  }

  constructor(private tripDataservice: TripDataService) {
  }

  ngOnInit() {
    this.trips = this.tripDataservice.trips;

  }



  addTrip() {
    this.adding_trip = true;
  }

  cancelAddTrip() {
    console.log("cancelAddTrip");
    this.adding_trip = false;
  }

  doAddTrip() {
    console.log("doAddTrip");
    this.tripDataservice.trips.push(this.newTrip);

    this.newTrip = { title: "" }

    this.adding_trip = false;
  }
}
