import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';


@Component({
  selector: 'app-sign-up-now',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  zones:string[] = [
    "1a",
    "1b",
    "2a", 
    "2b",
    "3a",
    "3b",
    "4a",
    "4b",
    "5a",
    "5b",
    "6a",
    "6b",
    "7a",
    "7b",
    "8a",
    "8b",
    "9a",
    "9b",
    "10a",
    "10b",
    "11a",
    "11b",
    "12a",
    "12b",
    "13a",
    "13b"
  ] 

  postNewUser = {
    fullName: "",
    zone: "",
    email: "",
    password: ""
  }

  constructor(private registerService: RegisterService, private fb: FormBuilder) { }

  registerForm = new FormGroup({
    fullName: new FormControl ('', Validators.required),
    email: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required),
    zone: new FormControl ('', Validators.required),
  })

  onSubmit() {
    console.log('form submitted');
    console.log(this.registerForm.value);

    this.registerService.newUser(this.registerForm.value.fullName, this.registerForm.value.zone, this.registerForm.value.email, this.registerForm.value.password)
  }

  clearSignUp(){
    this.postNewUser.fullName = "";
    this.postNewUser.zone = "";
    this.postNewUser.email = "";
    this.postNewUser.password = "";
  }
  

  getUsers() {
    this.registerService.getUsers();
  }

  ngOnInit(){
    console.log(this.getUsers());
  }


}
