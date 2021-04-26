import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private registerService: RegisterService, private fb: FormBuilder, private authService : AuthService, private router : Router) { }

  loginForm = new FormGroup({
    email: new FormControl ('', Validators.required),
    password: new FormControl ('', Validators.required),
  })

  onSubmit() {
    console.log('form submitted');
    //console.log(this.loginForm.value);

    //this.registerService.newUser(this.registerForm.value.fullName, this.registerForm.value.zone, this.registerForm.value.email, this.registerForm.value.password)
  }

  ngOnInit(): void {
  }

  login(){
    this.authService.validate(this.loginForm.value.email, this.loginForm.value.password)
    .then((response) => {
      this.authService.setUserInfo({'user' : response['user']});
      this.router.navigate(['create']);

    })
  }

}
