import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private token: string;
  private users: any;
  constructor() { }
  setToken(token:string)
  {
    this.token=token;
  }
  getToken()
  {
    return this.token;
  }

  setUser(user: any)
  {
    this.users=user;
    console.log(user.user_Id)
  }
  getUser()
  {
    return this.users;
  }
}
