import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Characters } from 'src/app/characters/types/characters.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() character: Characters;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToDetails(id: number): void {
    this.router.navigate([`characters/details/${id}`]);
  }

}
