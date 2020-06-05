import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataInputPage } from './data-input.page';

const routes: Routes = [
  {
    path: '',
    component: DataInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataInputPageRoutingModule {}
