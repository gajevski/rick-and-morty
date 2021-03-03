import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Characters } from '../types/characters.model';

@Component({
  selector: 'app-characters-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  characters: Characters[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe(res => {
      this.characters = res;
    });
  }

}
