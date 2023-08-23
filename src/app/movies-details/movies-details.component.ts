import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  totalSeats:number=0
  output!:number
  constructor(private service:MoviesService, private aservice:BackendService) { }
  movie=this.service.movie
  status:boolean=this.aservice.adminStatus
 
  ngOnInit(): void {
    // this.movieDetails();
    this.aservice.status=true;
    console.log(this.movie)
  }
  // movieDetails(){
  //   this.service.movieDetails(this.movie.movieShow.MovieName,this.movie.movieShow.TheatreName).subscribe(data=>{
  //     this.output=data
  //     this.totalSeats=this.output+this.movie.TotalTicketsAllotted

  //   })
      
  // }

}
