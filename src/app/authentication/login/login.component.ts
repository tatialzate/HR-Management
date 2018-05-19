import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {
    sessionStorage.clear();
  }
  getUser(user) {
    sessionStorage.setItem('user', user);
  }

  getPassword(password) {
    sessionStorage.setItem('password', password);
  }

  ngOnInit() {
    sessionStorage.removeItem('password');
  }
}
