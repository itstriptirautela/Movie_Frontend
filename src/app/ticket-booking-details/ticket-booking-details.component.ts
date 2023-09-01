import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { TicketBookingService } from '../ticket-booking.service';
import { Movie } from '../Movie';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-ticket-booking-details',
  templateUrl: './ticket-booking-details.component.html',
  styleUrls: ['./ticket-booking-details.component.css']
})
export class TicketBookingDetailsComponent {
  popUpComponent=false;
  openPopup(){
    this.popUpComponent=true;
  }
  closePopup(){
    this.popUpComponent=false;
  }
  constructor(private mservice: MoviesService, private service: BackendService, private route: Router) { }
  
  movie: Movie = this.mservice.movie;
  tickets = JSON.parse(localStorage.getItem('ticketBookingDetails'))
book(){
  this.service.status=true;
 alert("Ticket booked successfully");
 this.route.navigate(['/movieslist']);
}
cancel(){
  this.service.status=true;
  this.route.navigate(['/bookticket']);
}
}
