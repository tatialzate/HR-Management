import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthorizatedGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate() {
    const user: string = sessionStorage.getItem('user');
    const password: string = sessionStorage.getItem('password');

    return this.authService.validateUser(user, password).pipe(
      map(response => {
        if (response) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
