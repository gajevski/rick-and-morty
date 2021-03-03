import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) },
  { path: 'locations', loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule) },
  { path: 'episodes', loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
