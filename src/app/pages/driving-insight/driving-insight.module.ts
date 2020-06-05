import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivingInsightPageRoutingModule } from './driving-insight-routing.module';

import { DrivingInsightPage } from './driving-insight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrivingInsightPageRoutingModule
  ],
  declarations: [DrivingInsightPage]
})
export class DrivingInsightPageModule {}
