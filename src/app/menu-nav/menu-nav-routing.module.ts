import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuNavPage } from './menu-nav.page';

const routes: Routes = [
  {
    path: '',
    component: MenuNavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuNavPageRoutingModule {}
