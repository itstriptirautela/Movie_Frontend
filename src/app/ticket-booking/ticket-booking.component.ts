import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../Movie';
import { MoviesService } from '../movies.service';
import { TicketBookingService } from '../ticket-booking.service';
import { Tickets } from '../Tickets';
import{MatDialog, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {

  status: boolean = false
  message: string = ''
  seats!: string[]
  movies:any
  theater:any
  popUpComponent=false;
  form: any = {
    numberOfTickets: '',
    seatNumber:[]
  };
  openPopup(){
    this.popUpComponent=true;
  }
  closePopup(){
    this.popUpComponent=false;
  }
  constructor(private dialog:MatDialog,private mservice: MoviesService, private service: TicketBookingService, private route: Router) { }
  movie: Movie = this.mservice.movie
  booking() {
    if (this.form.noOfTickets != '') {
      this.seats = this.form.seatNumber.split(',').map((seat: string)=>seat.trim());
      this.form.seatNumber=this.seats;
      console.log(this.seats)
      this.movies=this.movie.movieShow.MovieName;
      this.theater= this.movie.movieShow.TheatreName;
      console.log(this.form)
     this.service.bookTickets(this.movies,this.theater,this.form).subscribe(datas => {
      this.message = datas
      this.status = true
      console.log(datas)
      this.openPopup();
        
      })
      alert("Ticket booked successfully");
      this.route.navigate(['/movieslist']);
    }
  }

  cancel() {
    this.route.navigate(['movieslist'])
  }
  ngOnInit(): void {
  }

}
