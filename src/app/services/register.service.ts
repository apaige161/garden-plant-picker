import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  //inject http 
  url = 'http://localhost:3000/register/';
  //data to be posted
  postNewUser: User = {
    fullName: "",
    zone: "",
    email: "",
    password: ""
  }

  constructor(private http: HttpClient) { }


  newUser(fullName: string, zone: string, email: string, password: string) {

    //set values
    this.postNewUser.fullName = fullName;
    this.postNewUser.zone = zone;
    this.postNewUser.email = email;
    this.postNewUser.password = password;

    console.log('set new user values')
    console.log(this.postNewUser)
    console.log('should show user object here ^^')

    //post new user
    this.http.post(this.url, this.postNewUser).subscribe(() => {
      console.log("added user");
    });

  }

  getUsers(){
    return this.http.get<User[]>(this.url);
  }





}
