import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogeadoPageRoutingModule } from './logeado-routing.module';

import { LogeadoPage } from './logeado.page';
import { MenuNavPageModule } from '../menu-nav/menu-nav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogeadoPageRoutingModule,
    MenuNavPageModule
  ],
  declarations: [LogeadoPage]
})
export class LogeadoPageModule {}