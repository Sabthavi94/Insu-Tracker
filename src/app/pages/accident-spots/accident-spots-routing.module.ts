import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentSpotsPage } from './accident-spots.page';

const routes: Routes = [
  {
    path: '',
    component: AccidentSpotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccidentSpotsPageRoutingModule {}
