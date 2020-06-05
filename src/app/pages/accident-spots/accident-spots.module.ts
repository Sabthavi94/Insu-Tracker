import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccidentSpotsPageRoutingModule } from './accident-spots-routing.module';

import { AccidentSpotsPage } from './accident-spots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccidentSpotsPageRoutingModule
  ],
  declarations: [AccidentSpotsPage]
})
export class AccidentSpotsPageModule {}
