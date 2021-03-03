import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

getAllCharacters(): Observable<any[]> {
  const url = 'https://rickandmortyapi.com/api/character';

  return this.http.get(url).pipe(
      map((response): any[] => {
          return (response as any).results;
      })
  );
}
}
