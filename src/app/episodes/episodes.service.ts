import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { }

  getAllEpisodes(): Observable<any[]> {
    const url = 'https://rickandmortyapi.com/api/episode';

    return this.http.get(url).pipe(
        map((response): any[] => {
            return (response as any).results;
        })
    );
  }
}
