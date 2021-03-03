import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { DemoMaterialModule } from '../material-module';
import { CharactersService } from './characters.service';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  exports: [CharactersComponent],
  providers: [CharactersService]
})
export class CharactersModule { }
