import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';

const routes: Routes = [{ path: '', component: HeroSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
