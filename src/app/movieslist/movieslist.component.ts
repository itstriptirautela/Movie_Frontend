import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { Movie} from '../Movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  message!:string
  name:string=''
  page: number=1;
  tableSize:number=10;
  movies:Movie[]=[];
  Role: string | null = '';
  size!:number
  home:boolean=false
  filteredData:any[];
searchText:any; 
  //movies:any[]=[];
  constructor(private service:MoviesService, private route:Router, private aservice: BackendService) {
    this.Role = this.aservice.getRole();
    console.log(this.Role);
   }
  
  status:boolean=this.aservice.adminStatus
  ngOnInit(): void {
    this.getMoviesList();
  }
  getMoviesList(){
    this.service.getAllMovies().subscribe(data=>{
      this.movies=data
      this.filteredData=data;
      console.log(this.movies);
    })
  }
  filterMovie(){

    if (this.searchText) {
      this.filteredData = this.movies.filter(item =>
      item.movieShow.MovieName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.movieShow.TheatreName.toLowerCase().includes(this.searchText.toLowerCase())||
      item.TotalTicketsAllotted.toString().includes(this.searchText.toLowerCase()) 
     
      );
      } 
      else {
        this.filteredData = this.movies;
        }
  }
  // getMovie(){
  //   console.log(this.name)
  //   if(this.name==''){
  //     alert("Please Enter movie name")
  //   }
  //   else{
  //     this.service.movieName=this.name
  //     this.route.navigate(['search'])
  //   }

  // }
  // getMovies(){
  //   this.home=true;
  //   console.log(this.name)
  //   this.service.getMovies(this.name).subscribe(data=>{
  //     this.movies=data
     
  //   },error=>{
  //     if(this.movies.length==0)
  //     this.size=0
  //   })

  // }
  onTableDataChange(event:any){
    this.page=event;
    this.getMoviesList();
  }
  bookTicket(movie:Movie){
    this.service.movie=movie
    this.route.navigate(['bookticket'])
  }

  deleteMovie(movieName:string, theatreName:string){
    this.service.deleteMovie(movieName,theatreName).subscribe(data=>{
      this.message=data
      alert(data)
      this.aservice.adminStatus=true
      this.getMoviesList()
    })
  }
  movieDetails(movie:Movie){
    this.service.movie=movie
    this.route.navigate(['moviedetails'])
  }
  

}
