import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'batman',
    loadChildren: () => import('./filmes/batman/batman.module').then( m => m.BatmanPageModule)
  },
  {
    path: 'dr-estranho-mt-vs-lk',
    loadChildren: () => import('./filmes/dr-estranho-mt-vs-lk/dr-estranho-mt-vs-lk.module').then( m => m.DrEstranhoMtVsLkPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
