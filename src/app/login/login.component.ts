import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: Router) { }
  loginForm:FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:  ['', Validators.required]
    })

  }

  get f() { return this.loginForm.controls; }

  invalid: boolean = false;
  handleLogin() {
    const val: String = this.loginForm.get('email').value;
    let [_, domain] = val.split("@");

    if (domain === 'admin.com') {
      if (this.loginForm.get('email').value === "abhishek.saxena02@admin.com" && this.loginForm.get('password').value==="pass@1234") {
        this.route.navigate(['admindashboard']);
      } else {
        this.invalid = true;
      }
    } else if (domain === 'nagarro.com') {
      if (this.loginForm.get('email').value === "abhishek.saxena02@nagarro.com" && this.loginForm.get('password').value==="pass@1234") {
        this.route.navigate(['dashboard']);
      } else {
        this.invalid = true;
      }
    }else {
      this.invalid = true;
    }

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

  }


  

}
