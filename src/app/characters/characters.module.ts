import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { DemoMaterialModule } from '../material-module';
import { CharactersService } from './characters.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ListingComponent, DetailsComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    DemoMaterialModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule
  ],
  exports: [],
  providers: [CharactersService]
})
export class CharactersModule { }
