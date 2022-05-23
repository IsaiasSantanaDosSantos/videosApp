import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrEstranhoMtVsLkPageRoutingModule } from './dr-estranho-mt-vs-lk-routing.module';

import { DrEstranhoMtVsLkPage } from './dr-estranho-mt-vs-lk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrEstranhoMtVsLkPageRoutingModule
  ],
  declarations: [DrEstranhoMtVsLkPage]
})
export class DrEstranhoMtVsLkPageModule {}
