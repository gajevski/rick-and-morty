import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Characters } from './types/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

getAllCharacters(): Observable<Characters[]> {
  const url = 'https://rickandmortyapi.com/api/character';

  return this.http.get(url).pipe(
      map((response): Characters[] => {
          return (response as any).results;
      })
  );
}
}
