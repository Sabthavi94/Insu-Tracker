import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrivingInsightPage } from './driving-insight.page';

const routes: Routes = [
  {
    path: '',
    component: DrivingInsightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrivingInsightPageRoutingModule {}
