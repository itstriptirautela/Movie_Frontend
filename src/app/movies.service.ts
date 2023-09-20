
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthguardService } from './authguard.service';
import { AuthServiceService } from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  movie!:Movie
  movieName:string=''
  //private url='http://localhost:8080/api/v1.0/moviebooking';
  private url= 'https://movieapibackend.azurewebsites.net/api/Movie'
  constructor(private httpClient:HttpClient, private auth:AuthServiceService) { }
  private getHeadersWithAuthorization(): HttpHeaders {
    const token = this.auth.getToken();
    const headers= new HttpHeaders().set('Authorization','Bearer '+token);
    return headers;
  }

  getAllMovies():Observable<Movie[]>{
    
    return this.httpClient.get<Movie[]>('https://movieapibackend.azurewebsites.net/api/Movie/AllMovie')

  }
  getMovies(movieName:string):Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.url+'/SearchMovie?movieName='+movieName)
  }

  deleteMovie(movieName:string){
    const headers = this.getHeadersWithAuthorization();
    const options = { headers};
   
    return this.httpClient.delete(this.url+`/delete?movieName=${movieName}`,{ responseType: 'text' })
  }

  movieDetails(movieName:string, theatreName:string):Observable<number>{
    return this.httpClient.get<number>(this.url+'/bookedmovies/'+movieName+'/'+theatreName)
  }
}
