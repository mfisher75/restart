import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripDataService{


  trips = [{
  	title: 'Trip to London'
  }, {
  	title: 'Trip to Australia'
  } ,{
  	title: 'Trip to Barcelona'
  }];

  constructor() { }


}
