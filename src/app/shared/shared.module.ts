import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { DemoMaterialModule } from '../material-module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent],
  imports: [DemoMaterialModule,
            RouterModule,
  ],
  exports: [NavigationComponent]
})
export class SharedModule { }
