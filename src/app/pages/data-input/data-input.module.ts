import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataInputPageRoutingModule } from './data-input-routing.module';

import { DataInputPage } from './data-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DataInputPageRoutingModule
  ],
  declarations: [DataInputPage]
})
export class DataInputPageModule {}
