import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './User';
import { catchError, map, Observable } from 'rxjs';
import { ForgotPassword } from './ForgotPassword';
import { AuthguardService } from './authguard.service';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  adminStatus:boolean=false
  status:boolean=false
  user!:User;
  private users: any;
  //private url='http://localhost:8080/api/v1.0/moviebooking';
  private url= 'https://movieapibackend.azurewebsites.net/api/User';
  token = localStorage.getItem('Authorization');
  isLoggedIn = this.token == null || this.token == '' ? false : true;
  constructor(private httpClient:HttpClient, private auth:AuthServiceService, private router: Router) { }
  loginAgent(res: any, agent: string) {
    localStorage.setItem('Authorization', res.token);
    console.log(res.token);
    localStorage.setItem('Role', res.role);
    localStorage.setItem('firstName', res.firstName);
    localStorage.setItem('lastName', res.lastName);
    // localStorage.setItem('UserObj',JSON.stringify(res)); 
    console.log(res.role);
    
    
    // localStorage.setItem('LoginId', res.LoginId);
    // localStorage.setItem('UserEmail', res.email);
   
    console.warn(res.token);
    this.isLoggedIn = true;
   
    this.router.navigate(['movieslist']);
  }
authenticate(data:any):Observable<any>{
console.log(data)

return this.httpClient.post<any>(this.url,data);
// .pipe(
//   map((response:any)=>{
//     console.log(response)
//     localStorage.setItem('UserObj',JSON.stringify(response)); 

//   })
//)

}
getRole() {
  if (localStorage.getItem('Role')) {
   
    return localStorage.getItem('Role');
  }
  return 'NotLoggedIN';
}
addUser(user:User):Observable<User>{
return this.httpClient.post<User>(this.url+'/register',user);
}
  changePassword(loginId:string,forgotPassword:ForgotPassword){
    console.log(loginId)
    console.log(forgotPassword)
   // return this.httpClient.put(this.url+"/"+loginId+'/forgot',forgotPassword, { responseType: 'text' });
    return this.httpClient.put(this.url+'/forgot?loginId='+loginId,forgotPassword, { responseType: 'text' })
  }
  isloggedInCheack() {
    return this.isLoggedIn;
  }
  Logout() {
    localStorage.removeItem('Authorization');
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
