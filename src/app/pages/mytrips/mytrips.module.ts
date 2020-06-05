import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MytripsPageRoutingModule } from './mytrips-routing.module';

import { MytripsPage } from './mytrips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MytripsPageRoutingModule
  ],
  declarations: [MytripsPage]
})
export class MytripsPageModule {}
