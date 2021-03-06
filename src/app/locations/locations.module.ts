import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { DemoMaterialModule } from '../material-module';
import { LocationsService } from './locations.service';


@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    DemoMaterialModule
  ],
  providers: [LocationsService]
})
export class LocationsModule { }
