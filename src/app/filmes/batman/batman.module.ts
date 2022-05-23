import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatmanPageRoutingModule } from './batman-routing.module';

import { BatmanPage } from './batman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatmanPageRoutingModule
  ],
  declarations: [BatmanPage]
})
export class BatmanPageModule {}
