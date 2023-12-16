import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuNavPageRoutingModule } from './menu-nav-routing.module';

import { MenuNavPage } from './menu-nav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuNavPageRoutingModule
  ],
  declarations: [MenuNavPage],
  exports:[
    MenuNavPage
  ]
})
export class MenuNavPageModule {}
