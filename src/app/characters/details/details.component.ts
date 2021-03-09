import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { CharactersService } from '../characters.service';
import { Characters } from '../types/characters.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  character: Characters;

  constructor(private route: ActivatedRoute,
              private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacterDetails(this.route.snapshot.params.slug).subscribe(res => {
      this.character = res;
    });
}

}
