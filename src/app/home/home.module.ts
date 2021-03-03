import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HeroSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
