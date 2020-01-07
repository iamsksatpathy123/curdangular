import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class MovieBookingService {

  constructor(private http:HttpClient) {   }


  public doBooking(user){

return this.http.post("http://localhost:9080/ticket/bookTickets",user,{responseType: 'text' as 'json'});

  }
}
