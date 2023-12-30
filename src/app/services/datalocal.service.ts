import { Injectable } from '@angular/core';

import { Registro } from '../models/registro.model';
import { NavController } from '@ionic/angular'; 
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'; 
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  guardados: Registro[] = []

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private appBrowser: InAppBrowser
  ) { 
    this.cargaStorage();
    console.log('DatalocalService creado. Guardados:', this.guardados);
  }

  async cargaStorage(){    
    this.storage.create()
    this.guardados = (await this.storage.get('registro') || [])
    console.log('Datos cargados:', this.guardados);
  }

  async guardar(format: string, text:string){
    await this.cargaStorage()
    
    const nuevo = new Registro(format, text)

    this.guardados.unshift(nuevo)

    this.storage.set('registro', this.guardados)

    this.abrir(nuevo)
  }

  abrir(registro: Registro){
    this.navCtrl.navigateForward('/history')

    switch(registro.type){
      case 'http':
        this.appBrowser.create(registro.text, '_system')
        break
      
      case 'geo':
        const [lat, lng] = registro.text.split(',').map(Number);
        this.navCtrl.navigateForward(`/map?lat=${lat}&lng=${lng}`);
        break
    }
  }
}
