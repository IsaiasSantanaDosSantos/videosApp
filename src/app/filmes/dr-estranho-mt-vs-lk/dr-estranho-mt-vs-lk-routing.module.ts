import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrEstranhoMtVsLkPage } from './dr-estranho-mt-vs-lk.page';

const routes: Routes = [
  {
    path: '',
    component: DrEstranhoMtVsLkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrEstranhoMtVsLkPageRoutingModule {}
