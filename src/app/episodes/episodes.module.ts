import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { DemoMaterialModule } from '../material-module';
import { EpisodesService } from './episodes.service';


@NgModule({
  declarations: [EpisodesComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    DemoMaterialModule
  ],
  providers: [EpisodesService]
})
export class EpisodesModule { }
