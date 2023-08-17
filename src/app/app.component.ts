import { Component } from '@angular/core';
import { BackendService } from './backend.service';
import { Movie } from './Movie';
import { MoviesService } from './movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviebookingapp';
  status:boolean=false
  name:string=''
  constructor( private service:BackendService ,private route:Router, private movieService:MoviesService){}
  
  logout(){
    this.service.status=false
    this.service.adminStatus=false
    this.status=false
  }
  getMovie(){
    console.log(this.name)
    if(this.name==''){
      alert("Please Enter movie name")
    }
    else{
      this.movieService.movieName=this.name
      this.route.navigate(['search'])
    }

  }
}
