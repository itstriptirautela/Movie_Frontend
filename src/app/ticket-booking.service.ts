import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tickets } from './Tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {
  
  //https://localhost:7042/api/Ticket?movieName=Bhaubali&theaterName=Inox
  private url='https://movieapibackend.azurewebsites.net/api/Ticket?';
  constructor(private httpClient:HttpClient) { }
  bookTickets(movieName:string,theaterName:string,data:any){
    //const urls='${this.url}?movieName=${movieName}&theaterName=${theaterName}';
    console.log(data)
    return this.httpClient.post(this.url+'movieName='+movieName+'&theaterName='+theaterName,data, { responseType: 'text' })
   
  }
    
  }

