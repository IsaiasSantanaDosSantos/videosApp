import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatmanPage } from './batman.page';

const routes: Routes = [
  {
    path: '',
    component: BatmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatmanPageRoutingModule {}
