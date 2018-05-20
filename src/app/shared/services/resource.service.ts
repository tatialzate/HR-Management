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

  addRecord<T>(service: string, record: {}): Observable<T[]> {
    this.http.post<T[]>(service, record).subscribe();
    return this.getResources<T>(service);
  }

  deleteRecord<T>(service: string, id: string): Observable<T[]> {
    const url = `${service}/${id}`;
    this.http.delete<T[]>(url).subscribe(console.log);
    return this.getResources<T>(service);
  }
}
