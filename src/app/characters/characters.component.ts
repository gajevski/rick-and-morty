import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: any;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe(res => {
      this.characters = res;
    });
  }

}
