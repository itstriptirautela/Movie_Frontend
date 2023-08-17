import { Movie } from "./Movie";

export class Tickets{
    constructor(
   public movie:Movie,
    public noOfTickets:number,
   public seatNumber:string[]=[]){

    }
}