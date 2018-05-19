import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../authentication/user';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  validateUser(user, password) {
    return this.http.get<User[]>('api/users').pipe(
      map((users: User[]) => {
        const authUser = users.filter(data => data.user === user && data.password === password);
        return authUser.length ? true : false;
      })
    );
  }
}
