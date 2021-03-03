import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<any[]> {
    const url = 'https://rickandmortyapi.com/api/location';

    return this.http.get(url).pipe(
        map((response): any[] => {
            return (response as any).results;
        })
    );
  }
}
