import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'moviebookingapp';
  status:boolean=false
  name:string=''
  firstName:any;
  lastName:any;
constructor(private service:BackendService,private router: Router) { }
  isLoggedIn = this.service.isLoggedIn;

  ngOnInit(): void {
    this.firstName= localStorage.getItem('firstName');
    this.lastName= localStorage.getItem('lastName');
   
    
  }
 

  // firstName = JSON.parse(localStorage.getItem('firstName'));
  // lastName= JSON.parse(localStorage.getItem('lastName'));
  

  logout() {
    this.service.Logout();
  }
  login() {
    return this.isLoggedIn;
  }
  search(){
    this.service.status=true
    this.router.navigate(['search'])
  }
}
