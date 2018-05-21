import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Form, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
  }

  createForm() {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  saveCredentials() {
    if (this.loginForm.valid) {
      sessionStorage.setItem('user', this.loginForm.value.user);
      sessionStorage.setItem('password', this.loginForm.value.password);
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.createForm();
    sessionStorage.clear();
  }
}
