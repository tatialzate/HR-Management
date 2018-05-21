import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, } from '../../authentication/user';
import { map, filter, take } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  validateUser(user: string, password: string) {
    return this.http.get<User[]>('api/users').pipe(
      map((users: User[]) => {
        return users.find(data => (data.user === user && data.password === password));
      })
    );
  }
}
