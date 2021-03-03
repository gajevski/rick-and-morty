import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';

import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: 'details/:slug', component: DetailsComponent },
  { path: '', component: ListingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
