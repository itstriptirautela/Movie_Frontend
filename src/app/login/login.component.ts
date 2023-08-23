import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { BackendService } from '../backend.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginUser } from '../LoginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status!: boolean;
  errorMessage:string='username or password is not correct'
  // form:FormGroup
  errMsg = '';
    result: any;
values:any
  constructor(private service:BackendService, private route:Router , private aservice:AppComponent) { 
    // this.form = new FormGroup({
    //   loginId: new FormControl(''),
    //   password: new FormControl('')
    // })
    
  }
  user: LoginUser = {
    LoginId: '',
    password: '',
  };
  onSubmit(){
  
    this.service.authenticate(this.user).subscribe(
      (res) => {
          this.service.loginAgent(res, this.user.LoginId);
          console.warn(res);
          this.result = res;
          this.service.status=true;
        },
        (err) => {
          console.log(err);
          this.errMsg = 'Username or Password is Incorrect';
        }
      );
    
  }

  signUp(){
    this.route.navigate(['register'])
  }
 // this.form.username, this.form.password
  // adminLogin(){
  //   this.service.authenticate(this.form).subscribe(  (res) => {
  //     this.userService.loginAgent(res, this.form.);
  //     console.warn(res);
  //     this.result = res;
   
  //   },
  //   (err) => {
  //     console.log(err);
  //     this.errMsg = 'Username or Password is Incorrect';
  //   }
  // );
  // }
  ngOnInit(): void {
  }

}
