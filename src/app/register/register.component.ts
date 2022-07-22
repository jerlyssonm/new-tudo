import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData: any;
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
    repassword: new FormControl('', Validators.required)

  })
  constructor() { }

  ngOnInit(): void {
  }
  getRegister(){
    this.registerData = this.registerForm.value;
    console.log(this.registerData)
  }
}
