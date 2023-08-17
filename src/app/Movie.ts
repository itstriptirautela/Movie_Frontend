import { MovieShow } from "./MovieShow";

export class Movie{
    Id!: number;
    movieShow!:MovieShow;
    TotalTicketsAllotted!:number;
    BookedTickets!:number;
    Status:string='';
}