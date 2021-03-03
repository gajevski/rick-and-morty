import { Component, OnInit } from '@angular/core';
import { EpisodesService } from './episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes: any;

  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.episodesService.getAllEpisodes().subscribe(res => {
      this.episodes = res;
    });
  }

}
