import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  getResources<T>(service: string): Observable<T[]> {
    return this.http.get<T[]>(service).pipe(
      map((collection: T[]) => {
        return collection;
      })
    );
  }
}
