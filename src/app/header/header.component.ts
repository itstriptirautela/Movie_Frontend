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
  
constructor(private service:BackendService,private router: Router) { }
  isLoggedIn = this.service.isLoggedIn;

  ngOnInit(): void {
  }

  logout() {
    this.service.Logout();
  }
  login() {
    return this.isLoggedIn;
  }
}
