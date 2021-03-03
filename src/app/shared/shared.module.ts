import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { DemoMaterialModule } from '../material-module';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NavigationComponent, CardComponent],
  imports: [DemoMaterialModule,
            RouterModule,
            FlexLayoutModule
  ],
  exports: [NavigationComponent, CardComponent]
})
export class SharedModule { }
