import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {MovieBookingService} from '../movie-booking.service'
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 

 user: User = new User(0,"");  
 message:any;
  constructor(private service:MovieBookingService) { }

  ngOnInit() {
  }
public bookingNow()
{
 let resp= this.service.doBooking(this.user);
 resp.subscribe((data)=>this.message=data);
}
}
