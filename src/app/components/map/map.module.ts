import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapComponent } from './map.component';


@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapPageRoutingModule, IonicModule]
})
export class MapModule { }
